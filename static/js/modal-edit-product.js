document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-edit-m");
    const checkoutLinkS = document.getElementById("btn-edit-s");
    const modal = document.getElementById("modal-edit");
    const closeModal = document.getElementById("close-edit");
    const cancelCheckout = document.getElementById("cancel-edit");

    checkoutLinkM.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    checkoutLinkS.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    cancelCheckout.addEventListener("click", function () {
        modal.style.display = "none";
    });
});