import Axios from "axios"
const api = "https://jsonplaceholder.typicode.com/"

// fetch products with pagination
export async function Products(page) {
    const response = await Axios.get(`${api}photos?_page=${page}&_limit=10`)
    return response
}