<template>
    <div>
        <slot></slot>
        <div class="orderHeaderParent">
            观看模式：
            <div 
                v-for="(ite, ind) in headerConfig"
                :key="ind"
                class="orderHeaderItem"
                @click="sendItemName(ite.name)"
            >
                {{ite.name}}
            </div>
        </div>
    </div>
</template>
<script>
import orderHeaerConfig from '@/config/orderHeaderType.js';

export default {
    name: 'orderHeader',
    data () {
        return {
            headerConfig: orderHeaerConfig
        }
    },
    methods: {
        sendItemName(name) {
            this.$emit('getItemName', name)
        }
    }
}
</script>

<style>
    .orderHeaderParent{
        display: inline-block;
    }
    .orderHeaderItem{
        width: 80px;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 1);
    }
</style>
