<template>
  <div>
    <div id="toolbar"></div>
    <div
      ref="quillEditor"
      v-quill="editorOption"
      class="quill-editor shadow-2xl"
      :content="content"
      @change="onEditorChange"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @ready="onEditorReady"
    ></div>
  </div>
</template>

<script setup>
import VueQuill from "vue-quill-editor";

// Import the styles for VueQuill (you might need to adjust the path)
import "quill/dist/quill.snow.css";

// Initialize VueQuill
Vue.use(VueQuill);

const content = ref(""); // Your editor content
const editorOption = ref({
  theme: "snow", // 'snow' for a simple toolbar, or 'bubble' for a richer toolbar
});

const onEditorChange = (newContent) => {
  content.value = newContent;
  // Handle your content changes here
};

const onEditorBlur = () => {
  // Handle editor blur event
};

const onEditorFocus = () => {
  // Handle editor focus event
};

const onEditorReady = () => {
  // Handle editor ready event
};
</script>
