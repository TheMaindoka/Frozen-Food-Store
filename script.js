document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");

    // Fungsi untuk membuka modal dan mengisi konten
    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "flex"; // Tampilkan modal
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.style.display = "none"; // Sembunyikan modal
    }

    // Tambahkan event listener pada setiap produk
    products.forEach((product) => {
        product.addEventListener("click", () => {
            const title = product.querySelector("h3").textContent;
            const description = product.querySelector(".product-description").textContent;
            openModal(title, description);
        });
    });

    // Tutup modal ketika tombol close diklik
    closeButton.addEventListener("click", closeModal);

    // Tutup modal ketika mengklik di luar konten modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
