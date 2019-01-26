<template>
    <div class="orderHeader" style="display: flex;align-items: center;background: #fff;margin-bottom: 10px;">
        <slot></slot>
        <ul class="orderheadernav">
            <li
                v-for='(item, ind) in toplistnav'
                :key="ind"
                class="listchild"
                :class="{active:defaultindex === ind}"
                @click='changeindex(ind, item.path)'
            >
                {{item.cnName}}
            </li>
        </ul>
        <div class="input">
            <el-input
                size="small"
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
            >
            </el-input>
        </div>
    </div>
</template>
<script>
import toplistnav from '@/config/topnavlist';
export default {
    data () {
        return {
            toplistnav,
            defaultindex: -1
        }
    },
    methods: {
        changeindex (ind, path) {
            this.defaultindex = ind;
            this.$router.push({
                path
            })
        }
    }
}
</script>
<style scoped lang="scss">
    .orderheadernav{
        height: 40px;
        line-height: 40px;
        display: flex;
        font-size: 12px;
        li{
            margin: 0 10px;
            color: #666;
        }
        .active{
            color:#e1b66d!important;
        }
    }
    .input{
        width:200px;
    }
</style>
