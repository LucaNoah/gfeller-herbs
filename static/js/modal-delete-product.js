document.addEventListener("DOMContentLoaded", function () {
    const deleteLink = document.getElementById("btn-product-delete");
    const modal = document.getElementById("modal-product-delete");
    const closeModal = document.getElementById("close-product-delete");
    const cancelDelete = document.getElementById("cancel-product-delete");

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