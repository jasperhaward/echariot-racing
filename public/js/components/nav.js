document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("a[role='navlink']");

  for (const navLink of navLinks) {
    navLink.onclick = (event) => {
      event.preventDefault();

      const href = navLink.getAttribute("href");
      const target = document.querySelector(href);

      const rect = target.getBoundingClientRect();

      window.scrollTo({
        top: window.pageYOffset + rect.top - 50, // window scroll Y pos + element top - nav height
        behavior: "smooth",
      });
    };
  }
});
