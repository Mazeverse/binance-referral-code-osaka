const copyBtn = document.getElementById("copyBtn");
const copyMessage = document.getElementById("copyMessage");
const refCode = document.getElementById("refCode").innerText;

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(refCode);
    copyMessage.textContent = "Copied: OSAKA";
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyMessage.textContent = "";
    }, 1800);
  } catch (error) {
    copyMessage.textContent = "Copy failed. Please copy manually.";
  }
});
