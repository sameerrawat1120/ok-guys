let loadingSection = document.getElementById("loadingSection");

        setTimeout(() => {
            loadingSection.style.opacity = 0;
        }, 6000);

        setTimeout(() => {
            loadingSection.style.display = "none";
        }, 7000);