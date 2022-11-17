import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Get initial Users (testing purposes)
    const fetchUsers = async () => {
        setLoading();
        const response = await fetch(`${'GITHUB_API_URL'}/users`, {
            headers: {
                Authorization: `token ${'GITHUB_API_TOKEN'}`
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const data = response.json()

    // Set Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    dispatch({
        type: "GET_USERS",
        payload: data
    })

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;