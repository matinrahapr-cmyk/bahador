(() => {
  const nav = document.getElementById("nav");
  const mobileMenu = document.getElementById("menu");
  const catalogRoot = document.querySelector(".catalog-root");
  const catalogToggle = document.querySelector(".catalog-toggle");
  const products = [...document.querySelectorAll(".product")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const categoryCards = [...document.querySelectorAll("[data-category]")];
  const title = document.getElementById("productTitle");
  const status = document.getElementById("status");
  const productsSection = document.getElementById("products");

  const labels = {
    all: "همه محصولات",
    facade: "آجر نما",
    kiln: "آجر کوره",
    floor: "آجر کف",
    ordinary: "آجر معمولی",
    accessories: "مصالح جانبی"
  };

  function closeMenus() {
    nav?.classList.remove("open");
    catalogRoot?.classList.remove("open");
    document.querySelectorAll(".menu-branch.open").forEach(item => item.classList.remove("open"));
    mobileMenu?.setAttribute("aria-expanded", "false");
    mobileMenu?.setAttribute("aria-label", "باز کردن منو");
    if (mobileMenu) mobileMenu.textContent = "☰";
    document.body.classList.remove("menu-open");
    catalogToggle?.setAttribute("aria-expanded", "false");
  }

  function showProducts(category = "all", query = "") {
    let count = 0;
    products.forEach(card => {
      const heading = card.querySelector("h3")?.textContent || "";
      const matchesCategory = category === "all" || card.dataset.category === category;
      const matchesQuery = !query || heading.includes(query);
      const visible = matchesCategory && matchesQuery;
      card.classList.toggle("hidden", !visible);
      if (visible) count++;
    });

    filterButtons.forEach(button => button.classList.toggle("active", !query && button.dataset.filter === category));
    categoryCards.forEach(card => card.classList.toggle("active", !query && card.dataset.category === category));
    title.textContent = query ? `محصولات ${query}` : labels[category] || "محصولات";
    status.textContent = `نمایش ${count.toLocaleString("fa-IR")} محصول`;
    closeMenus();
    productsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  mobileMenu?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    mobileMenu.setAttribute("aria-expanded", String(Boolean(open)));
    mobileMenu.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    mobileMenu.textContent = open ? "×" : "☰";
    document.body.classList.toggle("menu-open", Boolean(open));
  });

  catalogToggle?.addEventListener("click", event => {
    event.stopPropagation();
    const open = catalogRoot?.classList.toggle("open");
    catalogToggle.setAttribute("aria-expanded", String(Boolean(open)));
  });

  document.querySelectorAll(".menu-branch>button").forEach(button => {
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", event => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        event.preventDefault();
        event.stopPropagation();
        const branch = button.parentElement;
        const willOpen = !branch?.classList.contains("open");
        branch?.parentElement?.querySelectorAll(":scope > .menu-branch.open").forEach(item => {
          if (item !== branch) {
            item.classList.remove("open");
            item.querySelector(":scope > button")?.setAttribute("aria-expanded", "false");
          }
        });
        branch?.classList.toggle("open", willOpen);
        button.setAttribute("aria-expanded", String(willOpen));
      }
    });
  });

  document.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", event => {
      const branch = link.closest(".menu-branch");
      if (window.matchMedia("(max-width: 900px)").matches && branch?.querySelector(":scope > .branch-children")) return;
      event.preventDefault();
      showProducts(link.dataset.categoryLink);
    });
  });

  document.querySelectorAll("[data-product-filter]").forEach(link => {
    link.addEventListener("click", event => {
      const branch = link.closest(".menu-branch");
      if (link.tagName === "BUTTON" && window.matchMedia("(max-width: 900px)").matches && branch?.querySelector(":scope > .branch-children")) return;
      event.preventDefault();
      showProducts("all", link.dataset.productFilter);
    });
  });

  filterButtons.forEach(button => button.addEventListener("click", () => showProducts(button.dataset.filter)));
  categoryCards.forEach(card => card.addEventListener("click", () => showProducts(card.dataset.category)));

  document.addEventListener("click", event => {
    if (!catalogRoot?.contains(event.target)) {
      catalogRoot?.classList.remove("open");
      catalogToggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenus();
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) closeMenus();
  });
})();
