<template>
    <div class="h-screen w-screen bg-indigo-950 flex items-center">
        <div class="h-full w-1/5">
            <sideBar/>
        </div>
        <div class="w-2/3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-white  border-gray-50">
            <div class="flex">
                <div class="w-3/4 p-4">
                    <h1 class="text-4xl font-semibold text-gray-800">Welcome to your account {{ user.name }} !</h1>
                    <h1 class="text-2xl mt-10  text-gray-800"> 📨 : {{ user.email }}</h1>
                    <h1 class="text-2xl mt-2  text-gray-800"> 📞 : {{ user.phone }}</h1>
                    <h1 class="text-2xl mt-2  text-gray-800"> 🏠 : {{ user.address }}</h1>
                </div>
                <img :src="user.img" class="rounded-full p-10">
            </div>
            <div class="w-full">
                <h1 class="p-4">Your last components :</h1>
                <table v-for="component in components" v-if="components" :key="component.id" cellspacing="0" class="w-full h-full">
                    <tr class="bg-indigo-500 text-lg text-left w-full h-12">
                        <td class="px-2 w-1/5 ">{{ component.name }}</td>
                        <td class="text-left w-2/5 px-2">{{ component.description }}</td>
                        <td class="w-1/5 px-2">{{ component.usage }}</td>
                        <td class="w-1/5">
                            <button class="px-4 mx-2 bg-red-400" @click="deleteComponent(component.id)">
                                Delete
                            </button>
                            <button class="px-4 bg-green-400" @click="copyComponent(component.id)">
                                Copy
                            </button>
                        </td>
                    </tr>
                </table>
                <div class="w-full bg-gray-400 h-96 flex justify-center items-center flex-col" v-if="!components">
                    <h1>You don't have any components yet...</h1>
                    <nuxt-link class="bg-green-400 p-2 mt-2 rounded" to="/build" >Create now</nuxt-link>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                phone: '1234567890',
                address: '1234 Main St, City, Country',
                img: 'http://via.placeholder.com/150x150',
            },
            components: [
                {
                    name: 'Component 1',
                    description: 'This is a component that does something',
                    usage: 'Used in the main page',
                    link:   'http://localhost:3000',
                    id: 1,
                },
                {
                    name: 'Component 2',
                    description: 'This is another component that does something else',
                    usage: 'Used in the sidebar',
                    id: 2,
                },
                {
                    name: 'Component 3',
                    description: 'This is a third component that does something again',
                    usage: 'Used in the footer',
                    id: 3,
                },
                {
                    name: 'Component 4',
                    description: 'This is a third component that does something again',
                    usage: 'Used in the footer',
                    id: 3,
                },
                {
                    name: 'Component 5',
                    description: 'This is a third component that does something again',
                    usage: 'Used in the footer',
                    id: 3,
                },
            ]
        }
    },
    methods: {
        deleteComponent(id) {
            this.components = this.components.filter(component => component.id !== id)
        },
        copyComponent(id) {
            const component = this.components.find(component => component.id === id)
            this.components.push({ ...component, id: this.components.length + 1 })
    }
  }
}
</script>

<style scoped>
</style>