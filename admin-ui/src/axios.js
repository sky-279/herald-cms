import axios from 'axios'

const AxiosPlugins = {
    install: (Vue) => {
        Vue.prototype.$axios = axios.create({
            baseURL:window.baseURL,
            transformResponse: function (data) {
                // 对 data 进行任意转换处理
                data = JSON.parse(data)
                if(data.code === 401){
                    Vue.$store.commit('logout')
                }
                return data;
            }
        })
    }
}

export default AxiosPlugins