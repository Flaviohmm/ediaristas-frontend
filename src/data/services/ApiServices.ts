import axios from "axios";

const url = "https://rocky-sierra-65016.herokuapp.com/"

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    }
})