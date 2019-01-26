<template>
    <div>
        <div class="myorder">
            <h5>我的订单</h5>
            <ul class='orderheadernav'>
                <li>观看模式：</li>
                <li
                    v-for='(item,index) in orderHeaderType'
                    :key='index' class='listchild'
                    :class='{active:index===defaultindex}'
                >
                    <el-button-group>
                        <el-button plain>{{item.name}}</el-button>
                    </el-button-group>
                </li>
                <el-button type="warning" icon="el-icon-search" @click="bestClick">高级搜索</el-button>
            </ul>
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
import orderHeaderType from '@/config/orderHeaderType'
import { orderTableArg } from '@/config/orderTableArg.js';
import OrderTable from '@/components/orderTable/orderTable';
import BestSearch from '@/components/bestSearch';
import { mapActions, mapState } from 'vuex';
export default {
    data () {
        return {
            orderHeaderType,
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
            }
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
    created () {
    },
    mounted () {
        this.getOrderTableData(this.orderTableArg)
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
        bestClick () {
            this.searchFlag = true
            this.$emit('bestClick')
        }
    }
}
</script>
<style lang="scss">
    .el-button--warning span{
        color:#fff;
    }
    .myorder, .derive{
        margin-bottom: 10px;
    }
    .myorder{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:10px;
        background:#fff;
        .orderheadernav{
            display:flex;
            align-items: center;
        }
        .el-button--warning{
            margin-left:10px;
            .el-icon-search{
                color:#fff;
            }
            span{
                color:#fff;
            }
        }
    }
    .derive{
        line-height: 40px;
        background:#fff;
        margin-bottom: 10px;
        padding:10px;
        display: flex;
        justify-content: space-between;
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
    }
</style>
