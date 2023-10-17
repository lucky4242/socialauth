<!-- <template>
  <div>
    <h1>Login</h1>
    <a href="http://localhost:1337/api/connect/github">
      <button>Login with GitHub</button>
    </a>

    <a href="http://localhost:1337/api/connect/facebook">
      <button @click="loginTest()">Login with Facebook</button>
    </a>
  </div>
</template>
<script setup>
const { find } = useStrapi();

const loginTest = async () => {
  console.log(await find("notes", "1"));
};
</script> -->

<template>
  <div
    class="min-h-screen flex justify-center items-center text-center mx-auto sm:pl-24 bg-yellow-200"
  >
    <div class="w-1/2 hidden sm:block m-5 p-6">
      <img src="~assets/undraw_secure_login_pdn4.svg" />
    </div>
    <div class="sm:w-1/2 w-4/5">
      <h2 class="m-5 font-black text-3xl">Social Login</h2>
      <div class="shadow-xl bg-white p-10">
        <a
          href="http://localhost:1337/api/connect/github"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer"
        >
          <span><font-awesome-icon :icon="['fab', 'github']" /></span>
          Github
        </a>
        <a
          href="http://localhost:1337/api/connect/facebook"
          class="cursor-pointer m-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-xl"
        >
          <span>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </span>
          Facebook
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const { find } = useStrapi();

const loginTest = async () => {
  console.log(await find("notes", "1"));
};
</script>
<style lang="scss" scoped></style>
