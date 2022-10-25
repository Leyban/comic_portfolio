import axios from "axios";

const logVisit = () => {
    const newDate = new Date()

    axios.post('https://visit-logger-server.onrender.com/api/log', {
        name: 'Portfolio',
        site: 'https://leyban.github.io/comic_portfolio/',
        time: newDate.toString()
    })
}

export default logVisit;