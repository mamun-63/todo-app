// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

let list = []

todoButton.addEventListener('click', function (e) {
  e.preventDefault()

  if (todoInput.value == '') {
    alert('Please Enter Your Todo')
  } else {
    const object = {
      name: todoInput.value,
      id: new Date().getTime(),
    }
    list.push(object)
    showList()
    todoInput.value = ''
  }
})

function showList() {
  console.log(list)

  todoList.innerHTML = ''

  list.forEach(item => {
    // Todo Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create li
    const newTodo = document.createElement('li')
    newTodo.innerText = item.name
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' // innerHTML for entire HTML tag
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // edit button
    const editButton = document.createElement('button')
    editButton.innerHTML = '<i class="fas fa-edit"></i>'
    editButton.classList.add('edit-btn')
    todoDiv.appendChild(editButton)

    // apend to todo list
    todoList.appendChild(todoDiv)

    trashButton.addEventListener('click', () => {
      deleteTodo(item.id)
    })

    editButton.addEventListener('click', () => {
      editTodo(item.id)
    })
  })
}

function deleteTodo(id) {
  console.log(id)
  const index = list.findIndex(i => i.id === id)
  console.log(index)
  list.splice(index, 1)
  showList()
}

function editTodo(id) {
  const index = list.findIndex(i => i.id === id)
  console.log(index)
  console.log(list[index])
  const newValue = prompt('Enter your new Value')
  list[index].name = newValue
  showList()
}
