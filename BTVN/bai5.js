const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");

const createProductItem = (product) => {
    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `
        <div class="info">
            <h3>${product.name}</h3>
            <p class="price-display">Giá: ${product.price.toLocaleString()} VND</p>
        </div>
    `;
    return li;
};
products.forEach(p => productList.appendChild(createProductItem(p)));
productForm.addEventListener("submit", e => {
    e.preventDefault(); 
    productList.appendChild(createProductItem(newProduct)); 
});
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase();
    
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(item => {
        const productName = item.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(search)) {
            item.style.display = ""; 
        } else {
            item.style.display = "none"; 
        }
    });
});
