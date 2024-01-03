import axios from "axios";

//full URL: https://api.invertexto.com/v1/currency/USD_BRL?token=6006|39tajWlsj12hPCxPSTlHitvb0lqgBA3Q
//base URL: https://api.invertexto.com/v1
// => /currency/USD_BRL?token=6006|39tajWlsj12hPCxPSTlHitvb0lqgBA3Q
const api = axios.create({
    baseURL:'https://api.invertexto.com/v1/currency/'
});

export default api;