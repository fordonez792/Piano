import { keys } from "./keys.js";

document.addEventListener("DOMContentLoaded", () => {
    const pianoKeysContainer = document.querySelector(".piano-keys");
    keys.forEach((key) => {
        const li = document.createElement("li");
        li.className = `key ${key.isBlack ? "black" : "white"}`;
        const displayKey = key.mappedKey || key.key;
        li.dataset.key = displayKey;
        li.innerHTML = `
            <div>${key.note}</div>
            <span>${key.key}</span>
        `;
        pianoKeysContainer.appendChild(li);
    });
});
