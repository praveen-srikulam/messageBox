const textarea = document.getElementById("textarea")
const count = document.querySelector(".count")

textarea.addEventListener("keyup", function () {
    const characters = textarea.value.length
    count.innerHTML = characters
    const words = textarea.value.trim().split(/\s+/).filter(Boolean);
    var wordCount = words.length;
    var warning = document.querySelector(".warning")

    if (wordCount > 200) {
        textarea.value = words.slice(0, 200).join(" ");
        wordCount = 200;
        warning.style.display = "block"
    }

    count.textContent = wordCount;
})