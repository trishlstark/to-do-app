function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo(){
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');
      toDoList.textContent='';

      toDos.forEach(function(toDo){
        let deleteButton = document.createElement('input');
              deleteButton.type = "button";
              deleteButton.value = "delete";


        const newLi = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);


        deleteButton.addEventListener ('click', event => {
          event.preventDefault();
          deleteToDo(toDo.id);
          renderTheUI();
        });
      });
  }

  function deleteToDo(id){
       console.log(id);
       toDos = toDos.filter(item => item.id !== id);
   }

  addToDoForm.addEventListener('submit', event =>{
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

}


window.onload = function() {
  onReady();
};
