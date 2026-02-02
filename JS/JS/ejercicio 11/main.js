document.addEventListener("DOMContentLoaded", () => {

    const habilidades = [
        { id: "html", color: "#c21b45" },
        { id: "javascript", color: "#c21b45" },
        { id: "ArcGIS", color: "#c21b45" },
        { id: "QGIS", color: "#c21b45" },
        { id: "Base de datos", color: "#c21b45" },
        { id: "Phyton", color: "#c21b45" }
    ];

     habilidades.forEach(h => {
        const barra = document.getElementById(h.id);
        if (!barra) return;

        // buscar el porcentaje
        const porcentaje = parseInt(barra.parentElement.querySelector("span").innerText);

        // estilo de la barra (forzado por JS)
        barra.style.height = "30px";
        barra.style.width = "0%";
        barra.style.background = h.color;
        barra.style.transition = "width 2s ease";

        // animación
        setTimeout(() => {
            barra.style.width = porcentaje + "%";
        }, 300);
    });

});






