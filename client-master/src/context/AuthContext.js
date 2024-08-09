import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={
    user:{
        _id:"63a56d23764162ff5f844152",
        username:"Jane",
        email:"Jane1234@gmail.com",
        password: "12345678",
        profilePicture:"/user/user9.jfif",
        coverPicture:"",
        followers:[],
       followings:[],
        isAdmin:false
        },
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)

    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}
        >
{children}
        </AuthContext.Provider>
    );
};