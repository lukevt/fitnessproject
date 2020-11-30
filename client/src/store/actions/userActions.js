import axios from "axios"
import { REGISTER_SUCCESS } from "./types"



export const addUser = (body) => async dispatch => {
    console.log(body)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
   
    try {
      const res = await axios.post("http://localhost:5000/user/register", body, config)
      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      })
      console.log (res.data)
    } catch (error) {
       console.log(error.message) 
    }
    
}
