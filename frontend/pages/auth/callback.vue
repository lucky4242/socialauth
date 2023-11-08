<template></template>
<script setup>
import { onMounted } from "vue";
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const { fetchUser, authenticateProvider } = useStrapiAuth();

  let userAuth = await authenticateProvider("github", route.query.access_token);
  console.log(userAuth);

  const user = useStrapiUser();
  localStorage.userDetails = JSON.stringify(user.value);
  // console.log(user.value);
  if (userAuth) {
    router.push({ path: "/users" });
  }
});
</script>
