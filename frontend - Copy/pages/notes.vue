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
      <!-- ... (the rest of your template remains the same) ... -->
      <div id="toolbar"></div>
      <div
        ref="quill-editor"
        v-quill:myQuillEditor="editorOption"
        class="quill-editor shadow-2xl"
        :content="content"
        @change="onEditorChange($event), update()"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      >
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

<!-- <template>
  <div>
    <h1>Notes</h1>
    <hr /> -->
<!-- Display all notes -->
<!-- <div>
      <h3>All Notes</h3>
      <div v-if="notes.data.length > 0">
        <div
          style="border: 1px solid red; padding: 10px; margin: 10px 0"
          v-for="note in notes.data"
          :key="note.id"
        >
          {{ note.attributes.title }}
          {{ note.attributes.content }}
        </div>
      </div>
      <div v-else>
        No notes found
        {{ JSON.stringify(notes) }}
      </div>
    </div> -->
<!-- Create new note -->
<!-- <div>
      <h3>Create New Note</h3> -->
<!-- <form @submit.prevent="createNote"> -->
<!-- <label> Title: <input v-model="newNote.title" /> </label>
      <label>Content: <textarea v-model="newNote.content"></textarea></label>
      <br />
      <button type="button" @click="createNote()">Create Note</button> -->
<!-- </form> -->
<!-- </div>
  </div>
</template> -->

<!-- <script setup>
import { ref, onMounted } from "vue";

const router = useRouter();
const notes = ref({ data: [] });
const user = ref(null);
const newNote = ref({
  title: "",
  content: "",
  users_permissions_user: null,
});

const fetchNotes = async () => {
  const { find } = useStrapi();
  let fetchedNotes = await find("notes");
  console.log(fetchedNotes);
  notes.value = fetchedNotes;
};

const createNote = async () => {
  const { create } = useStrapi();
  let createRes = await create("notes", newNote.value);
  router.push({ path: "/notes" });
};

onMounted(async () => {
  const user = useStrapiUser();
  newNote.value.users_permissions_user = user;
  console.log(newNote);
  if (!user) {
    router.push({ path: "/login" });
    return;
  }
  fetchNotes();
});
</script> -->
