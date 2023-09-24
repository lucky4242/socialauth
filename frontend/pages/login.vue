<template>
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
</script>
