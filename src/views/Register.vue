<template>
  <!--登录表单的容器-->
  <div class="register_container">
    <!--登录区域-->
    <div class="register_box">
      <!--头像-->
      <div class="avatar_box">
        <img src="../assets/img/timg.gif">
      </div>

      <!--表单-->
      <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label- width="0px" class="register_form">
        <el-form-item prop="shopphone">
          <el-input v-model="registerForm.shopphone" placeholder="请输入手机号码" prefix- icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入登录密码" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type="password" v-model="registerForm.password2" placeholder="请再次输入登录密码" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="shopname">
          <el-input v-model="registerForm.shopname" placeholder="请输入店铺名字" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="shopcity">
          <el-input v-model="registerForm.shopcity" placeholder="请输入所在城市" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="address">
          <el-input v-model="registerForm.address" placeholder="请输入地址" prefix- icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="register_btn">
          <el-button type="primary" @click="submitForm('registerForm')">立即注册</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import qs from 'qs'
export default {
  name: 'Register',
  data () {
    // eslint-disable-next-line no-unused-vars
    return {
      registerForm: {
        shopphone: '',
        password: '',
        password2: '',
        shopname: '',
        shopcity: '',
        address: ''
      },
      registerRules: {
        shopphone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号码格式错误', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请再次输入登录密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        shopname: [
          { required: true, message: '请输入店铺名字', trigger: 'blur' },
          { min: 1, message: '店铺名字不能为空', trigger: 'blur' }
        ],
        shopcity: [
          { required: true, message: '请输入所在城市', trigger: 'blur' },
          { min: 1, message: '所在城市不能为空', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入商铺地址', trigger: 'blur' },
          { min: 1, message: '商铺地址不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:8083/Shop/register',
      //   data: {
      //     username: 'message',
      //     password: '1111111',
      //     shopname: '123',
      //     address: '111'
      //   }
      // }).then(function (response) {
      //   console.log(response);
      // })
      console.log(formName)
      axios.get('http://localhost:8083/Shop/login/register', {
        params: {
          shopphone: this.registerForm.shopphone,
          shoppwd: this.registerForm.password,
          shopname: this.registerForm.shopname,
          shopcity: this.registerForm.shopcity,
          shopaddress: this.registerForm.address
        }

      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success',
            duration: 1200,
            onClose: () => {
              this.$router.push({ path: 'login' })
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
  .register_container {
    height: 100%;
    background-color: darksalmon;
  }

  .register_box {
    width: 450px;
    height: 530px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 60%;
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

    .register_form{
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 0px 20px;
      box-sizing: border-box;

      .register_btn{
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
