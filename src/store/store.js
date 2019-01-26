import Vue from 'vue';
import Vuex from 'vuex';
import orderStore from './modules/order';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        orderStore
    }
})
