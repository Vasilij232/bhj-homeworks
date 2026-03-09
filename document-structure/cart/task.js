const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function updateQuantity(product, delta) {
	const valueEl = product.querySelector('.product__quantity-value');
	let value = parseInt(valueEl.textContent);
	value = Math.max(1, value + delta);
	valueEl.textContent = value;
}


products.forEach(product => {
	const decBtn = product.querySelector('.product__quantity-control_dec');
	const incBtn = product.querySelector('.product__quantity-control_inc');

	decBtn.addEventListener('click', () => updateQuantity(product, -1));
	incBtn.addEventListener('click', () => updateQuantity(product, 1));
});


function addToCart(product) {
	const id = product.dataset.id;
	const imgSrc = product.querySelector('.product__image').src;
	const count = parseInt(product.querySelector('.product__quantity-value').textContent);


	let cartProduct = document.querySelector(`.cart__product[data-id="${id}"]`);

	if (cartProduct) {
		const countEl = cartProduct.querySelector('.cart__product-count');
		countEl.textContent = parseInt(countEl.textContent) + count;
	} else {
		cartProduct = document.createElement('div');
		cartProduct.className = 'cart__product';
		cartProduct.dataset.id = id;
		cartProduct.innerHTML = `
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${count}</div>
        `;
		cartProducts.append(cartProduct);
	}
}


products.forEach(product => {
	const addBtn = product.querySelector('.product__add');
	addBtn.addEventListener('click', (e) => {
		e.preventDefault();
		addToCart(product);
	});
});
