import loginVue from '~/pages/login.vue'; import { NuxtLink } from
'#build/components';
<template>
  <div class="p-6 mb-4 shadow-lg bg-dark">
    <div class="sm:w-2/3 mx-auto flex justify-between items-center">
      <div>
        <h1>NotesApp</h1>
      </div>
      <div class="flex sm:space-x-5 space-x-2 items-center">
        <NuxtLink :to="`/users`">
          <p v-if="user">
            <span>
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            {{ user }}
          </p>
        </NuxtLink>
        <NuxtLink
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          @click="logout"
          v-if="user"
        >
          Logout
        </NuxtLink>

        <NuxtLink
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          v-if="!user"
          to="/login"
        >
          Logout
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
// const { find } = useStrapi();
// console.log(find);
// const loginTest = async () => {
//   console.log(await find("user", "1"));
// };
const base = useStrapi();

const logout = async () => {
  const { error } = await base.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>
<style lang="scss" scoped></style>
