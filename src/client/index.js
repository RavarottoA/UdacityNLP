import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");
//-----------------------------------------
document.getElementById("submitBtn").addEventListener("click", performAction);

const traerDatos =  async (baseURL) => {
    const res = await fetch(baseURL);
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

function performAction(e) {
    traerDatos("http://localhost:8081/traerDatos");
}


//-----------------------------------------
export {
    checkForName,
    handleSubmit
   }