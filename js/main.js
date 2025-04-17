document
  .querySelectorAll(".accordion-container")
  .forEach((accordion, index) => {
    const button = accordion.querySelector("button");
    const icon = button.querySelector("img");
    const panel = accordion.querySelector(".accordion-panel-wrapper");

    // Inisialisasi state awal
    if (index === 0) {
      accordion.classList.add("pt-6");
      accordion.classList.add("pr-6");
      accordion.classList.add("pb-6");
      accordion.classList.remove("pt-[19.03px]");
      accordion.classList.remove("pr-[19.03px]");
      accordion.classList.remove("pb-[19.03px]");
      panel.style.marginTop = "12px";
      panel.style.maxHeight = panel.scrollHeight + "px"; // Buka accordion pertama
      icon.src = "./assets/images/icons/cross-x-filled.svg"; // Ikon terbuka
      icon.classList.remove("-rotate-45");
    } else {
      accordion.classList.add("pt-[19.03px]");
      accordion.classList.add("pr-[19.03px]");
      accordion.classList.add("pb-[19.03px]");
      accordion.classList.remove("pt-6");
      accordion.classList.remove("pr-6");
      accordion.classList.remove("pb-6");
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
          acc.classList.add("pt-6");
          acc.classList.add("pr-6");
          acc.classList.add("pb-6");
          acc.classList.remove("pt-[19.03px]");
          acc.classList.remove("pr-[19.03px]");
          acc.classList.remove("pb-[19.03px]");
          p.style.marginTop = "12px";
          p.style.maxHeight = p.scrollHeight + "px"; // Buka accordion
          ic.src = "./assets/images/icons/cross-x-filled.svg"; // Ganti ikon ke terbuka
          ic.classList.remove("-rotate-45");
        } else {
          acc.classList.remove("pt-6");
          acc.classList.remove("pr-6");
          acc.classList.remove("pb-6");
          acc.classList.add("pt-[19.03px]");
          acc.classList.add("pr-[19.03px]");
          acc.classList.add("pb-[19.03px]");
          p.style.marginTop = "0px";
          p.style.maxHeight = "0px"; // Tutup accordion
          ic.src = "./assets/images/icons/cross-x.svg"; // Ganti ikon ke tertutup
          ic.classList.add("-rotate-45");
        }
      });
    });
  });
