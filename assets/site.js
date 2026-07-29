const root = document.documentElement;
const toggle = document.querySelector("[data-language-toggle]");

function applyLanguage(language) {
  const isEnglish = language === "en";
  root.lang = isEnglish ? "en" : "tr";
  document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
    element.textContent = isEnglish ? element.dataset.en : element.dataset.tr;
  });
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.hidden = element.dataset.lang !== language;
  });
  if (toggle) toggle.textContent = isEnglish ? "Türkçe" : "English";
  localStorage.setItem("atlas-language", language);
}

applyLanguage(localStorage.getItem("atlas-language") || "tr");
toggle?.addEventListener("click", () => applyLanguage(root.lang === "tr" ? "en" : "tr"));
