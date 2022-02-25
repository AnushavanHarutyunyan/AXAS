import api from "../index";
export const loginRequest = async (payload) => {
    try {
        const response = await api.post("login", payload)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}