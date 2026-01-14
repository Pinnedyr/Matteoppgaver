(() => {
  const BANNER_VISIBLE_TIME = 5000; // 5 sek
  const MIN_WAIT = 5 * 60 * 1000;
  const MAX_WAIT = 10 * 60 * 1000;

  // Bannere (med link)
  const banners = [
    {
      bannertekst: "Kommer du altid inn i timen med feil bok? Prøv våres Skoleplaner ved å trykke her.",
      bannerfarge: "#ff4757",
      bannerlink: "https://www.wtfq.online/skoleplaner/"
    },
    {
      bannertekst: "Test 02",
      bannerfarge: "#1e90ff",
      bannerlink: ""
    },
    {
      bannertekst: "Test 03",
      bannerfarge: "#2ed573",
      bannerlink: ""
    }
  ];

  function getRandomDelay() {
    return Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
  }

  function createBanner(banner) {
    const div = document.createElement("div");
    div.textContent = banner.bannertekst;

    Object.assign(div.style, {
      position: "fixed",
      top: "-150px",
      left: "50%",
      transform: "translateX(-50%)",
      background: banner.bannerfarge,
      color: "#fff",
      padding: "20px 40px",
      borderRadius: "15px",
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      transition: "top 0.8s ease",
      zIndex: "9999",
      cursor: "pointer"
    });

    // 👉 Klikk åpner link
    div.addEventListener("click", () => {
      window.open(banner.bannerlink, "_blank", "noopener,noreferrer");
    });

    document.body.appendChild(div);

    // Slide inn
    setTimeout(() => {
      div.style.top = "20px";
    }, 50);

    // Slide ut
    setTimeout(() => {
      div.style.top = "-150px";
      setTimeout(() => div.remove(), 800);
    }, BANNER_VISIBLE_TIME);
  }

  async function loop() {
    // Test: vis første banner raskt
    await new Promise(r => setTimeout(r, 1000));

    while (true) {
      const banner = banners[Math.floor(Math.random() * banners.length)];
      createBanner(banner);

      await new Promise(r =>
        setTimeout(r, BANNER_VISIBLE_TIME + getRandomDelay())
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loop);
  } else {
    loop();
  }
})();
