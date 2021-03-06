import Axios from "axios"
const api = "https://api.famefair.com.bd/api/v1/web/"
// const api = "http://localhost:4000/api/v1/web/"

// Banner
export async function Banner() {
    const response = await Axios.get(`${api}banner`)
    return response
}

// fetch categories with products
export async function CategoryWithProducts(page) {
    const response = await Axios.get(`${api}category?page=${page}`)
    return response
}

// fetch specific category
export async function CategoryBySlug(slug) {
    const response = await Axios.get(`${api}category/${slug}`)
    return response
}

// fetch category products with pagination
export async function CategoryProducts(id, page) {
    const response = await Axios.get(`${api}category/products/${id}?page=${page}`)
    return response
}

// fetch specific product
export async function ProductBySlug(slug) {
    const response = await Axios.get(`${api}product/${slug}`)
    return response
}

// Search suggestion
export async function SearchSuggestion(query) {
    const response = await Axios.get(`${api}search/suggestion/${encodeURI(query)}`)
    return response
}

// Search results
export async function SearchResults(query, page, limit) {
    const response = await Axios.get(`${api}search/results/${encodeURI(query)}?page=${page}&limit=${limit}`)
    return response
}