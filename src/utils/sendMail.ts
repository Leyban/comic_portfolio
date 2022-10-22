import axios, { AxiosRequestConfig } from "axios";

interface MailProps {
    name: string,
    email: string,
    company: string,
    message: string
}

const config: AxiosRequestConfig<MailProps> = {
    params:{
        origin: document.location.origin
    }
}

const sendMail = async (mailInfo: MailProps) => {
    try {
        const res = await axios.post('https://leyban-node-mailer.onrender.com/api/mail', mailInfo, config)
        return res
    } catch (error) {
        console.log(error)    
    }
}

export default sendMail