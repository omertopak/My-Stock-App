import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
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



   const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}stock/${url}/${id}/`, 
        {
            headers: { Authorization: `Token ${token}` },
        }
    ) 
      toastSuccessNotify(`${url} succesfuly deleted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }



  const postStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}stock/${url}/`, info)
      toastSuccessNotify(`${url} succesfuly posted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be posted`)
      console.log(error)
    }
  }



   const updateStockData = async(url,info) =>{
    dispatch(fetchStart())
    
    try {
        await axios.put(
            `${import.meta.env.VITE_BASE_URL}stock/${url}/${info.id}`, info
        ) 
        getStockData(url)    
        toastSuccessNotify("Updated")
    } catch (error) {
       fetchFail()
        toastErrorNotify(`${url} cannot be updated`)
    }
   }
   


  return {getStockData,deleteStockData,updateStockData,postStockData }
};

export default useStockCall;