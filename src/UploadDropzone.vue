<template>
  <div
    ref="container"
    :style="{ position: 'relative', width: '100%', minWidth: '280px', maxWidth: widthOrDefault, height: heightOrDefault }"
  ></div>
</template>

<script lang="ts">
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UploadDropzone",
  props: {
    options: { type: Object as PropType<UploadWidgetConfig>, required: true },
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
    if (this.options as any === undefined) {
      throw new Error("[bytescale-upload-widget] You must provide the 'options' property to the 'UploadDropzone' component.");
    }

    const onUpdateParams: Partial<UploadWidgetConfig> = this.onUpdate === undefined ? {} : { onUpdate: this.onUpdate };
    UploadWidget
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
