document.querySelectorAll("[data-disclosure]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.disclosure);
    if (!target) return;

    const willOpen = target.hidden;
    target.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));

    if (/^(show|hide) abstract$/i.test(button.textContent.trim())) {
      button.textContent = willOpen ? "Hide abstract" : "Show abstract";
    }
  });
});
