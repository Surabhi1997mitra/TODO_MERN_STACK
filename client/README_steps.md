1. Install dependencies
    node-sass: allows using sass instead of css
    axios: to make api calls to the backend
    react-router-dom: for routing between pages
2. Create components folder inside src, with three files for showing the list, creating the todo & updating
3. ShowTodoList: 
    states - todo -> we will fetch the documents from the database and store it in the state todo
    axios - use axios to send a GET request to the backend to fetch the document.
    useEffect - make the get request from the useEffect hook, so that data is loaded when the page renders intitially.
4. TodoCard - This component is used to display the contents of the todo. We will use map to iterate over todo and pass the contents to TodoCard which will display the contents of each todo document