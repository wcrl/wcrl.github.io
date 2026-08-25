console.log("WCRL site loaded");

document.addEventListener("DOMContentLoaded", () => {
    highlightActiveNav();
    setupSiteMenu();
    setupAccordion();
    setupEventFilters();
    setupJoinForm();
});

function highlightActiveNav() {
    const links = document.querySelectorAll(".nav-links a");
    const path = window.location.pathname.split("/").pop();

    links.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;
        const target = href.split("/").pop();
        if (target === path || (path === "" && target === "index.html")) {
            link.classList.add("active");
        }
    });
}

function setupSiteMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".site-menu");
    if (!toggle || !menu) return;

    const closeMenu = () => {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isOpen = menu.hidden;
        menu.hidden = !isOpen;
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
        if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

function setupAccordion() {
    const items = document.querySelectorAll("[data-accordion]");
    items.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        if (!header) return;
        header.addEventListener("click", () => {
            item.classList.toggle("open");
        });
    });
}

function setupEventFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-category]");
    if (buttons.length === 0 || items.length === 0) return;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            items.forEach((item) => {
                const category = item.dataset.category;
                if (filter === "all" || category === filter) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

function setupJoinForm() {
    const form = document.querySelector("#join-form");
    const status = document.querySelector("#form-status");
    if (!form || !status) return;

    const submitButton = form.querySelector("button[type=\"submit\"]");
    const targetFrame = document.querySelector("iframe[name=\"join-form-target\"]");
    let submitted = false;

    if (sessionStorage.getItem("joinFormSubmitted")) {
        form.reset();
        sessionStorage.removeItem("joinFormSubmitted");
        status.textContent = "";
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
            submitButton.classList.remove("button-disabled");
        }
    }

    if (targetFrame) {
        targetFrame.addEventListener("load", () => {
            if (!submitted) return;
            status.textContent = "Success! Your response has been submitted.";
            status.style.color = "#59f2c2";
            sessionStorage.setItem("joinFormSubmitted", "true");
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Submitted";
                submitButton.classList.add("button-disabled");
            }
            submitted = false;
        });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.querySelector("#name").value.trim();
        const teamName = form.querySelector("#team-name").value.trim();
        const teamMemberDiscordId = form.querySelector("#team-member-discord-id").value.trim();

        if (!name || !teamName || !teamMemberDiscordId) {
            status.textContent = "Please complete the required fields so we can follow up.";
            status.style.color = "#ffce5c";
            return;
        }

        status.textContent = "Sending your info...";
        status.style.color = "#9fb0c3";
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        submitted = true;
        form.submit();
    });
}
