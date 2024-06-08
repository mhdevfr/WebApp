<template>
    <div class="flex w-screen h-screen p-0 bg-white">
        <sideBar/>
        <div class="w-full bg-white h-full flex justify-evenly items-center" id="main">
            <div class="h-full flex flex-col justify-center text-white">
                <h1 v-if="!userLogin">🪫You're not logged</h1>
                <h1 class="text-4xl text-left">Build your components</h1>
                <h2 class="text-left">Powered by AI check our new service to make nice components</h2>
                <div class="mt-2 flex justify-start ">
                    <nuxt-link to="/login" class="bg-green-500 mt-5 text-black px-10 text-center py-2 rounded-lg">Login</nuxt-link>
                    <nuxt-link to="/login" class="bg-indigo-500 mt-5 text-black  px-10 text-center py-2 ml-4 rounded-lg">Build now</nuxt-link>
                </div>
            </div>
            <div class="h-full flex flex-col justify-center items-center" id="right">
                <exampleComponent id="component"/>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
    font-family: 'Saira Condensed', sans-serif;
}
#main{
    background-image: radial-gradient(white 0.25px, rgb(30, 27, 75) 0.75px);
    background-size: 50px 50px;
}
#component{
    transform: rotateX(360deg) rotateY(328deg);
    transform-style: preserve-3d;
} 

#right{
    perspective: 1000px;
}
</style>