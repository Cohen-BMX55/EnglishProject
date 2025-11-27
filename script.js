document.getElementById("highlightBtn").addEventListener("click", () => {
    const paragraphs = document.querySelectorAll(".article p");

    paragraphs.forEach((p, index) => {
        if (index === 1 || index === 3) {
            p.style.backgroundColor = "#fff3cd";
            p.style.padding = "8px 12px";
            p.style.borderRadius = "4px";
        }
    });
});
