document.querySelector("#scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#about-me").offsetTop - 20,
    });
});

document.querySelector("#toggle-theme").addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
    document.documentElement.classList.add("light-theme");
}

const tabs = document.querySelectorAll(".tabs .tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        // remove highlight from previous active tab
        document.querySelector(".tab.active").classList.remove("active");
        // highlight current tab
        event.currentTarget.classList.add("active");

        // hide the previously visible tab content
        document.querySelector(".tab-content.show").classList.remove("show");

        // get the selector from data-content
        const selector = event.currentTarget.dataset.content;
        // find the related content and show it
        document.querySelector(selector).classList.add("show");
    });
});
