<!-- <template>
  <div>
    <Nav />
    <div class="sm:w-2/3 w-4/5 mt-10 mx-auto">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
        @click="createNote()"
      >
        Create Note
      </button>
      <h1 class="my-5 text-2xl font-black">Your Notes</h1>
      <div
        v-if="notes.data.length > 0"
        class="mx-auto sm:grid grid-cols-3 gap-2"
      >
        <div
          v-for="note in notes.data"
          :key="note.id"
          class="rounded border-2 border-blue-400 p-10 sm:flex shadow-lg h-48 items-center justify-center text-center"
        >
          <NuxtLink :to="`/notes`">
            <h1 class="text-xl">
              {{ note.attributes.title }}
            </h1>
          </NuxtLink>
        </div>
      </div>
      <infinite-loading spinner="spiral" @infinite="infiniteHandler" />
    </div>
  </div>
</template>
<script setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //
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
  console.log(createRes);
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

<style lang="scss" scoped></style> -->
<template>
  <div>
    <Nav />
    <div class="sm:w-2/3 w-4/5 mt-10 mx-auto">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
        @click="createNote()"
      >
        Create Note
      </button>
      <h1 class="my-5 text-2xl font-black">Your Notes</h1>
      <div
        v-if="notes.data.length > 0"
        class="mx-auto sm:grid grid-cols-3 gap-2"
      >
        <div
          v-for="note in notes.data"
          :key="note.id"
          class="rounded border-2 border-blue-400 p-10 sm:flex shadow-lg h-48 items-center justify-center text-center"
        >
          <NuxtLink :to="`/notes`">
            <h1 class="text-xl">
              {{ note.attributes.title }}
            </h1>
          </NuxtLink>
        </div>
      </div>
      <infinite-loading spinner="spiral" @infinite="infiniteHandler" />
    </div>
  </div>
</template>
<script setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css"; //
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
  console.log(createRes);
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

<style lang="scss" scoped></style>
