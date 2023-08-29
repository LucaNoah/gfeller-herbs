document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-feedback-m");
    const checkoutLinkS = document.getElementById("btn-feedback-s");
    const modal = document.getElementById("modal-feedback");
    const closeModal = document.getElementById("close-feedback");
    const cancelCheckout = document.getElementById("cancel-feedback");

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