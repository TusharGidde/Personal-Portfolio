
const baseURL="https://react-js-potfolio-backend.onrender.com";


import { apiConnector } from './apiconnector';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export  async function mailSend(message,email){

try{

    const subject="You have message from your potfolio ";
    console.log("Inside mail send function")
    const  send=await apiConnector("POST",baseURL+"/mailsend",{email,"title":subject,"body":message});
    
    console.log("send "+send.status)
    // if(send.status==200){
        toast.success("Message Send  Succefully");
    // }
}catch(e){
    toast.error("Something wen wrong while sending message");;
}
}


