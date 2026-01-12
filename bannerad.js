(() => {
  const BANNER_VISIBLE_TIME = 5000; // 5 sekunder synlig
  const MIN_WAIT = 5 * 60 * 1000;   // 5 minutter
  const MAX_WAIT = 10 * 60 * 1000;  // 10 minutter

  // Bannere innebygd
  const banners = [
    { bannertekst: "Test 01", bannerfarge: "#ff4757" },
    { bannertekst: "Test 02", bannerfarge: "#1e90ff" },
    { bannertekst: "Test 03", bannerfarge: "#2ed573" }
  ];

  function getRandomDelay() {
    return Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
  }

  function createBanner(banner) {
    const div = document.createElement("div");

    div.textContent = banner.bannertekst;
    div.style.position = "fixed";
    div.style.top = "-150px"; // start utenfor skjermen
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.background = banner.bannerfarge;
    div.style.color = "#fff";
    div.style.padding = "20px 40px";
    div.style.borderRadius = "15px";
    div.style.fontSize = "18px";
    div.style.fontFamily = "Arial, sans-serif";
    div.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    div.style.transition = "top 0.8s ease";
    div.style.zIndex = "9999";

    document.body.appendChild(div);

    // Slide ned
    setTimeout(() => {
      div.style.top = "20px"; // ønsket posisjon
    }, 50);

    // Slide opp og fjern etter BANNER_VISIBLE_TIME
    setTimeout(() => {
      div.style.top = "-150px";
      setTimeout(() => div.remove(), 800); // match transition
    }, BANNER_VISIBLE_TIME);
  }

  async function showBannerLoop() {
    // Første banner vises etter tilfeldig pause
    await new Promise(r => setTimeout(r, getRandomDelay()));

    while (true) {
      const randomBanner =
        banners[Math.floor(Math.random() * banners.length)];

      createBanner(randomBanner);

      // Vent 5 sekunder + tilfeldig 5–10 minutter før neste banner
      await new Promise(r => setTimeout(r, BANNER_VISIBLE_TIME + getRandomDelay()));
    }
  }

  document.addEventListener("DOMContentLoaded", showBannerLoop);
})();
