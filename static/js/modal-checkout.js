document.addEventListener("DOMContentLoaded", function () {
    const checkoutLink = document.getElementById("btn-checkout");
    const modal = document.getElementById("confirmationModalCheckout");
    const closeModal = document.getElementById("closeModalCheckout");
    const cancelCheckout = document.getElementById("cancelCheckout");

    checkoutLink.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("test")
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    cancelCheckout.addEventListener("click", function () {
        modal.style.display = "none";
    });
});