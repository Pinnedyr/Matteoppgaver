(() => {
  const BANNER_VISIBLE_TIME = 5000; // 5 sekunder
  const MIN_WAIT = 5 * 60 * 1000;   // 5 minutter
  const MAX_WAIT = 10 * 60 * 1000;  // 10 minutter

  // Finn URL til dette JS-scriptet
  function getScriptBaseURL() {
    const scripts = document.getElementsByTagName("script");
    const thisScript = scripts[scripts.length - 1].src;
    return thisScript.substring(0, thisScript.lastIndexOf("/"));
  }

  const BASE_URL = getScriptBaseURL(); // dynamisk base URL

  async function loadBanners() {
    try {
      const res = await fetch(`${BASE_URL}/banners.json`);
      if (!res.ok) throw new Error("Kunne ikke hente banners.json");
      return await res.json();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  function getRandomDelay() {
    return Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
  }

  function createBanner(banner) {
    const div = document.createElement("div");

    div.textContent = banner.bannertekst;
    div.style.position = "fixed";
    div.style.top = "-100px";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.background = banner.bannerfarge;
    div.style.color = "#fff";
    div.style.padding = "20px 40px";
    div.style.borderRadius = "15px";
    div.style.fontSize = "18px";
    div.style.fontFamily = "Arial, sans-serif";
    div.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    div.style.transition = "top 0.6s ease";
    div.style.zIndex = "9999";

    document.body.appendChild(div);

    // Slide ned
    setTimeout(() => {
      div.style.top = "20px";
    }, 50);

    // Fjern etter 5 sekunder
    setTimeout(() => {
      div.style.top = "-100px";
      setTimeout(() => div.remove(), 600);
    }, BANNER_VISIBLE_TIME);
  }

  async function showBannerLoop() {
    const banners = await loadBanners();
    if (!banners.length) return;

    while (true) {
      const randomBanner =
        banners[Math.floor(Math.random() * banners.length)];

      createBanner(randomBanner);

      // Vent 5 sekunder + tilfeldig 5–10 minutter
      await new Promise(r => setTimeout(r, BANNER_VISIBLE_TIME + getRandomDelay()));
    }
  }

  document.addEventListener("DOMContentLoaded", showBannerLoop);
})();
