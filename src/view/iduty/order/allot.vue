<template>
    <div>
        <div class="allot">
            <h5>分配订单</h5>
            <el-button type="warning" icon="el-icon-search" @click="bestClick">高级搜索</el-button>
        </div>
        <div class="table">
            <h4>主要负责人：
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-button plain>
                            请选择
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>次次</el-dropdown-item>
                        <el-dropdown-item>与其</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </h4>
            <h4>辅助负责人：
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-button plain>
                            请选择
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>次次</el-dropdown-item>
                        <el-dropdown-item>与其</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </h4>
            <h4>跟进规则：
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-button plain>
                            请选择
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>每天</el-dropdown-item>
                        <el-dropdown-item>2天</el-dropdown-item>
                        <el-dropdown-item>3天</el-dropdown-item>
                        <el-dropdown-item>4天</el-dropdown-item>
                        <el-dropdown-item>5天</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </h4>
            <h4>分配状态：
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-button plain>
                            请选择
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>已分配</el-dropdown-item>
                        <el-dropdown-item>未分配</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
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
            flag: true,
            orderTableArg: {
                ...orderTableArg
            }
        }
    },
    components: {
        OrderTable
    },
    created () {
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
    methods: {
        handleSizeChange (size) {
            this.orderTableArg.pageNum = size;
            this.getOrderTableData(this.orderTableArg)
        },
        handleCurrentChange (page) {
            this.orderTableArg.pageIndex = page;
            this.getOrderTableData(this.orderTableArg)
        }
    }
}
</script>
<style lang="scss">
.allot, .derive, .table, .pagination{
    margin-bottom: 10px;
    padding:10px;
    background:#fff;
}
.allot{
    display:flex;
    justify-content: space-between;
    align-items: center;
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
.table{
    display:flex;
    justify-content: space-between;
    h4{
        display:flex;
        align-items: center;
        font-size:12px;
        font-weight: 400;
        padding: 0 10px;
        .el-button span, .el-button i{
            color:#ccc;
        }
    }
}
</style>
