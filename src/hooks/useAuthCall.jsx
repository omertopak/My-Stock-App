import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


   const login = async(userData) =>{
    dispatch(fetchstart())

    try {
        const {data} = await axios.post(
            `${import.meta.env.VITE_BASE_URL}account/auth/login/`, userData
        ) 
        dispatch(loginSuccess)
        navigate("/stock")
        toastSuccessNotify()
    } catch (error) {
        console.log(error);
        toastErrorNotify()
    }

   }

  return {login}
}

export default useAuthCall