import { PreventableEvent } from "@bytescale/upload-widget-vue/PreventableEvent";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

export function openUploadModal({
  event,
  options,
  onComplete
}: {
  event?: PreventableEvent;
  onComplete?: (files: UploadWidgetResult[]) => void;
  options: UploadWidgetConfig;
}): void {
  if (event !== undefined) {
    event.preventDefault();
  }
  UploadWidget.open(options).then(
    files => {
      if (onComplete !== undefined) {
        onComplete(files);
      }
    },
    error => console.error("Uploader error.", error)
  );
}
