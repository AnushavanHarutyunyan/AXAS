import api, { needLogin } from '../index';

// const needLogin = () => {    //petq e
//     localStorage.clear();
//     window.location = "/"
// }
export const tasksRequest = async (payload) => {
    try {
        const response = await api.get('tasks', payload);
        return response.data;
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin();
        }
        throw error.response.data;
    }
};
export const taskRequest = async (id) => {
    try {
        const response = await api.get(`tasks/${id}`);
        return response.data;
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin();
        }
        throw error.response.data;
    }
};
export const addTasksRequest = async (payload) => {
    try {
        const response = await api.post('tasks', payload);
        return response.data;
    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            needLogin();
        }
        throw error.response.data;
    }
};
