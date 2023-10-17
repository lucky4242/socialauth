<template></template>
<script setup>
import { onMounted } from "vue";
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const { authenticateProvider } = useStrapiAuth();

  let userAuth = await authenticateProvider("github", route.query.access_token);
  console.log(userAuth);
  if (userAuth) {
    router.push({ path: "/users" });
  }
});
</script>
