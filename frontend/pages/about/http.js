import axios from "axios"

let baseURL = "http://127.0.0.1:5500/"

async  function getData(path) {
try {
 let response = await axios.get(baseURL + path)

 console.log(response);
 return response.data
} catch (error) {
    console.error(error);
}
} 

async function postData(path, body) {
try {
    let res = await axios.post(baseURL + path,body)

    return res.data
} catch (error) {
    console.error(error);
    
}
}

async function editData(path, body, method = "PATCH") {
try {
    let res = await axios(baseURL+ path, {
        method: method,
        body: {},
    }) 
} catch (error) {
    
}
}

export{getData, postData, editData}