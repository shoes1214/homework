import axios from 'axios'

export default function getCountry(){
    return axios({
        method:"GET",
        url:"/api/common/countryData"
    })
}