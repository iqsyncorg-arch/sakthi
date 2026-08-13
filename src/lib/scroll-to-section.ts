export function scrollToSection(target: string) {
  if (target === "home") {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.assign("/");
    }
    return;
  }

  if (window.location.pathname === "/") {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }

  window.location.assign(`/#${target}`);
}
