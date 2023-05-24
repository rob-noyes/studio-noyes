
var text = document.querySelector(".footer-socials .email-content");
async function copyContent() {

    try {
      await navigator.clipboard.writeText(text.textContent);
      console.log('Content copied to clipboard');
      const emailCopy = document.querySelector('.email-copied')
      emailCopy.classList.add('active')
      setTimeout(() => {
        emailCopy.classList.remove('active')
      }, 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }

text.addEventListener('click', copyContent)
