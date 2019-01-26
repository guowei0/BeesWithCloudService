<template>
    <div class=orderHeader>
        <div class='select'>
            <p><slot></slot></p>
            <div class='selectRight'>
                <ul class='orderheadernav'>
                    <li>观看模式：</li>
                    <li
                        v-for='(item,index) in orderHeaderType'
                        :key='index' class='listchild'
                        :class='{active:index===defaultindex}'
                        @click='givetitle(item.id, index)'
                    >
                        {{item.name}}
                    </li>
                </ul>
                <el-button type='warning' size="small" @click="bestClick">高级搜索</el-button>
            </div>
        </div>
        <div class="select">
        <el-button type="primary" size="small" class="search">导出</el-button>
            <ul>
                <li>
                    <span>收入金额:</span>
                        <el-select size='mini' v-model="orderTableArg.income" placeholder="请选择" @change='okMas'>
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                            </el-option>
                        </el-select>
                </li>
                <li>
                    <span>成本金额:</span>
                    <el-select size='mini' v-model="orderTableArg.cost" placeholder="请选择" @change='okMas'>
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.value"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li class="orderHeaderlistipt">
                    <span>差额:</span>
                    <el-input size='mini' v-model="orderTableArg.difference.min" placeholder="最小"></el-input><span>-</span><el-input size='mini' v-model="orderTableArg.difference.max" placeholder="最大"></el-input>
                </li>
                <p> <el-button type="primary" size="small" class="search"  @click='okMas'>确认</el-button></p>
                <p> <el-button type="primary" size="small" class="search" @click='resetMas'>重置</el-button></p>
            </ul>
        </div>
    </div>
</template>
<script>
import orderHeaderType from '@/config/orderHeaderType'
import { orderTableArg } from '@/config/orderTableArg'
import { mapActions } from 'vuex'

export default {
    props: ['watcher'],
    data () {
        return {
            defaultindex: 0,
            orderHeaderType
        }
    },
    created () {
        this.okMas();
    },
    methods: {
        givetitle (title, index) {
            this.defaultindex = index;
            this.$emit('givetitle', title);
            this.okMas();
        },
        ...mapActions('orderstore', ['getorderdata_sync']),
        okMas () {
            let { income, cost } = this.orderTableArg
            let { min, max } = this.orderTableArg.difference
            if (min > max) {
                alert('最小值大于最大值')
                return
            }
            let difference = max - min
            this.getorderdata_sync({
                income: Number.parseInt(income),
                cost: Number.parseInt(cost),
                difference,
                pattern: this.title,
                ordertype: this.ordertype
            })
        },
        resetMas () {
            this.select = {
                ...orderTableArg,
                difference: {
                    ...orderTableArg.difference
                }
            }
        },
        bestClick () {
            this.$emit('bestClick')
        }
    }
}
</script>
<style scoped>
    .select{
        font-size: 12px;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        border-bottom: 15px solid #f1f1f1;
    }
    .select p{
        line-height: 44px;
    }
    .orderheadernav li{
        padding: 5px 7px;
        border-radius: 3px;
    }
    .orderheadernav li:not(:nth-child(1)){
        border: 1px solid #e1b961;
    }
    .selectRight{
        display: flex;
    }
    .active{
        background: #e1b961;
        color:#fff;
    }
</style>
