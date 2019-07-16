function downloadAnswers() {
  html2canvas(document.querySelector("form")).then(formData => {
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "worksheet-1.jpg");
    downloadLink.href = formData.toDataURL("image/jpeg", 1);
    downloadLink.click();
  });
}

document.querySelector("button").addEventListener("click", downloadAnswers);
