import axios from "axios";

class AxiosRequestsService { 
 static async signUp(url,data,config) {
   try {
    axios.post(url,data,config)
      .then((response) => {
        
      })
      .catch((error) => {

      })
   } catch (error) {
     
   }
 }
}

export default AxiosRequestsService;
