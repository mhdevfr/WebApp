<template>
  <div class="h-screen w-screen bg-indigo-950 flex items-center">
    <div class="h-full w-1/5">
      <sideBar />
    </div>
    <div
      class="w-2/3 h-4/5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-white border-gray-50"
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
        </div>
        <div class="flex justify-end w-full items-start">
          <img :src="userMetadata.avatar_url" class="rounded-full h-48 m-10" />
        </div>
      </div>
      <div class="w-full">
        <h1 class="px-4 my-4">Your last components :</h1>
        <div class="w-11/12 px-4">
          <table
            v-if="components.length > 0"
            cellspacing="0"
            class="w-full h-full"
          >
            <tr
              v-for="component in components"
              :key="component.id"
              class="bg-indigo-500 text-lg text-left w-full h-12"
            >
              <td class="px-2 w-1/5">{{ component.name }}</td>
              <td class="text-left w-2/5 px-2">{{ component.description }}</td>
              <td class="w-1/5 px-2">{{ component.usage }}</td>
              <td class="w-1/5">
                <button
                  class="px-4 mx-2 bg-red-400"
                  @click="deleteComponent(component.id)"
                >
                  Delete
                </button>
                <button
                  class="px-4 bg-green-400"
                  @click="copyComponent(component.id)"
                >
                  Copy
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="w-full flex justify-center items-center">
          <button
            @click="signOut"
            class="bg-red-400 px-10 mt-5 text-center h-10 rounded-lg :hover:bg-red-900"
          >
            Logout
          </button>
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
