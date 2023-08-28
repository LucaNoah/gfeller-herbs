document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-return-m");
    const checkoutLinkS = document.getElementById("btn-return-s");
    const modal = document.getElementById("modal-return");
    const closeModal = document.getElementById("close-return");
    const cancelCheckout = document.getElementById("cancel-return");

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