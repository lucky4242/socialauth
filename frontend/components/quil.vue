<template>
  <ClientOnly fallback-tag="div" fallback="Loading editor...">
    <QuillEditor theme="snow" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
</script>
<style scoped>
.editor-container {
  border: none;
}
</style>
