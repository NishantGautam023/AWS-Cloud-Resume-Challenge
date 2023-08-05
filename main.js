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

// Tabs Toggle for the Blog section

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

// Views Counter
const views = document.querySelector(".side .text--sm");
const getViewsCount = async () => {
    try {
        
         const response = await fetch(
            "https://rkt4nstjpl7w2xpn6hlba6hc7q0ytbnd.lambda-url.ca-central-1.on.aws"
        );
        if (!response.ok) {
            throw new Error(
                `Http Error: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();
        views.textContent = `👀 views : ${data}`;
    } catch (error) {
        console.error("An Error has occurred:", error);
        views.textContent = "Faild to load views";
    }
};

getViewsCount();
