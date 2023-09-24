<template>
  <div>
    <h1>Notes</h1>
    <hr />
    <!-- Display all notes -->
    <div>
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
    </div>
    <!-- Create new note -->
    <div>
      <h3>Create New Note</h3>
      <!-- <form @submit.prevent="createNote"> -->
      <label> Title: <input v-model="newNote.title" /> </label>
      <label>Content: <textarea v-model="newNote.content"></textarea></label>
      <br />
      <button type="button" @click="createNote()">Create Note</button>
      <!-- </form> -->
    </div>
  </div>
</template>
<script setup>
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
</script>
