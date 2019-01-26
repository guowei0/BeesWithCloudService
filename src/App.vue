<template>
    <div id="app">
        <!-- <button @click="sendNum">点击发送</button> -->
        <navHeader />
        <router-view/>
    </div>
</template>

<script>
import navHeader from '@/components/navHeader/navHeader';
export default {
    name: 'App',
    sockets: {
        // successMsg: (res) => {
        //     console.log('res', res)
        // }
    },
    components: {
        navHeader
    },
    methods: {
        // sendNum () {
        //     this.$socket.emit('getNumber', '前端发给后台的数据')
        // }
    }
}
</script>

<style>

</style>
