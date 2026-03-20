const addTaskBtn = document.querySelector('#addTaskBtn')
const taskInput = document.querySelector('#taskInput')
const taskList = document.querySelector('.task-list')
const deleteAllBtn = document.querySelector('#deleteAllBtn')
const themeToggle = document.querySelector('#themeToggle')

addTaskBtn.addEventListener('click', function(){
  
  if (taskInput.value.trim() === ''){
   return 
  }
  
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('task-check')

  const li = document.createElement('li')
  li.classList.add('task-item')

  const text = document.createElement('p')
  text.textContent = taskInput.value

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'X'
  deleteBtn.classList.add('delete-btn')
  deleteBtn.style.display = 'none'

  taskList.appendChild(li)
  li.appendChild(checkbox)
  li.appendChild(text)
  li.appendChild(deleteBtn)

  taskInput.value = ''
  taskInput.focus()
  
  // delete one task
  deleteBtn.addEventListener('click', function(){
     li.remove()

     updateDeleteAllButton()
  })

  //checkbox logic
  checkbox.addEventListener('change', function(){

    if(checkbox.checked) {
      text.classList.add('completed')
    } else {
      text.classList.remove('completed')
    }

    if(checkbox.checked) {
      deleteBtn.style.display = 'block'
    } else {
      deleteBtn.style.display = 'none'
    }

    updateDeleteAllButton()

    })
   }) 


    // delete all selected
deleteAllBtn.addEventListener('click', function(){
  const checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked')
  
  checkedTasks.forEach(function (check){
    check.parentElement.remove()
  })

  
  updateDeleteAllButton()
})


// enter key
taskInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter') {addTaskBtn.click()
    }
  })

  // update delete all button
  function updateDeleteAllButton(){
    const checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked')

    if(checkedTasks.length >= 2){
      deleteAllBtn.style.display = 'block'}

    else{
      deleteAllBtn.style.display = 'none'
      }
    }


   //dark mode button
    themeToggle.addEventListener('click', function(){
      document.body.classList.toggle('darkmod')

      if(document.body.classList.contains('darkmod')){
        themeToggle.textContent = '🌞'
      } 
      else {
        themeToggle.textContent = '🌜'
      }
    
    })

    