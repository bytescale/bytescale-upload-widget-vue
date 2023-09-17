<template>
  <h1>@bytescale/upload-widget-vue example</h1>
  <button id="uploadButton" @click="uploadFile">Upload a file...</button>
  <div id="dropzone">
    <UploadDropzone :options="options" :on-update="onDropzoneUpdate" />
  </div>
</template>

<script lang="ts">
import { openUploadModal } from "@bytescale/upload-widget-vue/OpenUploadModal";
import { PreventableEvent } from "@bytescale/upload-widget-vue/PreventableEvent";
import UploadDropzone from "@bytescale/upload-widget-vue/UploadDropzone.vue";
import { UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

const options: UploadWidgetConfig = {
  apiKey: "free",
  multi: true
};

export default {
  name: "App",
  components: {
    UploadDropzone
  },
  data() {
    return {
      options
    };
  },
  methods: {
    uploadFile(event: PreventableEvent) {
      openUploadModal({
        event,
        options,
        onComplete: (files: UploadWidgetResult[]): void => {
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            console.log("Files uploaded:");
            console.log(files.map(f => f.fileUrl));
          }
        }
      })
    },
    onDropzoneUpdate: (files: UploadWidgetResult[]): void => {
      if (files.length === 0) {
        console.log("No files selected in dropzone.");
      } else {
        console.log("Files uploaded in dropzone:");
        console.log(files.map(f => f.fileUrl));
      }
    }
  }
};
</script>
