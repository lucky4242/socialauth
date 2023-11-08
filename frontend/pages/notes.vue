<template>
  <div>
    <Nav />
    <div class="w-4/5 sm:w-2/3 mx-auto">
      <button
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
        @click="toggleAddEditors"
      >
        Add Editor
      </button>
      <NuxtLink
        :to="`/notes`"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
      >
        Preview
        <span><font-awesome-icon :icon="['fas', 'eye']" /></span>
      </NuxtLink>
      <div
        v-if="addEditor"
        class="absolute hex left-0 top-0 bottom-0 right-0 w-full"
      >
        <div class="bg-white sm:w-1/3 w-4/5 shadow-lg p-10 mx-auto mt-32">
          <p v-if="error" class="text-red-600 my-3">{{ error }}</p>
          <p v-if="success" class="text-green-600 my-3">{{ success }}</p>
          <form @submit="addNewEditor">
            <input
              v-model="editorEmail"
              class="p-5 font-bold w-full border-3 border-black-500"
              type="email"
              placeholder="Email"
            />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
            >
              Add
            </button>
          </form>
          <button type="submit" class="button--green" @click="toggleAddEditors">
            Cancel
          </button>
        </div>
      </div>
      <!-- <quil /> -->

      <div id="toolbar"></div>

      <div>
        <quil
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event), update()"
          @ready="onEditorReady($event)"
        />

        <form ref="formInput">
          <input
            id="file"
            ref="input"
            name="files"
            class="file"
            type="file"
            style="display: none"
            @change="doUpload"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const { find, findOne, create, delete: remove } = useStrapi();

const router = useRouter();

const addEditor = ref(false);
const error = ref("");
const success = ref("");
const editorEmail = ref("");
const content = ref("");
const res = ref({ id: "" }); // Replace with actual data

const toggleAddEditors = () => {
  addEditor.value = !addEditor.value;
};

const addNewEditor = () => {
  // Implement your logic to add a new editor
  // const { create } = useStrapi();
  // let createRes = await create("notes", newNote.value);
  // router.push({ path: "/notes" });
};

const onEditorChange = (event) => {
  content.value = event;
  update();
};

const update = () => {
  // Implement your logic to update content
};

// Rest of your functions (doUpload, onEditorBlur, onEditorFocus, onEditorReady) go here

onMounted(() => {
  // Initialize your component as needed
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 50px 0;
}
.ql-toolbar span {
  color: #fff;
}
</style>
