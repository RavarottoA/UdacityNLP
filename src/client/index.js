import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");
//-----------------------------------------
document.getElementById("generate").addEventListener("click", performAction);

const axios = require('axios');
async function getNews(title) {
    return axios.get('https://api.aylien.com/news/stories', {
        params: {
            title: `${title}`
        },
        headers: {
            "X-AYLIEN-NewsAPI-Application-ID": process.env.APP_ID,
            "X-AYLIEN-NewsAPI-Application-Key": process.env.API_KEY
        }
    }).then(r => {
        let dataSet = r.data.stories; //array of objects
        return dataSet.map(data => {
            return data.title
        })
    });
}
//-----------------------------------------
export {
    checkForName,
    handleSubmit
   }