<template>
    <div>
        <el-table
            :data="orderTableData"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="orderNum"
                label="订单编号"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="makeDate"
                label="建档日期"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="orderName"
                label="订单名称"
                width="80"
            >
            <template slot-scope="slot">
                <span @click='getMsg(slot.row.id)'>BOY</span>
                <span v-if='slot.row.id%2 === 0' @click='follow(slot.row.id, 0)' class='gen'>跟</span>
                <span v-else @click='follow(slot.row.id, 1)' class='jin'>进</span>
            </template>
            </el-table-column>
            <el-table-column
                prop="CustomerName"
                label="客户姓名"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="phoneNum"
                label="手机号码"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="incomeMoney"
                label="收入总额"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="costMoney"
                label="成本总额"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="diffMoney"
                label="差额"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="followNum"
                label="跟进次数"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="lastFollowDate"
                label="跟进日期"
                width="80"
            ></el-table-column>
            <el-table-column
                prop="lastFollowContent"
                label="最后跟进内容"
            ></el-table-column>
            <el-table-column
                prop="status"
                label="状态"
            ></el-table-column>
        </el-table>
        <el-dialog title="新建进度" :visible.sync="outerVisible" class='el_dialog_Gen' v-show='ShowDialog'>
            <el-form ref="form" :model="sizeForm" label-width="120px" size="medium">
                    <el-form-item label="选择大项:" no-data-text>
                        <el-select v-model="sizeForm.regionDa" placeholder="请选择活动区域">
                        <el-option label="大项一" value="daxiang1"></el-option>
                        <el-option label="大项二" value="daxiang2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择子项:">
                        <el-select v-model="sizeForm.regionXiao" placeholder="请选择活动区域">
                        <el-option label="子项一" value="zixiang1"></el-option>
                        <el-option label="子项二" value="zixiang2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择关联项:">
                        <el-select v-model="sizeForm.regionGX" placeholder="请选择活动区域">
                        <el-option label="关联项一" value="guanlianxinag1"></el-option>
                        <el-option label="关联项二" value="guanlianxinag2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class='jindu' label="进度详情:">
                        <quill-editor
                            class='quill'
                            v-model="content"
                            ref="myQuillEditor"
                            :options="editorOption"
                            @change="onEditorChange($event)">
                        </quill-editor>
                    </el-form-item>
                    <el-form-item size="large" class='el_form_btn'>
                        <el-button type="warning" @click="onSubmit">保存</el-button>
                        <el-button @click='canacl'>取消</el-button>
                    </el-form-item>
        </el-form>
        </el-dialog>
        <el-dialog title="订单全部跟进" :visible.sync="flowerVisible" class='orderFollow' v-for='(item, index) in JINdata' :key='index'>
            <div class='order_all_size'>
                <span>订单号：{{item.orderNum}}</span>
                <span>订单名称：{{item.orderName}}</span>
                <span>订单负责人：{{item.CustomerName}}</span>
            </div>
            <div class='el_step_box' style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="" icon="el-icon-caret-bottom">
                        <template slot='title'>
                            <p class='p_Date'>2019-1-10 18:14:09</p>
                            <p>跟进人：哈哈</p>
                            <p>跟进项目：海外业务</p>
                        </template>
                    </el-step>
                    <el-step title="" icon="el-icon-caret-bottom">
                        <template slot='title'>
                            <p class='p_Date'>2019-1-10 18:14:09</p>
                            <p>跟进人：哈哈</p>
                            <p>跟进项目：海外业务</p>
                        </template>
                    </el-step>
                    <el-step title="" icon="el-icon-caret-bottom">
                        <template slot='title'>
                            <p class='p_Date'>2019-1-10 18:14:09</p>
                            <p>跟进人：哈哈</p>
                            <p>跟进项目：海外业务</p>
                        </template>
                    </el-step>
                </el-steps>
            </div>
            <el-button type="warning" @click="onSubmitJIN">新建跟进</el-button>
            <el-button>下载PDF</el-button>
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'orderTable',
    data () {
        return {
            JINdata: [],
            content: '',
            ShowDialog: true,
            editorOption: {
                placeholder: '请编辑内容',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        ['image']
                    ]
                }
            },
            outerVisible: false,
            flowerVisible: false,
            sizeForm: {
                regionDa: '',
                regionXiao: '',
                regionGX: ''
            }
        }
    },
    computed: {
        ...mapState({
            orderTableData: state => state.orderStore.orderTableData
        })
    },
    methods: {
        getMsg (slot) {
            console.log('slot', slot)
        },
        follow (id, number) {
            if (number === 0) {
                this.outerVisible = true;
            } else {
                let JInarr = [];
                this.flowerVisible = true;
                this.OrderTabDao.forEach(item => {
                    if (item.id === id) {
                        JInarr.push(item);
                    }
                });
                this.JINdata = JInarr;
            }
        },
        onSubmit () {
            if (this.sizeForm.regionDa === '' || this.sizeForm.regionXiao === '' || this.sizeForm.regionGX === '') {
                return;
            } else {
                this.ShowDialog = !this.ShowDialog;
            }
            this.$emit('getObj', this.sizeForm);
        },
        onEditorChange (e) {
            console.log('e', e);
        },
        onSubmitJIN () {
            this.outerVisible = true;
            this.flowerVisible = false;
        },
        canacl () {
            this.ShowDialog = !this.ShowDialog;
        }
    }
}
</script>
<style>
    .cell{
        font-weight: 400;
        font-size:12px;
    }
    .gen{
        width:30px;
        text-align: center;
        color:#fff;
        padding:2px 5px;
        background: #30C27C;
        margin-left:10px;
        display:block;
    }
    .jin{
        width:30px;
        text-align: center;
        border:solid 1px #30C27C;
        color:#30C27C;
        padding:2px 5px;
        margin-left:10px;
        display:block;
    }
</style>
