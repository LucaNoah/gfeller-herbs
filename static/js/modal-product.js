document.addEventListener("DOMContentLoaded", function () {
    const deleteLink = document.getElementById("btn-delete");
    const modal = document.getElementById("confirmationModalProduct");
    const closeModal = document.getElementById("closeModalProduct");
    const cancelDelete = document.getElementById("cancelDeleteProduct");

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