document.addEventListener("DOMContentLoaded", function () {
    const checkoutLinkM = document.getElementById("btn-add-m");
    const checkoutLinkS = document.getElementById("btn-add-s");
    const modal = document.getElementById("modal-add");
    const closeModal = document.getElementById("close-add");
    const cancelCheckout = document.getElementById("cancel-add");

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