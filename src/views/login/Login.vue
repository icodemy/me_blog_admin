<template>
<div class="container">
  <el-card shadow="always" class="login-container">
    <h2 class="login-title">博客管理</h2>
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名..."></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password">
        <el-input v-model="ruleForm.password" placeholder="请输入密码..."></el-input>
      </el-form-item>
    </el-form>
    <el-button :loading="loading" type="primary" @click="submitForm('ruleForm')">登&nbsp;录</el-button>
  </el-card>

</div>
</template>

<script>
import {login} from "../../api/login/login";

export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //this.loading=true
          //alert('submit!');
          login(this.ruleForm).then(res=>{
            if(res){
              console.log(res);
              localStorage.setItem("user",JSON.stringify(res.data.data.user));
              localStorage.setItem("token",res.data.data.token);
              this.$router.replace('/home')
            }
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.loading = false
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #CCFFFF;
}
.login-title {
  margin-bottom: 15px;
}
.login-container {
  text-align: center;
  min-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.el-button {
  width: 100%;
}

</style>
