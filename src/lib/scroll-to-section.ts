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
      history.replaceState(null, "", `#${target}`);
      return;
    }
  }

  window.location.assign(`/#${target}`);
}

export function scrollToHashOnLoad() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const tryScroll = (attempts = 0) => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (attempts < 12) {
      window.setTimeout(() => tryScroll(attempts + 1), 100);
    }
  };

  tryScroll();
}
