(() => {
  const BANNER_VISIBLE_TIME = 5000; // 5 sek
  const MIN_WAIT = 5 * 60 * 1000;
  const MAX_WAIT = 10 * 60 * 1000;

  const banners = [
    {
      bannertekst: "Want the best schoolplans? Click here to open schoolplans and add your own class.",
      bannerfarge: "#ff4757",
      bannerlink: "https://www.wtfq.online/skoleplaner/"
    },
    {
      bannertekst: "Do you have suggestions for our site? Click here.",
      bannerfarge: "#1e90ff",
      bannerlink: "https://docs.google.com/forms/d/e/1FAIpQLSckiALFsZhY7CymY6bAQRYuAGhrNWw_8QfA0eliQnA7PxNRdg/viewform"
    },
    {
      bannertekst: "Are you bored? Click here to play many games made by us!",
      bannerfarge: "#a400d6",
      bannerlink: "https://www.wtfq.online/Tokens/"
    },
    {
      bannertekst: "Check out our Tiktok, by clicking here!",
      bannerfarge: "#576e50",
      bannerlink: "https://www.tiktok.com/@www.wtfq.online"
    }
  ];

  function getRandomDelay() {
    return Math.random() * (MAX_WAIT - MIN_WAIT) + MIN_WAIT;
  }

  function createBanner(banner) {
    const bannerDiv = document.createElement("div");
    const textDiv = document.createElement("div");

    textDiv.textContent = banner.bannertekst;

    Object.assign(bannerDiv.style, {
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
      maxWidth: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      whiteSpace: "nowrap",           // standard: hold alt på en linje
      overflowWrap: "break-word",     // bryt bare hvis må
      wordBreak: "break-word"
    });

    // Klikk kun hvis link finnes
    if (typeof banner.bannerlink === "string" && banner.bannerlink.trim() !== "") {
      bannerDiv.style.cursor = "pointer";
      bannerDiv.addEventListener("click", () => {
        window.open(banner.bannerlink, "_blank", "noopener,noreferrer");
      });
    }

    bannerDiv.appendChild(textDiv);
    document.body.appendChild(bannerDiv);

    // Slide inn
    setTimeout(() => {
      bannerDiv.style.top = "20px";
    }, 50);

    // Slide ut
    setTimeout(() => {
      bannerDiv.style.top = "-150px";
      setTimeout(() => bannerDiv.remove(), 800);
    }, BANNER_VISIBLE_TIME);
  }

  async function loop() {
    await new Promise(r => setTimeout(r, 7500));

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
