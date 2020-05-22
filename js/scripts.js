// Grab the index list of all todos.
const allToDos = document.getElementById('index');

// If avialable, proceed.
if (allToDos)
{   // Run axios to obtain list.
    axios.get('https://localhost:44317/api/ToDoItems')
    // Get just the data from the response.
    .then(reponse => reponse.data)
    // "Process" our data (JSON object or array.)
    .then(data => {
        // Output list of todos.
        data.forEach( toDo => {
            console.log(data);

        });
    });
}

// Grab the index list of all todos. 
const createToDo = document.getElementById('create');
if (createToDo)
{
    createToDo.addEventListener('submit', event => {
        //Stop form from real submit.
        event.preventDefault();
        // Create the new todo.
        axios.post('https://localhost:44317/api/ToDoItems')
        // On success, rediret to full list.
        .then(reponse => {document.local.href = './index.html'});
    });
}