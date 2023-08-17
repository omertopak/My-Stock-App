import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchStart,loginSuccess,registerSuccess, fetchFail, logoutSuccess} from "../features/authSlice"
import {  } from "../features/stockSlice"


const useAuthCall = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

   const login = async(userData) =>{
    dispatch(fetchStart())
    try {
        const {data} = await axios.post(
            `${import.meta.env.VITE_BASE_URL}account/auth/login/`, userData
        ) 
        console.log(data);
        dispatch(loginSuccess(data))
        navigate("/stock")
        toastSuccessNotify("Login işlemi başarılı")
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
        toastErrorNotify("Error")
    }
   }


   const register = async(userData) =>{
    dispatch(fetchStart()) 
    try {
        const {data} = await axios.post(
            `${import.meta.env.VITE_BASE_URL}account/register/`, userData
            
        ) 
        console.log(data);
        dispatch(registerSuccess(data))
        navigate("/stock")
        toastSuccessNotify("Hesap oluşturuldu")    
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
        toastErrorNotify("Error")
    }
   }


   const logout = async() =>{
    dispatch(fetchStart())
    try {
        const {data} = await axios.post(
            `${import.meta.env.VITE_BASE_URL}account/auth/logout/`) 
        dispatch(logoutSuccess())
        navigate("/")
        toastSuccessNotify("Logout işlemi başarılı")
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
        toastErrorNotify("Error")
    }
   }

  return {login,register, logout}
};

export default useAuthCall;