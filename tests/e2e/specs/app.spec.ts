import App from "../pageobjects/app.page";

describe("vue-uploader sandbox", () => {
  it("should contain a dropzone component", async () => {
    await App.open();
    await expect(App.dropzoneUploadButton).toHaveText("Upload a File");
  });
  it("should contain a file upload button", async () => {
    await App.open();
    await App.modalLauncher.click();
    await expect(App.modalButton).toHaveText("Upload a File");
  });
});
