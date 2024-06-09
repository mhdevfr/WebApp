<template>
    <form @submit.prevent class="h-96  flex w-3/4 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100" v-motion-slide-visible-top> 
        <div class="w-1/2 h-full flex rounded-md">
            <div class="bg-green-300 flex h-full w-16 rounded-md">
              <button class="text-black bg-green-400 w-full rounded-md items-center flex flex-col justify-center">
                OAuth GitHub
               <img src="/assets/images/github.png" class="w-10 h-10">
              </button>
              </div>
            <div class="w-full text-white flex flex-col items-center">
              <h1 class="text-3xl my-12 text-center">Build your component</h1>
              <h1 class=" text-xl w-64"><cite>"Chaque composant est essentiel dans un site il ne faut jamais les négligés, l'UI/UX n'a jamais été aussi important qu'en 2024."</cite></h1>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center w-1/2">
          <h1 class="text-white text-3xl text-center my-4">Login</h1>
          <input type="email" class="w-3/4 h-10 my-4 text-center rounded-xl" placeholder="youremail">
          <input type="password" class="w-3/4 h-10 my-4 text-center rounded-xl" placeholder="mypassword">
          <h2 ref="monRetour"></h2>
          <nuxt-link to="/signUp" class="m-3 text-white">No account yet ?</nuxt-link> 
          <input type="submit" class="w-48 bg-green-400 h-8 mt-8 rounded-sm hover:bg-green-400" value="Login"> 
        </div>
      </form>
</template>
<script setup>
</script>