const baseURL = "http://localhost:8081/traerDatos";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const query = baseURL + "?name=" + formText;
    console.log("::: Form Submitted :::")
    fetch(query)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        //document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
