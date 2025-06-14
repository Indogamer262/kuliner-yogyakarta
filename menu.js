function openModal(cardElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");

    const imgSrc = cardElement.querySelector('img').src;
    const title = cardElement.querySelector('.desc').textContent;
    
    // --- PERUBAHAN UTAMA ADA DI SINI ---
    // 1. Cari elemen deskripsi yang tersembunyi
    const descriptionElement = cardElement.querySelector('.full-description');
    
    // 2. Salin konten HTML dari elemen tersebut
    const descriptionHTML = descriptionElement ? descriptionElement.innerHTML : "";

    // Mengisi konten modal
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    // 3. Gunakan .innerHTML agar tag <p> bisa dirender
    modalDesc.innerHTML = descriptionHTML;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
    document.getElementById("scrollTopBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
};

function filterCards() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const cards = document.querySelectorAll(".card-display .card");
    cards.forEach((card) => {
        const title = card.querySelector(".desc").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "flex" : "none";
    });
}