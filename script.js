document.querySelectorAll('.pricing-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.pricing-option').forEach(el => el !== this && el.classList.remove('expanded'));
        this.classList.toggle('expanded');
        this.querySelector("input[type='radio']").checked = true;
        updateTotal(parseFloat(this.dataset.price));
    });
});

function updateTotal(price) {
    document.getElementById('totalPrice').innerText = `$${price.toFixed(2)} USD`;
}