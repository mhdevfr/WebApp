<script setup></script>
<template>
  <div class="inset-0 w-screen h-screen bg-indigo-950">
    <div class="h-full w-full flex items-center">
      <sideBar />
      <div class="h-full w-full flex items-center justify-center">
        <div class="bg-white h-3/4 w-3/4 rounded-xl flex flex-col">
          <div
            class="bg-gray-950 h-3/4 w-full rounded-br-none rounded-xl rounded-bl-none flex justify-center items-center"
          >
            <h1 class="text-2xl text-gray-100 opacity-50">
              This is the build lab, you can make any components you want !
            </h1>
          </div>
          <div class="p-4 flex h-1/4">
            <div class="w-1/2 border-r">
              <h1 class="text-1xl text-gray-800">Make your prompt</h1>
              <textarea
                class="w-full h-3/4 rounded-md bg-gray-300 text-start"
                placeholder="Here you can put what kind of component you're looking for..."
              >
              </textarea>
            </div>
            <div class="ml-4 w-1/2 h-1/4">
                <h1 class="text-1xl text-start">Choississez votre framework CSS</h1>
                <div class="mt-4 flex flex-col justify-center">
                    <div class="w-1/4 flex justify-start">
                        <label for="Tailwind" class="mr-2">Tailwind</label>
                        <input type="checkbox" id="Tailwind" name="Tailwind" value="Tailwind">
                    </div>
                    <div class="w-1/4 flex justify-start">
                        <label for="Bootstrap" class="mr-2">Bootstrap</label>
                        <input type="checkbox" id="Bootstrap" name="Bootstrap" value="Bootstrap">
                    </div>
                    <div class="w-1/4 flex justify-start">
                        <label for="sass" class="mr-2">SASS</label>
                        <input type="checkbox" id="SASS" name="SASS" value="SASS">
                    </div>
                    <div class="w-1/4 flex justify-start">
                        <label for="noframework" class="mr-2">No Framework (CSS)</label>
                        <input type="checkbox" id="CSS" name="CSS" value="CSS">
                    </div>
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
</style>