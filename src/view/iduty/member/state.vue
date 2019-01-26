<template>
    <div class="stateManagement">
        <h4>状态管理</h4>
        <div class="stateCont">
            <el-button type="warning">
                <span @click="addChild">添加大项</span>
            </el-button>
            <AddChild :treeData.sync="treeData"/>
        </div>
    </div>
</template>
<script>
import AddChild from '@/components/stateManagement/addChild';
import Bus from '@/utils/eventBus';
export default {
    name: 'state',
    data () {
        return {
            treeData: [{
                name: '青海总队',
                id: '1',
                isShow: false,
                children: [{
                    name: '西宁支队',
                    id: '1-1',
                    isShow: false,
                    children: [{
                        name: '二大队',
                        id: '1-1-1',
                        isShow: false,
                        children: [{
                            name: '六中队——公安厅执勤点',
                            id: '1-1-1-1'
                        }, {
                            name: '六中队——人大执勤点',
                            id: '1-1-1-2'
                        }]
                    }]
                }]
            }]
        }
    },
    created () {
        Bus.$on('add', ({ ind, id }) => {
            console.log(ind, id)
            this.treeData = this.changeArr(this.treeData, ind, id);
        })
    },
    methods: {
        addChild () {
            console.log(this.treeData)
        },
        changeItem (data, id, ind) {
            data.forEach(v => {
                if (v.id !== id) {
                    id.indexOf(v.id) > -1 && this.changeItem(v.children, id, ind)
                } else {

                }
            })
        },
        changeArr (data, ind, id) {
            console.log(data)
            return data.map(v => {
                if (id === v.id) {
                    return {
                        ...v,
                        children: v.children ? [
                            ...v.children,
                            {
                                name: 'baidu',
                                id: v.id + '-' + (v.children.length + 1)
                            }
                        ] : [
                            {
                                name: 'baidu',
                                id: v.id + '-' + 1
                            }
                        ]
                    }
                } else if (id.indexOf(v.id) === 0) {
                    return {
                        ...v,
                        children: this.changeArr(v.children, ind, id)
                    }
                } else {
                    return v
                }
            })
        }
    },
    components: {
        AddChild
    }
}
</script>
<style lang="scss">
    .stateManagement{
        h4{
            background: #fff;
            margin-bottom:2px;
            line-height: 45px;
        }
        .stateCont{
            background: #fff;
            padding:20px 0 0 20px;
            .el-button{
                span{
                    color:#fff;
                }
            }
        }
    }
</style>
