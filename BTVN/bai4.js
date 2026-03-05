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
        <div class="actions">
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        </div>
    `;

    const editBtn = li.querySelector(".edit-price-btn");
    const priceDisplay = li.querySelector(".price-display");

    editBtn.addEventListener("click", () => {
        const newPrice = prompt(`Nhập giá mới cho ${product.name} (VND):`, product.price);
        
        if (newPrice !== null && !isNaN(newPrice) && newPrice.trim() !== "") {
            product.price = +newPrice; 
            priceDisplay.innerText = `Giá: ${product.price.toLocaleString()} VND`; 
            alert("Đã cập nhật giá thành công!");
        } else if (newPrice !== null) {
            alert("Vui lòng nhập một con số hợp lệ!");
        }
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        if (confirm(`Bạn có chắc muốn xóa "${product.name}"?`)) {
            li.remove();
        }
    });
    return li;
};
products.forEach(p => productList.appendChild(createProductItem(p)));

productForm.addEventListener("submit", e => {
    e.preventDefault(); 

    const name = document.getElementById("product-name").value;
    const price = +document.getElementById("product-price").value;
    const newProduct = { 
        id: Date.now(), 
        name, 
        price 
    }; 
    productList.appendChild(createProductItem(newProduct)); 

    productForm.reset(); 
});