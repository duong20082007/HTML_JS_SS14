const productForm = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");

productForm.addEventListener("submit", e => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = priceInput.value;
    if (nameValue === "" || priceValue === "") {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
        return;
    }
    const newProduct = {
        id: Date.now(), 
        name: nameValue,
        price: +priceValue
    };

    const li = document.createElement("li");
    li.classList.add("product-item");
    li.innerHTML = `
        <h3>${newProduct.name}</h3>
        <p>Giá: ${newProduct.price.toLocaleString("vi-VN")} VND</p>
    `;

    productList.appendChild(li);
    nameInput.value = "";
    priceInput.value = "";
    nameInput.focus();
});