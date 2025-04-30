const hamburger = document.getElementById("hamburger");
const [bar1, bar2, bar3] = hamburger.querySelectorAll("span");
const navList = document.getElementById("nav-list");

let isOpen = false;

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  hamburger.classList.toggle("hamburger-active");

  if (isOpen) {
    // Ubah jadi X
    bar1.classList.add("rotate-45", "-translate-y-1/2");
    bar2.classList.add("opacity-0");
    bar3.classList.add("-rotate-45", "translate-y-1/2");

    navList.classList.remove("hidden");
    navList.classList.add("flex");
    navList.style.maxHeight = navList.scrollHeight + "px";
  } else {
    // Balik ke hamburger
    bar1.classList.remove("rotate-45", "-translate-y-1/2");
    bar2.classList.remove("opacity-0");
    bar3.classList.remove("-rotate-45", "translate-y-1/2");

    navList.style.maxHeight = "0px";
    setTimeout(() => {
      navList.classList.remove("flex");
      navList.classList.add("hidden");
    }, 300); // delay after animation
  }
});

document
  .querySelectorAll(".accordion-container")
  .forEach((accordion, index) => {
    const button = accordion.querySelector("button");
    const icon = button.querySelector("img");
    const panel = accordion.querySelector(".accordion-panel-wrapper");

    // Inisialisasi state awal
    if (index === 0) {
      accordion.classList.add("py-6");
      accordion.classList.remove("py-[23px]");
      panel.style.marginTop = "12px";
      panel.style.maxHeight = panel.scrollHeight + "px"; // Buka accordion pertama
      icon.src = "./assets/images/icons/cross-x-filled.svg"; // Ikon terbuka
      icon.classList.remove("-rotate-45");
    } else {
      accordion.classList.add("py-[23px]");
      accordion.classList.remove("py-6");
      panel.style.marginTop = "0px";
      panel.style.maxHeight = "0px"; // Tutup accordion lainnya
      icon.src = "./assets/images/icons/cross-x.svg"; // Ikon tertutup
      icon.classList.add("-rotate-45");
    }

    // Event listener untuk toggle accordion
    accordion.addEventListener("click", () => {
      const isCurrentlyOpen = panel.style.maxHeight !== "0px";

      document.querySelectorAll(".accordion-container").forEach((acc) => {
        const p = acc.querySelector(".accordion-panel-wrapper");
        const ic = acc.querySelector("img");

        if (acc === accordion && !isCurrentlyOpen) {
          acc.classList.add("py-6");
          acc.classList.remove("py-[23px]");
          p.style.marginTop = "12px";
          p.style.maxHeight = p.scrollHeight + "px"; // Buka accordion
          ic.src = "./assets/images/icons/cross-x-filled.svg"; // Ganti ikon ke terbuka
          ic.classList.remove("-rotate-45");
        } else {
          acc.classList.remove("py-6");
          acc.classList.add("py-[23px]");
          p.style.marginTop = "0px";
          p.style.maxHeight = "0px"; // Tutup accordion
          ic.src = "./assets/images/icons/cross-x.svg"; // Ganti ikon ke tertutup
          ic.classList.add("-rotate-45");
        }
      });
    });
  });
