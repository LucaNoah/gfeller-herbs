document.addEventListener("DOMContentLoaded", function () {
    const deleteLink = document.querySelector(".btn1-l-product-delete");
    const modal = document.getElementById("confirmationModalProduct");
    const closeModal = document.getElementById("closeModalProduct");
    const cancelDelete = document.getElementById("cancelDeleteProduct");
    const confirmDelete = document.getElementById("confirmDeleteProduct");

    deleteLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    cancelDelete.addEventListener("click", function () {
        modal.style.display = "none";
    });
});