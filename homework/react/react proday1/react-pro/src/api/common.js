import axios from "axios"

export default function(){
    return axios({
        method:"GET",
        url:"api/common/countryData"

    })
}