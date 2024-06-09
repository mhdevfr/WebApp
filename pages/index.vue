<template>
  <div class="flex w-screen h-screen p-0 bg-white">
    <sideBar />
    <div class="w-full bg-white h-full flex justify-evenly items-center" id="main">
      <div class="h-full flex flex-col justify-center text-white">
        <h1 v-if="!user">🪫You're not logged</h1>
        <h1 v-else>🔋Welcome back</h1>
        <h1 class="text-4xl text-left">Build your components</h1>
        <h2 class="text-left">Powered by AI check our new service to make nice components</h2>
        <div class="mt-2 flex justify-start">
          <nuxt-link
            v-if="!user"
            @click.prevent="signIn"
            class="bg-green-500 mt-5 text-black px-10 text-center py-2 rounded-lg"
          >Login</nuxt-link>
          <button
            v-else
            @click="signOut"
            class="bg-red-400 px-10 mt-5 text-center h-10 rounded-lg"
          >
            Logout
          </button>
          <nuxt-link to="/login" class="bg-indigo-500 mt-5 text-black px-10 text-center py-2 ml-4 rounded-lg">
            Build now
          </nuxt-link>
        </div>
      </div>
      <div class="h-full flex flex-col justify-center items-center" id="right">
        <exampleComponent id="component" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

watchEffect(() => {
  if (user.value) {
    router.push('/account')
  }
})

const signIn = async () => {
  const { error } = await client.auth.signInWithOAuth({
    provider: 'github',
  })
  if (error) console.log('SignIn Error:', error)
}

const signOut = async () => {
  const { error } = await client.auth.signOut()
  if (error) console.log('SignOut Error:', error)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Saira Condensed', sans-serif;
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
</style>
