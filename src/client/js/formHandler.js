import { validateInput } from "./validateInput";
const baseURL = "http://localhost:8081/traerDatos";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (validateInput(formText)) {
        const query = baseURL + "?name=" + formText;
        console.log("::: Form Submitted :::")
        fetch(query)
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            const sentence = `<p>${res.sentence}</p>`;
            const subjectivity = `<p>${res.subjectivity}</p>`;
            document.getElementById('results').innerHTML = `${sentence}${subjectivity}`;
        }) 
    } else {
        alert("The input is not valid");
    }
}

export { handleSubmit }
