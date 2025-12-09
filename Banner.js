(function () {
    const BANNER_TEXT = "Vi feirer at vi har fått nytt domene på wtfq.online!!!";
    const SHOW_DURATION = 5 * 60 * 1000;

    const banner = document.createElement("div");
    banner.id = "auto-banner";
    banner.innerText = BANNER_TEXT;

    Object.assign(banner.style, {
        position: "fixed",
        top: "-80px",
        left: "0",
        width: "100%",
        padding: "20px",
        backgroundColor: "#007BFF",
        color: "white",
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        transition: "top 0.6s ease",
        zIndex: "9999"
    });

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.style.top = "0px";
    }, 200);

    setTimeout(() => {
        banner.style.top = "-80px";
    }, SHOW_DURATION + 200);
})();
