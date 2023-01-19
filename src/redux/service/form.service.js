//Form handling
import axios from 'axios';

export const formSubmit = (data) => {
    return axios
        .post('https://justease.zurstiege.de/pdf/', data, "Content-Type: application/json")
        .then(async (response) => {
            return response.data;
        })
        .catch((e) => {
            console.log("error", e)
        })
};