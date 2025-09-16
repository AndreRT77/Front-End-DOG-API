'use strict';

const fetchImages = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    try {
        const response = await fetch(url );
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        return null;
    }
};

const createImage = (imageUrl) => {
    const gallery = document.getElementById('racasGrid');
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    gallery.appendChild(imageElement);
};

const search = async () => {
    const searchInput = document.getElementById('searchInput');
    const gallery = document.getElementById('racasGrid');
    const breed = searchInput.value.trim().toLowerCase();
    
    gallery.replaceChildren();

    if (!breed) {
        searchInput.placeholder = "Digite uma raça primeiro!";
        return;
    }
    
    searchInput.placeholder = "Pesquise a raça (ex: beagle, husky)";
    const images = await fetchImages(breed);

    if (images && images.length > 0) {
        images.forEach(createImage);
    } else {
        gallery.innerHTML = `<p style="color: var(--placeholder-color); font-size: 18px;">Raça não encontrada. Tente outra.</p>`;
    }
};

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        search();
    }
};

window.barraPesquisa = search;
document.getElementById('searchInput').addEventListener('keypress', handleKeyPress);
