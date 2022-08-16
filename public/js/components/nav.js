document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("a[role='navlink']");

  for (const navLink of navLinks) {
    navLink.onclick = (event) => {
      event.preventDefault();

      const href = navLink.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    };
  }
});
