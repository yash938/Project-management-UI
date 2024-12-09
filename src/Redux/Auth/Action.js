import { API_URL } from "@/Config/Api"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"


export const register = userData => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/user/createUser`, userData);
        
        // JWT ka code hata diya, ab sirf user registration response handle karenge
        dispatch({ type: REGISTER_SUCCESS, payload: data });
        console.log("Register success");
    } catch (error) {
        console.log(error);
    }
}


export const login = userData=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST_REQUEST})
    try{
      const {data} = await axios.post(`${API_URL}/auth/login`,userData)

      if(data.jwt){
        localStorage.setItem("jwt",data.jwt)
        dispatch({type:LOGIN_SUCCESS_SUCCESS,payload:data})
      }
      
      console.log("Login Success")
    }catch(error){
        console.log(error)
    }
}
export const getUser =()=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
      const {data} = await axios.get(`${API_URL}/user/profile`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("jwt")}`
        }
      })

      if(data.jwt){
        localStorage.setItem("jwt",data.jwt)
        dispatch({type:GET_USER_SUCCESS,payload:data})
      }
      
      console.log("Login Success")
    }catch(error){
        console.log(error)
    }
}


export const logout =()=>{
    dispatch({type:LOGOUT})
    localStorage.clear();
}