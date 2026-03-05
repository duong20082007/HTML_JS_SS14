console.log("Hello world");
let idUpdate;

let todos = [
    {id: 0, name: "Chơi Game", isDone: true},
    {id: 1, name: "Nghe Nhạc", isDone: false},
    {id: 2, name: "Xem phim", isDone: true},
];

// CRUD
// READ : đổ hết dữ liệu tên công việc ra giao diện HTML
const renderData = () => {
    // Lấy element thẻ cha chứa dữ liệu
    let listElement = document.getElementsByClassName("listMenu")[0];
    
    // Clear dữ liệu cũ
    listElement.innerHTML = ``;

    todos.forEach((todo) => {
        // createElement : Tạo ra thẻ mới trong HTML
        let itemElement = document.createElement("li");

        // Thêm nội dung
        itemElement.innerHTML = `<div style = "padding: 20px">
                                    ${todo.name}
                                    <button onclick = "handleUpdateTodo(${todo.id})">Chỉnh sửa</button>
                                    <button onclick = "handleDelete">Delete</button>
                                </div>`;
        // appendChild : Thêm vào DOM
        listElement.appendChild(itemElement);
    })
}
renderData();

// Create : Thêm công việc 
const handleAddTodo = () => {
    let inputElement = document.getElementById("input_todo");
    let newName = inputElement.value;
    console.log(newName);
    let newTodo = {
        id: Date.now(), 
        name: newName,
        isDone: false,
    };
    todos.push(newTodo);
    renderData();
    inputElement.value = "";
};
handleAddTodo();

let buttonAddElement = document.getElementById("add");
buttonAddElement.addEventListener("click" , handleAddTodo);

// Khi ấn enter xuất ra dữ liệu
let inputElement = document.getElementById("input_todo");
inputElement.addEventListener("keydown" , (e) => {
    if(e.key == "Enter") {
        handleAddTodo();
    };
});

// Update 
const handleUpdateTodo = (idTodo) => {
    let todo = todos.find((todo) => {
        return todo.id === idTodo;
    })
    inputElement.value = todo.name;

    buttonAddElement.style.display = "none";
    buttonUpdateElement.style.display = "inline";

    // .focus 
    inputElement.focus();
    idUpdate = idTodo;
}

const handleChangeUpdateTodo = () => {
    let newNameTodo = inputElement.value;
    let indexTodo = todos.findIndex((todo) => {
        todo.id === idUpdate
    });
    todos[indexTodo].name = newNameTodo;
    renderData();
    inputElement.value = "";
    buttonAddElement.style.display = "inline";
    buttonUpdateElement.style.display = "none";
}
buttonUpdateElement.addEventListener("click" , handleChangeUpdateTodo);

// Delete
const handleDeleteTodo = () => {
    let indexTodo = todos.findIndex((todo) => {
        return todo.id === idTodo
    });
    todos.splice(indexTodo, 1);
    renderData();
}