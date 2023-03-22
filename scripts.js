document.addEventListener("DOMContentLoaded", function() {
  const htmlEditor = document.getElementById("htmlEditor");
  const htmlPreview = document.getElementById("htmlPreview");
  const backButton = document.getElementById("backButton");
  const forwardButton = document.getElementById("forwardButton");
  const clearButton = document.getElementById("clearButton");

  function updatePreview() {
    htmlPreview.contentWindow.document.open();
    htmlPreview.contentWindow.document.write(htmlEditor.value);
    htmlPreview.contentWindow.document.close();
  }

  function undo() {
    document.execCommand("undo", false, null);
  }

  function redo() {
    document.execCommand("redo", false, null);
  }

  function clearEditor() {
    htmlEditor.value = "";
    updatePreview();
  }

  htmlEditor.addEventListener("input", updatePreview);
  backButton.addEventListener("click", undo);
  forwardButton.addEventListener("click", redo);
  clearButton.addEventListener("click", clearEditor);
  updatePreview();
});
