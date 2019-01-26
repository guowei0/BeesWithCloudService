<template>
    <div>
        <el-dialog title="高级搜索" :visible.sync="flags" width="900px">
            <el-form :model="searchObj">
                <el-form-item>
                    <el-button type="primary" @click="addText">添加文本搜索</el-button>
                </el-form-item>
                <el-form-item label="搜索内容" v-for="(item) in searchObj.text" :key="item.key">
                    <el-col :span="8">
                        <el-select v-model="item.msg" placeholder="请选择活动区域" width="40%">
                            <el-option label="订单编号" value="orderNumber"></el-option>
                            <el-option label="订单名称" value="orderName"></el-option>
                            <el-option label="订单进度" value="orderProgress"></el-option>
                            <el-option label="客户名称" value="userName"></el-option>
                            <el-option label="订单备注" value="ordertext"></el-option>
                            <el-option label="客户手机号" value="telpgone"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="16">
                        <el-input v-model="item.content" width="60%"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addText">添加日期搜索</el-button>
                </el-form-item>
                <el-form-item label="搜索内容" v-for="(item) in searchObj.date" :key="item.key">
                    <el-select v-model="item.date" placeholder="请选择活动区域">
                        <el-option label="启动日期" value="startDate"></el-option>
                        <el-option label="结束日期" value="endDate"></el-option>
                    </el-select>
                    <el-date-picker
                        v-model="item.startData"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                    —
                    <el-date-picker
                        v-model="item.endData"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addText">添加金额搜索</el-button>
                </el-form-item>
                <el-form-item label="搜索内容" v-for="(item) in searchObj.money" :key="item.key">
                    <el-select v-model="item.money" placeholder="请选择活动区域">
                        <el-option label="收入" value="income"></el-option>
                        <el-option label="成本" value="cost"></el-option>
                        <el-option label="差额" value="difference"></el-option>
                    </el-select>
                    <el-input v-model="item.start"></el-input>
                    —
                    <el-input v-model="item.end"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="search">搜索</el-button>
                <el-button type="primary" @click="reset">重置</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'bestSearch',
    props: ['flags'],
    data () {
        return {
            searchObj: {
                text: [{
                    content: '',
                    msg: '',
                    key: new Date() * 1 + 1
                }],
                date: [{
                    date: '',
                    startData: '',
                    endData: '',
                    key: new Date() * 1 + 2
                }],
                money: [{
                    money: '',
                    start: '',
                    end: '',
                    key: new Date() * 1 + 3
                }]
            }
        }
    },
    methods: {
        addText () {
            console.log(0)
        },
        search () {
            console.log(0)
        },
        reset () {
            console.log(0)
        }
    }
}
</script>
<style>
</style>
