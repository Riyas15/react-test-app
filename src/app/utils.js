import axios from 'axios';

export const setupAxios = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + accessToken;
}

export const isAdmin = (user) => {
    return user.role === "admin";
}

export const loadState = () => {
    try {
        const sessionState = localStorage.getItem("")
        if (sessionState == null)
            return undefined
        
        return JSON.parse(sessionState)
        
    } catch (error) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("", serialisedState)
    } catch (error) {
        
    }
}
