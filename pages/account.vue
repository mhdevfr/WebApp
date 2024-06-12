<template>
  <div class="h-screen w-screen bg-indigo-950 flex items-center">
    <div class="h-full w-1/5">
      <sideBar />
    </div>
    <div
      class="w-2/3 h-2/3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-white border-gray-50"
      v-motion-slide-visible-top
    >
      <div class="flex">
        <div class="w-3/4 p-4">
          <h1 class="text-4xl font-semibold text-gray-800">
            Welcome to your account {{ userMetadata.name }} !
          </h1>
          <h1 class="text-2xl mt-10 text-gray-800">
            <Icon name="ic:baseline-email" color="black" />
            {{ userMetadata.email }}</h1>
          <h1 class="text-2xl mt-2 text-gray-800">
            <Icon name="uil:github" color="black" />
            {{ userMetadata.preferred_username }}
          </h1>
          <h1 class="text-2xl mt-2 text-gray-800">
            <Icon name="uil:user" color="black" />
            {{ userMetadata.name }}</h1>
            <button
            @click="signOut"
            class="bg-red-400 px-10 mt-5 text-center h-10 rounded-lg :hover:bg-red-900"
          >
            Logout
          </button>
        </div>
        <div class="flex justify-end w-full items-start">
          <img :src="userMetadata.avatar_url" class="rounded-full h-48 m-10" />
        </div>
      </div>
      <div class="w-full">
        <h1 class="px-4 my-4">Your last components :</h1>
        <div>
          <componentList/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const client = useSupabaseClient()
const user = useSupabaseUser();
const router = useRouter()

const userMetadata = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar_url: "",
  preferred_username: "",
});

definePageMeta({
  middleware: 'auth'
})


watchEffect(() => {
  if (user.value) {
    const { user_metadata } = user.value;
    userMetadata.value = {
      name: user_metadata.name || "",
      email: user_metadata.email || "",
      phone: user_metadata.phone || "",
      address: user_metadata.address || "",
      avatar_url: user_metadata.avatar_url || "",
      preferred_username: user_metadata.preferred_username || "",
    };
  }
});

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.log("SignOut Error:", error);
  } else {
    router.push("/");
  }
};

const components = ref([
  {
    name: "Component 1",
    description: "This is a component that does something",
    usage: "Used in the main page",
    id: 1,
  },
  {
    name: "Component 2",
    description: "This is another component that does something else",
    usage: "Used in the sidebar",
    id: 2,
  },
  {
    name: "Component 3",
    description: "This is a third component that does something again",
    usage: "Used in the footer",
    id: 3,
  },
]);

const deleteComponent = (id: number) => {
  components.value = components.value.filter(
    (component) => component.id !== id
  );
};

const copyComponent = (id: number) => {
  const component = components.value.find((component) => component.id === id);
  if (component) {
    components.value.push({ ...component, id: components.value.length + 1 });
  }
};
</script>
<style scoped>

	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:nth-child(n+5),
	tr th:nth-child(n+5) {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>