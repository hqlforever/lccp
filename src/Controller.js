import BASE_INFO from '../static/config.js'
import axios from 'axios'
let methods = {
    GetNewestBonusList(_data) {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "api/"+"GetNewestBonusList",
            data: _data
        })
    },
    GetLotteryOpen(_data) {
        let that = this;
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL +  "api/"+"GetLotteryOpen",
            data: _data
        });
    },
    GetServerTimeMillisecond() {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "api/"+ "GetServerTimeMillisecond"
        });
    },
    GetLotteryPlan(_data) {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL +  "api/"+"GetLotteryPlan",
            data: _data
        });
    }
}

export default methods;