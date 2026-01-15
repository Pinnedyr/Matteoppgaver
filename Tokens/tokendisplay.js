(function () {
  const COOKIE_NAME = "tokens";
  const TOKEN_PAGE = "https://wtfq.online/tokens/";
  const ICON_URL = "https://wtfq.online/tokens/token.png";

  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? decodeURIComponent(match[2]) : "0";
  }

  const tokens = getCookie(COOKIE_NAME);

  // ---- STYLE (SAMME SOM SIDEN DIN) ----
  const style = document.createElement("style");
  style.textContent = `
    .wtfq-token-box {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: #1f2937;
      color: #f8fafc;
      border: 1px solid #334155;
      border-radius: 14px;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      font-size: 0.95rem;
      cursor: pointer;
      user-select: none;
      z-index: 9999;
      transition: background .15s ease, border-color .15s ease, transform .04s ease;
    }

    .wtfq-token-box:hover {
      background: #111827;
      border-color: #475569;
    }

    .wtfq-token-box:active {
      transform: translateY(1px);
    }

    .wtfq-token-box img {
      width: 22px;
      height: 22px;
    }

    .wtfq-token-tooltip {
      position: absolute;
      bottom: -36px;
      right: 0;
      background: #020617;
      color: #e2e8f0;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 6px 10px;
      font-size: 0.75rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transform: translateY(6px);
      transition: opacity .15s ease, transform .15s ease;
    }

    .wtfq-token-box:hover .wtfq-token-tooltip {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // ---- HTML ----
  const box = document.createElement("div");
  box.className = "wtfq-token-box";
  box.innerHTML = `
    <img src="${ICON_URL}" alt="Token">
    <span>${tokens}</span>
    <div class="wtfq-token-tooltip">Trykk her for å få Tokens</div>
  `;

  box.addEventListener("click", () => {
    window.open(TOKEN_PAGE, "_blank", "noopener noreferrer");
  });

  document.body.appendChild(box);
})();
