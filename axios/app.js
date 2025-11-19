import axios from "axios";

async function call(){
    try {
    const response = await axios.get("https://ai.suhail.app");
    console.log(response.data);
    console.log(response.statusText);
    console.log(response.status);
    } catch (error) {
        console.log(error.name);
    }
}
call()