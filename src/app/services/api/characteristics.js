import api, { needLogin } from "../index";
export const characteristicsConstructionTypes = async (payload) => {
    try {
        const response = await api.get("collections/construction-types", payload)
        return response.data
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin()
        }
        throw error.response.data
    }
}
export const characteristicsDevelopmentTypes = async (payload) => {
    try {
        const response = await api.get("collections/development-types", payload)
        return response.data
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin()
        }
        throw error.response.data
    }
}
export const characteristicsDesignDirections = async (payload) => {
    try {
        const response = await api.get("collections/design-directions", payload)
        return response.data
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin()
        }
        throw error.response.data
    }
}
export const typeWork = async (payload) => {
    try {
        const response = await api.get("collections/object-types", payload)
        return response.data
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin()
        }
        throw error.response.data
    }
}