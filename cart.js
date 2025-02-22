function changeQuantity(amount, button) {
    const input = button.parentElement.querySelector('.quantity-input');
    const cartItem = button.closest('.cart-item');
    let currentQuantity = parseInt(input.value);

    // Изменяем количество товара
    currentQuantity += amount;

    // Если количество становится меньше 1, устанавливаем 0
    if (currentQuantity < 1) {
        currentQuantity = 0;
    }

    input.value = currentQuantity;

    // Удаление элемента, если количество становится 0
    if (currentQuantity === 0) {
        cartItem.remove();
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
        const price = parseInt(item.querySelector('.price span').textContent);
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = total;
}
