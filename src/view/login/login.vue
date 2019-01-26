<template>
    <div class="login">
        <el-form :model="loginMsg" ref="loginMsg" label-width="100px" class="demo-ruleForm">
            <el-form-item
                label="账号"
                prop="userName"
                :rules="[
                    { required: true, message: '账号不能为空'}
                ]"
            >
                <el-input type="userName" v-model="loginMsg.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="pwd"
                :rules="[
                    { required: true, message: '密码不能为空'}
                ]"
            >
                <el-input type="password" v-model.number="loginMsg.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginMsg')">登录</el-button>
                <el-button type="reset" @click="submitForm('loginMsg')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Cookie from 'js-cookie';
export default {
    data () {
        return {
            loginMsg: {
                userName: '',
                pwd: ''
            }
        }
    },
    methods: {
        submitForm (type) {
            console.log(this.loginMsg)
            this.$refs[type].validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.$post('/login', { ...this.loginMsg }).then(res => {
                        console.log('res', res)
                        if (res.data.code === 1) {
                            Cookie.set('userName', this.loginMsg.userName, { expires: 7 })
                            this.$router.push({
                                path: '/order'
                            })
                        }
                    })
                } else {
                    console.log('不成功');
                }
            });
        }
    }
}
</script>
<style>

</style>
