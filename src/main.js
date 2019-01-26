// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from '@/store/store'
import { get, post } from './utils/request'
import 'element-ui/lib/theme-chalk/index.css'
import './common/css/style.css';
import './common/css/orderTable.css';

// 新建订单编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import VueSocketIo from 'vue-socket.io';

Vue.use(new VueSocketIo({
    debug: false,
    connection: 'http://localhost:3000'
}));

Vue.use(VueQuillEditor);

Vue.use(ElementUI);

Vue.prototype.$get = get;
Vue.prototype.$post = post;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
