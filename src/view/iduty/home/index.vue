<template>
    <div class="home">
        <router-view />
        <section class="section">
            <div class="leftnav">
                <div class="tip">IDuty进度管理</div>
                <div class="tip newTip">
                    最新通知
                    <el-badge
                        :value="number"
                    />
                </div>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @closs="handleClose"
                    background-color="#292622"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-submenu v-for="(item, index) in childrenRouters" :key="index" :index="item.meta.title">
                        <template class="templates" slot="title">
                            <span>{{item.meta.title}}</span>
                        </template>
                        <div>
                            <el-menu-item-group v-for='(val, ind) in  item.children' :key='ind' :index='ind'>
                                <router-link :to="val.path">
                                    <el-menu-item :index="`${index}-${ind}`" class="el-menu-item">
                                        {{val.meta.title}}
                                    </el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </div>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="right_select">
                <topnav/>
                <Home/>
            </div>
        </section>
    </div>
</template>
<script>
import iduty from '@/router/iduty/iduty';
import topnav from '@/components/topnav';
import Home from '@/components/homeIndex';
export default {
    data () {
        return {
            childrenRouters: iduty,
            number: 0
        }
    },
    components: {
        topnav,
        Home
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath)
        }
    },
    created () {
    }
}
</script>
<style lang="scss">
    .el-table .cell,
    .el-table th div,
    .el-table--border td:first-child .cell,
    .el-table--border th:first-child .cell{
        padding-left: 0;
    }
    .home, .section{
        width: 100%;
        height: 100%;
    }
    .section{
        display: flex;
    }
    .leftnav{
        height:100%;
        background: #292622;
        overflow: hidden;
    }
    .tip{
        color: #a4a2bb;
        font-weight: 800;
        line-height: 40px;
        text-indent: 10px;
    }
    .newTip{
        width:60%;
        height:30px;
        line-height: 30px;
        margin: 0 auto;
        font-size: 12px;
        text-align: center;
        color: #fff;
        background:#1d1a17;
        .el-button{
            border: 0;
            background:#1d1a17;
            span{
                color: #fff;
            }
        }
        .el-badge__content{
            background: red;
            border: 0;
            float: left;
        }
    }
    .el-menu--inline div li:first.el-menu-item-group{
        display: none;
    }
    .right_select{
        flex:1;
        overflow: auto;
        padding-left: 10px;
        background: #f1f1f1;
    }
    .el-menu-vertical-demo{
        width: 200px;
        height: 100%;
    }
    .el-submenu span{
        color: #fff;
    }
</style>
