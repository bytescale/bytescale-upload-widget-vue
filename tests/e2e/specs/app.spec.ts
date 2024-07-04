import App from "../pageobjects/app.page";

describe("upload-widget-vue sandbox", () => {
  it("should contain a dropzone component", async () => {
    await App.open();
    await expect(App.dropzoneUploadButton).toHaveText("Upload a File");
  });
  it("should contain a file upload button", async () => {
    await App.open();
    await (await App.modalLauncher).click();
    await expect(App.modalButton).toHaveText("Upload a File");
  });
});
