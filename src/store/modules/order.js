import { get } from '@/utils/request';

const state = {
    orderTableData: [],
    dataLength: 0
}

const mutations = {
    saveOrderTableData (state, data) {
        console.log(data.data.data.length)
        console.log(data.data.data)
        state.orderTableData = [...data.data.data.result];
        state.dataLength = data.data.data.length
    }
}

const actions = {
    async getOrderTableData (context, params) {
        context.commit('saveOrderTableData', await get('/order/allorder', params))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
