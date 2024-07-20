/*
REQUISITOS BASICOS:
Paleta de colores = https://coolors.co/palette/22223b-4a4e69-9a8c98-c9ada7-f2e9e4
Hacer en html css y js Crear una galeria de imagenes con la capacidad de filtrar las imagenes por categoria.
Funcionaldades : 
Visualicion de Imagenes: Mostrar varias imagenes en una cuadricula.
Filtrado por Categoria: Inlcuir botones o menu desplegable para  filtrar las imagenes por cateogria como: cuidad animales naturaleza y mas. 
Animacion y efectos: Aplicar transiciones y animaciones suaves al cambiar entre categoria.
Responsive : Asegurar que la Galeria sea responsive y se vea en diferentes tamaños de pantalla.
*/

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const uploadForm = document.getElementById("uploadForm");
    const imageInput = document.getElementById("imageInput");
    const imageCategory = document.getElementById("imageCategory");
    const imageDescription = document.getElementById("imageDescription");
    const categoryButtons = document.querySelectorAll("nav button");

    const images = [
        { src: "./img/wallhaven-z8emxg.jpg", category: "ciudad", description: "Ciudad de noche" },
        { src: "./img/wallhaven-4yergn.jpg", category: "animales", description: "León en la sabana" },
        { src: "./img/wallhaven-0j7lm5.jpg", category: "naturaleza", description: "Bosque verde" }

    ];

    function displayImages(category) {
        gallery.innerHTML = "";
        const filteredImages = category === "all" ? images : images.filter(img => img.category === category);
        filteredImages.forEach(img => {
            const imgElement = document.createElement("img");
            imgElement.src = img.src;
            imgElement.alt = img.description;
            imgElement.dataset.description = img.description;
            gallery.appendChild(imgElement);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayImages(button.dataset.category);
        });
    });

    gallery.addEventListener("click", event => {
        if (event.target.tagName === "IMG") {
            alert(event.target.dataset.description);
        }
    });

    uploadForm.addEventListener("submit", event => {
        event.preventDefault();
        const file = imageInput.files[0];
        const category = imageCategory.value.toLowerCase();
        const description = imageDescription.value;

        if (file && category && description) {
            const reader = new FileReader();
            reader.onload = function(e) {
                images.push({ src: e.target.result, category, description });
                displayImages(category);
            };
            reader.readAsDataURL(file);
            uploadForm.reset();
        }
    });
    displayImages("all");
});







    // const images = [
    //     { src: "./img/wallhaven-z8emxg.jpg", category: "ciudad", description: "Ciudad de noche" },
    //     { src: "./img/wallhaven-4yergn.jpg", category: "animales", description: "León en la sabana" },
    //     { src: "./img/wallhaven-0j7lm5.jpg", category: "naturaleza", description: "Bosque verde" }
    // ];