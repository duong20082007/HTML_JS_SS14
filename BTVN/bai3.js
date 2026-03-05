const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById("product-list");

const productCard = document.createElement("div");
productCard.classList.add("product");

const createProductItem = (product) => {
    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VND</p>
        <button class="delete-btn">Xóa</button>
    `;

    const deleteBtn = li.querySelector(".delete-btn");
    
    deleteBtn.addEventListener("click", () => {
        const isConfirm = confirm(`Bạn có chắc muốn xóa sản phẩm "${product.name}" này?`);
        
        if (isConfirm) {
            li.remove(); 
            console.log(`Đã xóa: ${product.name}`);
        }
    });
    return li;
};

products.forEach(product => {
    const item = createProductItem(product);
    productList.appendChild(item);
});

productForm.addEventListener("submit", e => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const priceValue = priceInput.value;

    if (nameValue && priceValue) {
        const newProduct = {
            id: Date.now(),
            name: nameValue,
            price: +priceValue
        };

        const newItem = createProductItem(newProduct);
        productList.appendChild(newItem);

        nameInput.value = "";
        priceInput.value = "";
    }
});