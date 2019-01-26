<template>
    <div class='iduty'>
        <div>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#292622"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu v-for="(item, index) in childRouters" :index="item.meta.title" :key="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <div v-if="!!item.children">
                        <el-menu-item-group v-for="(val, ind) in item.children" :index="val.meta.title" :key="ind">
                            <el-menu-item :index="`${index}-${ind}`">{{val.meta.title}}</el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-submenu>
            </el-menu>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
import idutyRouters from '@/router/iduty';
export default {
    data () {
        return {
            childRouters: idutyRouters
        }
    },
    created () {
        console.log(this.$router)
    },
    methods: {
        handleOpen () {
            console.log('handleOpen')
        },
        handleClose () {
            console.log('handleClose')
        }
    }
}
</script>
<style>
    .el-menu-vertical-demo{
        width: 200px;
        height: 100%;
    }
    .el-submenu span{
        color: #fff;
    }
</style>
