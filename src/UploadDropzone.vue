<template>
  <div
    ref="container"
    :style="{ position: 'relative', width: '100%', minWidth: '280px', maxWidth: widthOrDefault, height: heightOrDefault }"
  ></div>
</template>

<script lang="ts">
import { UploaderInterface, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UploadDropzone",
  props: {
    uploader: { type: Object as PropType<UploaderInterface>, required: true },
    options: { type: Object as PropType<UploadWidgetConfig | undefined>, required: false },
    onComplete: { type: Function as PropType<((files: UploadWidgetResult[]) => void) | undefined>, required: false },
    onUpdate: { type: Function as PropType<(files: UploadWidgetResult[]) => void> | undefined, required: false },
    height: { type: String, required: false },
    width: { type: String, required: false }
  },
  computed: {
    widthOrDefault(): string {
      return this.width ?? "600px";
    },
    heightOrDefault(): string {
      return this.height ?? "375px";
    }
  },
  mounted() {
    if (this.uploader === undefined) {
      throw new Error("[vue-uploader] You must provide the 'uploader' property to the 'UploadDropzone' component.");
    }

    const onUpdateParams: UploadWidgetConfig = this.onUpdate === undefined ? {} : { onUpdate: this.onUpdate };
    this.uploader
      .open({
        ...this.options,
        ...onUpdateParams,
        container: this.$refs.container as HTMLElement,
        layout: "inline"
      })
      .then(
        files => {
          if (this.onComplete !== undefined) {
            this.onComplete(files);
          }
        },
        error => console.error("Uploader error.", error)
      );
  }
});
</script>
