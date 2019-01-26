<template>
    <div>
        <div class="maskALLTable">
            <h4>
                <span>跟进规则：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </h4>
            <h4>
                <span>总收入：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </h4>
            <h4>
                <span>订单名称：</span>
                <el-input
                    size="small"
                    placeholder="请输入订单名称"
                    suffix-icon="el-icon-search"
                >
                </el-input>
            </h4>
            <el-button type="warning">重置</el-button>
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
    </div>
</template>
<script>
import { orderTableArg } from '@/config/orderTableArg.js';
import { mapState } from 'vuex';
import OrderTable from '@/components/orderTable/orderTable';
export default {
    data () {
        return {
            options: [{
                value: '选项1',
                label: '每天'
            }, {
                value: '选项2',
                label: '2天'
            }, {
                value: '选项3',
                label: '3天'
            }, {
                value: '选项4',
                label: '4天'
            }, {
                value: '选项5',
                label: '5天'
            }],
            options1: [{
                value: '选项1',
                label: '500以内'
            }, {
                value: '选项2',
                label: '1000以内'
            }, {
                value: '选项3',
                label: '2000以内'
            }, {
                value: '选项4',
                label: '3000以内'
            }, {
                value: '选项5',
                label: '4000以内'
            }, {
                value: '选项5',
                label: '5000以内'
            }, {
                value: '选项5',
                label: '5000以上'
            }],
            orderTableArg: {
                ...orderTableArg
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
        OrderTable
    }
}
</script>
<style lang="scss">
    .maskALLTable, .pagination{
        margin-bottom: 10px;
        padding:10px;
        background:#fff;
    }
    .maskALLTable{
        display:flex;
        justify-content: space-between;
        h4{
            display:flex;
            align-items: center;
            font-size:12px;
            font-weight: 400;
            padding: 0 10px;
            span{
                flex-shrink: 0;
            }
            .el-button span, .el-button i{
                color:#ccc;
            }
        }
        .el-button--warning span{
            color:#fff;
        }
    }
</style>
