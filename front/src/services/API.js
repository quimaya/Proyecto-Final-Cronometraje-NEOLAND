import axios from "axios"

export const APIHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: {
        toString() {
            return `Bearer ${localStorage.getItem("token")}`;
        }
    }
}

export const API = axios.create ({
    /*     baseURL: "http://localhost:8080/api",
 */
    baseURL: "http://18.159.246.168:8091/api/",
    timeout: 60000,
    headers: APIHeaders,
})
