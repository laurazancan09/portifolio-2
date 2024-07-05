import { trocaBanner } from "./banner.js";
import { startAutoSwap } from "./banner.js";
import { criarBanners } from "./banner.js";
import { startAutoSwapHabilits } from "./habilits.js";
import { criarHabilits } from "./habilits.js";
import { criarCards } from "./cards.js";

window.trocaBanner = trocaBanner;

document.addEventListener("DOMContentLoaded", function() {
    criarBanners();
    criarHabilits();
    criarCards();
    trocaBanner(5); // Inicializa o banner
    startAutoSwap(); // Inicia a troca automática
    startAutoSwapHabilits();
});