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
        dispatch(getStockSuccess({data,url}))
        
    } catch (error) {
        console.log(error);
        //toastErrorNotify(`${url} couldn't fetched.`)
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
      // toastSuccessNotify(`${url} succesfuly deleted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      //toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }



  const postStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}stock/${url}/`,info, 
        {
            headers: { Authorization: `Token ${token}` },
        }
    ) 
      // toastSuccessNotify(`${url} succesfuly posted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      //toastErrorNotify(`${url} can not be posted`)
      console.log(error)
    }
  }
  


   const updateStockData = async(url,info) =>{
    dispatch(fetchStart())
    
    try {
      axios.put(
        `${import.meta.env.VITE_BASE_URL}stock/${url}/${info.id}/`,info, 
      {
          headers: { Authorization: `Token ${token}` },
      })
        
        getStockData(url)    
        // toastSuccessNotify("Updated")
    } catch (error) {
       fetchFail()
        //toastErrorNotify(`${url} cannot be updated`)
    }
   }
   


  return {getStockData,deleteStockData,updateStockData,postStockData }
};

export default useStockCall;