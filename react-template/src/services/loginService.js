import axios from 'axios';

const baseURL = "http://localhost:8081/";

export const userLogin = (data) => {
    console.log(baseURL+"api/auth/login")
    return axios
    .post(baseURL+"api/auth/login", data)
    .then((response) => {
        console.log("inside");
        if(response.data.token && response.status===200){
            console.log("inside");
            return response;
        }
        console.log(response);
    });
}
