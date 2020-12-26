<template>
  <!--登录表单的容器-->
  <div class="login_container">
    <!--登录区域-->
    <div class="login_box">
      <!--头像-->
      <div class="avatar_box">
        <img src="../assets/img/timg.gif">
      </div>

      <!--表单-->
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label- width="0px" class="login_form">
        <el-form-item prop="shopphone">
          <el-input v-model="loginForm.shopphone" placeholder="请输入手机号码" prefix- icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入登录密码" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <div class="verifyCode_box">
            <el-input v-model="loginForm.verifyCode" placeholder="请输入计算结果" prefix-icon="el-icon-mobile" class="verifyCode"></el-input>
            <img src="../assets/img/mskKPg.png" alt="" class="verifyCode_img">
          </div>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        shopphone: '',
        password: '',
        verifyCode: ''
      },
      loginRules: {
        shopphone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号码格式错误', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入计算结果', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success',
            duration: 1200,
            onClose: () => {
              this.$router.push('/main')
            }
          })
        } else {
          this.$message({
            message: '请完整输入',
            type: 'warning',
            duration: 1200
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    height: 100%;
    background-color: darksalmon;
  }

  .login_box {
    width: 450px;
    height: 380px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box{
      width: 130px;
      height: 130px;
      border: 1px solid #EEEEEE;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin: -65px auto;
      background-color: #FFFFFF;

      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #EEEEEE;
      }
    }

    .login_form{
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 0px 20px;
      box-sizing: border-box;

      .login_btn{
        display: flex;
        justify-content: flex-end;
      }

      .verifyCode_box{
        display: flex;
        .verifyCode{
          width: 70%;
          justify-content: left;
        }

        .verifyCode_img{
          width: 30%;
          height: 45px;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
