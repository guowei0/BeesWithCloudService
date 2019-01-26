<template>
    <div>
        <div class="orderHeaderType">
            <h5>全部订单管理</h5>
            <div>
                观看模式：
                <el-button-group>
                    <el-button  v-for="(ite, ind) in orderHeaderType" :key="ind">
                        <span v-bind:class="{active:ind == currentIndex}">{{ite.name}}</span>
                    </el-button>
                </el-button-group>
                <el-button class="search" type="warning" @click="bestClick"><span>高级搜索</span></el-button>
            </div>
        </div>
        <div class="derive">
            <div>
                <el-button type="warning"><span>导出</span></el-button>
            </div>
            <div class="select">
                收入金额：
                <el-select v-model="orderTableArg.income" placeholder="请选择">
                    <el-option
                        v-for="item in optionsData"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
                成本金额：
                <el-select v-model="orderTableArg.cost" placeholder="请选择">
                    <el-option
                        v-for="item in optionsData"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name">
                    </el-option>
                </el-select>
                差额：
                <el-input type="number" v-model="orderTableArg.difference.min" placeholder="请输入内容"></el-input>
                ——
                <el-input type="number" v-model="orderTableArg.difference.max" placeholder="请输入内容"></el-input>
                <el-button type="warning" @click="getArg"><span>确认</span></el-button>
                <el-button type="warning" @click="resetArg"><span>重置</span></el-button>
            </div>
        </div>
        <OrderTable />
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="orderTableArg.pageIndex"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager,next,jumper"
                :total="dataLength"
            ></el-pagination>
        </div>
        <BestSearch :flags.sync="searchFlag"/>
    </div>
</template>
<script>
import orderHeaderType from '@/config/orderHeaderType.js';
import BestSearch from '@/components/bestSearch';
import OrderTable from '@/components/orderTable/orderTable';
import { orderTableArg } from '@/config/orderTableArg.js';
// import { orderTableArg, tableTypeConfig } from '@/config/orderTableArg.js';
import { mapActions, mapState } from 'vuex';

export default {
    data () {
        return {
            currentIndex: undefined,
            flag: true,
            searchFlag: false,
            optionsData: [
                {
                    name: '500'
                },
                {
                    name: '1000'
                },
                {
                    name: '1500'
                },
                {
                    name: '2000'
                }
            ],
            orderTableArg: {
                ...orderTableArg,
                difference: {
                    ...orderTableArg.difference
                }
            },
            orderHeaderType: orderHeaderType
        }
    },
    computed: {
        ...mapState({
            orderTableData: (state) => {
                return state.orderStore.orderTableData
            },
            dataLength: (state) => {
                return state.orderStore.dataLength
            }
        })
    },
    components: {
        BestSearch,
        OrderTable
    },
    mounted () {
        this.getOrderTableData(this.orderTableArg)
    },
    created () {
    },
    watch: {
        // '$route.query.type' (newV, oldV) {
        //      console.log(0)
        // }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to, from)
        next();
    },
    methods: {
        ...mapActions({
            getOrderTableData: 'orderStore/getOrderTableData'
        }),
        getArg () {
            this.getOrderTableData(this.orderTableArg)
        },
        resetArg () {
            this.orderTableArg = {
                ...orderTableArg,
                difference: {
                    ...orderTableArg.difference
                }
            };
        },
        handleSizeChange (size) {
            this.orderTableArg.pageNum = size;
            this.getOrderTableData(this.orderTableArg)
        },
        handleCurrentChange (page) {
            this.orderTableArg.pageIndex = page;
            this.getOrderTableData(this.orderTableArg)
        },
        // givetitle (title) {
        //     this.orderTableArg.tableType = tableTypeConfig[title]
        //     this.getOrderTableData(this.orderTableArg)
        // },
        bestClick () {
            console.log(0)
            this.searchFlag = true
            this.$emit('bestClick')
        }
    }
}
</script>
<style>
    .el-button--warning span{
        color:#fff;
    }
    .orderHeaderType{
        width: 100%;
        margin-bottom: 10px;
        padding:10px;
        font-size:15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .orderHeaderType .search{
        margin-left: 10px;
    }
    .derive{
        line-height: 40px;
        background:#fff;
        margin-bottom: 10px;
        padding:10px;
        display: flex;
        justify-content: space-between;
    }
    .select{
        display: flex;
        font-size:12px;
    }
    .select .el-button--warning{
        margin-left:10px;
    }
    .select .el-input, .select .el-select{
        width:100px;
    }
    .pagination{
        background:#fff;
        margin-bottom: 10px;
    }
</style>
