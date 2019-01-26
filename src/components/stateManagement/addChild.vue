<template>
    <div class="addChild" :style="{paddingLeft: '20px', textAlign: 'left'}">
        <div v-for="(ite, ind) in treeData" :key="ind">
            <div>
                <span class="name" @click="changShow(ind)">{{ite.name}}</span>
                <span class="editor">
                    <img src="@/common/img/编辑.png" alt="">
                    编辑
                </span>
                <span class="add" @click="addChild(ind, ite.id)">
                    <img src="@/common/img/添加.png" alt="">
                    添加子项
                </span>
                <span class="remo" @click="delMySelf(ite.id)">
                    <img src="@/common/img/删除.png" alt="">
                    删除
                </span>
            </div>
            <add-child v-if="ite.children && ite.isShow" :treeData.sync="ite.children"></add-child>
        </div>
    </div>
</template>
<script>
import Bus from '@/utils/eventBus';
export default {
    name: 'addChild',
    props: ['treeData'],
    created () {
    },
    methods: {
        addChild (ind, id) {
            this.$set(this.treeData[ind], 'isShow', true)
            Bus.$emit('add', { ind, id })
        },
        delMySelf (id) {
            // console.log(this.treeData)
            this.treeData = this.treeData.filter((v) => {
                return v.id !== id
            })
        },
        changShow (index) {
            // console.log(index, this.treeData)
            // this.treeData[index].isShow = !this.treeData[index].isShow
            this.$set(this.treeData[index], 'isShow', !this.treeData[index].isShow)
        }
    }
}
</script>
<style lang="scss">
    .addChild{
        padding: 10px 0 20px 20px;
        font-size: 12px;
        span{
            color: #333;
            font-size: 12px;
            padding:5px;
            border-radius: 3px;
            margin:5px 0;
            display: inline-block;
            img{
                vertical-align: middle;
            }
        }
        .name{
            color: #606266;
            font-size: 16px;
        }
    }
</style>
