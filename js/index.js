// reference: https://www.w3schools.com/howto/howto_js_todolist.asp

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);


let postTodoBtn = document.getElementById("postBtn");
postTodoBtn.addEventListener("click", agregarTodo);
function agregarTodo(e) {
	e.preventDefault();

	var listItem = document.createElement("li");
	var todoText = document.getElementById("todoPost").value;
	console.log(todoText);
	var newListItem = document.createTextNode(todoText);

	listItem.appendChild(newListItem);
	if(todoText !== '') {
		document.getElementById("todoList").appendChild(listItem);
	}
	else {
		alert("No puede estar vacío");
	}

}


let clearTodoBtn = document.getElementById("clearBtn");
clearTodoBtn.addEventListener("click", deseleccionarTodo);
function deseleccionarTodo() {
	var listTodo = document.querySelectorAll("li");
	for(i = 0; i < listTodo.length; i++) {
		listTodo[i].classList.remove("checked");
	}
}


let markTodoBtn = document.getElementById("markBtn");
markTodoBtn.addEventListener("click", marcarTodo);
function marcarTodo() {
	var listTodo = document.querySelectorAll("li");
	for(i = 0; i < listTodo.length; i++) {
		if(listTodo[i].className !== "checked") {
			listTodo[i].classList.toggle("checked");
		}
	}
}


let deleteTodoBtn = document.getElementById("deleteBtn");
deleteTodoBtn.addEventListener("click", borrarTodo);
function borrarTodo() {
	var listTodo = document.getElementById("todoList");
	while (listTodo.hasChildNodes()) {   
		listTodo.removeChild(listTodo.firstChild);
	}
}

