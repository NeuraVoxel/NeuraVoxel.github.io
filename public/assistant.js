(function () {
  const root = document.querySelector(".assistant");
  if (!root) return;

  const launcher = root.querySelector(".assistant__launcher");
  const closeBtn = root.querySelector(".assistant__close");
  const form = root.querySelector(".assistant__form");
  const input = root.querySelector(".assistant__input");
  const messages = root.querySelector(".assistant__messages");

  function open() {
    root.dataset.open = "true";
    launcher.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function close() {
    root.dataset.open = "false";
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  launcher.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.dataset.open === "true") close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.className = "assistant__msg assistant__msg--user";
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "assistant__msg assistant__msg--bot";
    botMsg.textContent =
      "啾～我是飞飞，可以帮你了解万物闭环、乐乐工坊与各场景作品。正式版将接入 Agent 能力，敬请期待。";
    messages.appendChild(botMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  });
})();
