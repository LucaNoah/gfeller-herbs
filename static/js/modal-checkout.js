document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-checkout-m");
    const checkoutLinkS = document.getElementById("btn-checkout-s");
    const modal = document.getElementById("modal-checkout");
    const closeModal = document.getElementById("close-checkout");
    const cancelCheckout = document.getElementById("cancel-checkout");

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