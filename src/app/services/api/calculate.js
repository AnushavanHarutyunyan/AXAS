import api, { needLogin } from "../index";

export const calculate_total_cost = async (payload) => {
    try {
        const response = await api.post("tasks/bulk", payload)
        const response1 = await api.get(`tasks/${response.data.id}/calculation`)
        return response1.data["Final cost"]
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin()
        }
        throw error.response.data
    }
}