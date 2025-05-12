let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

document.addEventListener('DOMContentLoaded', () => {
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');

  wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productHandle = button.dataset.productHandle;

      if (!productHandle) {
        alert('Ошибка: Handle товара не найден.');
        return;
      }

      if (!wishlist.includes(productHandle)) {
        wishlist.push(productHandle);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateCountWhishlist();
        alert('Товар додано до списку бажаного!');
      } else {
        alert('Товар уже в списку бажаного.');
      }
    });
  });

  updateCountWhishlist();

});

function updateCountWhishlist() {
  wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistIcon = document.getElementById('wishlist-icon-header');

  if (wishlist.length > 0) {
    const countBubble = document.createElement('div');
    countBubble.className = 'cart-count-bubble';
    countBubble.innerText = wishlist.length;

    wishlistIcon.appendChild(countBubble);
  }
}
