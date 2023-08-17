import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { getStockSuccess, fetchStart,fetchFail } from "../features/stockSlice";



const useStockCall = () => {
    
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const {token} = useSelector((state)=>state.auth)
    // console.log(token);


   const getStockData = async(url) =>{
    dispatch(fetchStart())
    
    try {
        const {data} = await axios.get(
            `${import.meta.env.VITE_BASE_URL}stock/${url}/`, 
            {
                headers: { Authorization: `Token ${token}` },
            }
        ) 
        // console.log(data);
        dispatch(getStockSuccess({data,url}))
        toastSuccessNotify("firma işlemi başarılı")
    } catch (error) {
        console.log(error);
        toastErrorNotify("Error")
        fetchFail()
    }
   }


   

  return {getStockData }
};

export default useStockCall;