document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-review-m");
    const checkoutLinkS = document.getElementById("btn-review-s");
    const modal = document.getElementById("modal-review");
    const closeModal = document.getElementById("close-review");
    const cancelCheckout = document.getElementById("cancel-review");

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