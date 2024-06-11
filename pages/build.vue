<script setup>
import { ref } from 'vue';
const { chat } = useChatgpt();

const data = ref("");
const inputData = ref("");
const iframeSrc = ref("");
const frameworks = ref([]);
const tailwind = ref(false);
const bootstrap = ref(false);
const sass = ref(false);
const css = ref(false);

async function sendMessage() {
  try {
    const frameworks = [];
    if (tailwind.value) frameworks.push("Tailwind");
    if (bootstrap.value) frameworks.push("Bootstrap");
    if (sass.value) frameworks.push("SASS");
    if (css.value) frameworks.push("CSS");

    const frameworksPrompt = frameworks.length ? `Utilise les frameworks CSS suivants : ${frameworks.join(', ')}` : 'N’utilise aucun framework CSS particulier';
    const prompt = `Incarne toi en développeur front-end expert en création de composants stylisés. ${frameworksPrompt}. Pour les images, utilise la src : https://placehold.co/dimensionxdimension. Pour le texte, utilise : 'Hello World'. Ne renvoie que du code, sans commentaires ni explications.`;
    const response = await chat(inputData.value + " " + prompt, "gpt-3.5-turbo");
    data.value = response;
    updateIframe(response);
  } catch (error) {
    alert(`Join the waiting list if you want to use GPT-4 models: ${error}`);
  }
}

const updateIframe = (data) => {
  iframeSrc.value = `
  <!DOCTYPE html>
  <html lang='en'>
  <head>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <meta charset="UTF-8">
    <title>Generated Code</title>
  </head>
  <body>
    ${data}
  </body>
  </html>`;
};
</script>

<template>
  <div class="inset-0 w-screen h-screen bg-indigo-950">
    <div class="h-full w-full flex items-center">
      <sideBar />
      <div class="h-full w-full flex items-center justify-center">
        <div class="bg-white h-3/4 w-3/4 rounded-xl flex flex-col">
          <div
            class="bg-gray-950 h-full w-full rounded-br-none rounded-xl rounded-bl-none flex justi">
            <iframe
              :srcdoc="iframeSrc"
              class="h-full w-3/4 p-10"
            ></iframe>
          </div>
          <div class="p-4 flex h-1/4 overflow-hidden">
            <div class="w-1/2 border-r">
              <h1 class="text-1xl text-gray-800">Make your prompt</h1>
              <input
                type="text"
                class="w-full h-3/4 rounded-md bg-gray-300 text-start"
                placeholder="Here you can put what kind of component you're looking for..."
                v-model="inputData"
              />
            </div>
            <div class="ml-4 w-4/5 h-full flex">
              <div class="h-full w-full">
                <h1 class="text-1xl text-start">Choose your CSS Framework</h1>
                <div class="mt-2 flex flex-col justify-center">
                  <div class="w-1/4 flex justify-start">
                    <label for="Tailwind" class="mr-2">Tailwind</label>
                    <input
                      type="checkbox"
                      id="Tailwind"
                      name="Tailwind"
                      v-model="tailwind"
                    />
                  </div>
                  <div class="w-1/4 flex justify-start">
                    <label for="Bootstrap" class="mr-2">Bootstrap</label>
                    <input
                      type="checkbox"
                      id="Bootstrap"
                      name="Bootstrap"
                      v-model="bootstrap"
                    />
                  </div>
                  <div class="w-1/4 flex justify-start">
                    <label for="sass" class="mr-2">SASS</label>
                    <input type="checkbox" id="SASS" name="SASS" v-model="sass" />
                  </div>
                  <div class="w-1/4 flex justify-start">
                    <label for="noframework" class="mr-2"
                      >No Framework</label
                    >
                    <input type="checkbox" id="CSS" name="CSS" v-model="css" />
                  </div>
                </div>
            </div>
            <div
              class="w-1/5 h-full flex justify-center flex-col items-center"
              >
              <button
                @click="sendMessage"
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Build
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
textarea {
  resize: none;
  text-align: center;
  padding: 10px;
  outline: none;
}
*{
    overflow: hidden;
}
</style>
