import BASE_INFO from '../static/config.js'
import axios from 'axios'
let methods = {
    GetNewestBonusList() {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "GetNewestBonusList",
            data: {}
        })
    },
    GetLotteryOpen(_data) {
        let that = this;
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "GetLotteryOpen",
            data: _data
        });
    },
    GetServerTimeMillisecond() {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "GetServerTimeMillisecond"
        });
    },
    GetLotteryPlan(_data) {
        return axios({
            method: "post",
            url: BASE_INFO.BASE_URL + "GetLotteryPlan",
            data: _data
        });
    }
}

export default methods;