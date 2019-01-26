<template>
    <div class="Reportform">
        <div class="ReportformSelect">
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
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .ReportformSelect{
        margin-bottom: 10px;
        padding:10px;
        background:#fff;
    }
    .ReportformSelect{
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
