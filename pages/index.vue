<template>
  <div class="flex w-screen h-screen p-0 bg-white">
    <sideBar />
    <div
      class="w-full bg-white h-full flex justify-evenly items-center"
      id="main"
    >
      <div class="h-full flex flex-col justify-center text-white">
        <h1 v-if="!user">🪫You're not logged</h1>
        <h1 v-else>🔋Welcome back {{ user.name }}</h1>
        <h1 class="text-4xl text-left">Build your components</h1>
        <h2 class="text-left">
          Powered by AI check our new service to make nice components
        </h2>
        <div class="mt-2 flex justify-start">
          <nuxt-link
            to="/login"
            v-if="!user"
            class="bg-green-500 mt-5 text-black px-10 text-center py-2 rounded-lg"
            >Login</nuxt-link
          >
          <button
            v-else
            @click="logout"
            class="bg-red-400 px-10 mt-5 text-center h-10 rounded-lg"
          >
            Logout
          </button>
          <nuxt-link
            to="/login"
            class="bg-indigo-500 mt-5 text-black px-10 text-center py-2 ml-4 rounded-lg"
            >Build now</nuxt-link
          >
        </div>
      </div>
      <div class="h-full flex flex-col justify-center items-center" id="right">
        <exampleComponent id="component" />
      </div>
    </div>
  </div>
</template>
<script setup>
const user = ref({
  name: "John Doe",
});
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean")
      to.meta.pageTransition.name =
        +to.params.id > +from.params.id ? "slide-left" : "slide-right";
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Saira Condensed", sans-serif;
}
#main {
  background-image: radial-gradient(white 0.25px, rgb(30, 27, 75) 0.75px);
  background-size: 50px 50px;
}
#component {
  transform: rotateX(360deg) rotateY(328deg);
  transform-style: preserve-3d;
}

#right {
  perspective: 1000px;
}

button {
  outline: none;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
