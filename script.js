const btn = document.querySelector(".btn-toggle");

const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "dark-styles.css") {
        theme.href = "light-styles.css";
        btn.innerHTML = "Toggle light-mode";
    }
    else {
        theme.href = "dark-styles.css";
        btn.innerHTML = "Toggle dark-mode";
    }
});