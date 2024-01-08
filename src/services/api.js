import axios from "axios";

//base URL:https://free.currconv.com/api/v7/
//> convert?q=USD_PHP&compact=ultra&apiKey=c17c2b4f8ad53acf311a
const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7/'
});

export default api;