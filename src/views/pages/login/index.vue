<template>
  <el-row class="login-register-wrapper">
    <el-col :lg="16"
            :md="12"
            class="left-wrapper" :class="isRegister?'register-background':'login-background'">
      <div class="text-content">
        <div class="text-head">欢迎光临</div>
        <div class="text-content">电商——后台管理系统</div>
      </div>
    </el-col>
    <!-- 登录 -->
    <el-col :lg="8"
            :md="12"
            class="right-wrapper"
            v-if="!isRegister">
      <el-form :model="loginForm"
               ref="loginFormRef"
               :rules="loginRules"
               :hide-required-asterisk="true"
               label-width="60px"
               class="login-wrapper">
        <div class="header-text">欢迎回来</div>
        <div class="login-title">
          <div class="line"></div>
          <div class="text">登录</div>
          <div class="line"></div>
        </div>
        <el-form-item label="账号："
                      prop="username">
          <el-input v-model="loginForm.username"
                    placeholder="请输入账号">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码："
                      prop="password">
          <el-input v-model="loginForm.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password>
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="btn-wrapper">
          <el-button type="primary"
                     round
                     class="btn"
                     @click="onLoginSubmit"
                     :loading="loading">登 录</el-button>
          <el-button type="primary"
                     round
                     class="btn"
                     @click="goRegister">注 册</el-button>
        </div>
      </el-form>
    </el-col>
    <!-- 注册 -->
    <el-col :lg="8"
            :md="12"
            class="right-wrapper"
            v-else>
      <el-form :model="registerForm"
               ref="registerFormRef"
               :rules="registerRules"
               :hide-required-asterisk="true"
               label-width="85px"
               class="register-wrapper">
        <div class="header-text">欢迎注册</div>
        <div class="register-title">
          <div class="text">已有账号?<span class="link-text"
                  @click="goLogin">登录</span></div>
        </div>
        <el-form-item label="账号："
                      prop="username">
          <el-input v-model="registerForm.username"
                    placeholder="请输入账号">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码："
                      prop="password">
          <el-input v-model="registerForm.password"
                    type="password"
                    placeholder="请输入密码"
                    show-password>
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="手机号码："
                      prop="phone">
          <el-input v-model="registerForm.phone"
                    placeholder="请输入手机号码"
                    >
            <template #prefix>
              <el-icon class="el-input__icon">
                <Iphone />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="地址："
                      prop="address">
          <el-input v-model="registerForm.address"
                    placeholder="请输入地址"
                    >
            <template #prefix>
              <el-icon class="el-input__icon">
                <House />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="btn-wrapper">
          <el-button type="primary"
                     round
                     class="btn"
                     @click="onRegisterSubmit"
                     :loading="loading">注 册</el-button>
          <el-button type="primary"
                     round
                     class="btn"
                     @click="goLogin">返 回</el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup name="login">
import { User, Lock, House, Iphone } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { login , checkUsername, register} from '~/api/login'
import { prompt } from '~/compontool/util'
import { setToken } from '~/compontool/token'
const store = useStore()
const router = useRouter()

const loginForm = reactive({
  username: '',
  password: '',
})
const registerForm = reactive({
  username: '',
  password: '',
  phone: '',
  address: '',
})
/*
自定义表单验证
*/
const validatePhone = (rule, value, callback) =>{
  let verify = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/ //验证手机号码
  if(!verify.test(value)){
    callback(new Error('请输入正确手机号码'))
  }else{
    callback()
  }
}
const validateUsername = (rule,value,callback)=>{
  if(value!==''){
    // 验证用户名是否存在
    checkUsername(value).then((res)=>{
      if(value === res.result[0].username){
         return callback(new Error(res.msg))
      }else{
        callback()
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}
// 表单验证
const loginRules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
}
const registerRules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
    {
      validator:validateUsername,
      trigger:'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: true,
      message: '手机号码不能为空',
      trigger: 'blur',
    },
    {
      validator:validatePhone,
      trigger:'blur'
    }
  ],
  address: [
    {
      required: true,
      message: '地址不能为空',
      trigger: 'blur',
    },
  ],
}


// 获取登录数据
const loginFormRef = ref(null)
// 获取注册数据
const registerFormRef = ref(null)
// 是否加载中
const loading = ref(false)
// 是否切换注册
const isRegister = ref(false)
// 注册
const onRegisterSubmit = () => {
  registerFormRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    loading.value = true
    register(registerForm)
      .then((res) => {
        // 注册成功
        if (res.success) {
          prompt('注册成功', 'success')
          // 跳转到登录页
          isRegister.value = false
        } else {
          prompt(res.msg, 'error')
        }
      })
      .finally(() => {
        loading.value = false
      })
  })
}
// 提交
const onLoginSubmit = () => {
  loginFormRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    loading.value = true
    login(loginForm)
      .then((res) => {
        // 登录成功
        if (res.success) {
          prompt('登录成功', 'success')
          // 存储token
          setToken(res.token)
          // 跳转到首页
          router.push('/')
        } else {
          prompt(res.msg, 'error')
        }
      })
      .finally(() => {
        loading.value = false
      })
  })
}

// 跳转注册页
const goRegister = () => {
  isRegister.value = true
}
// 跳转登录页
const goLogin = () => {
  isRegister.value = false
}

</script>
<style lang="scss" scoped>
.login-register-wrapper {
  min-height: 100vh;
  
  .left-wrapper,
  .right-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .left-wrapper {    
    &.login-background{
      background-image: linear-gradient(48deg, #8B5CF6, #EC4899);
    }
    &.register-background{
      background-image: linear-gradient(48deg,#067ceb,#00bdf7);
    }
    
    .text-content {
      color: #fff;
      .text-head {
        font-size: 4rem;
        font-weight: bold;
        line-height: 120px;
      }
      .text-content {
        font-size: 3rem;
      }
    }
  }
  .right-wrapper {
    flex-direction: column;
    text-align: center;
    .login-wrapper {
      width: 70%;
      margin: 0 auto;
      .header-text {
        margin: 20px 0px;
        font-weight: bold;
        font-size: 45px;
      }
      .login-title {
        display: flex;
        align-items: center;
        margin: 20px 0px;
        color: rgb(122, 121, 121);
        font-size: 25px;
        .line {
          flex: 1;
          width: 100%;
          height: 1px;
          background: rgb(122, 121, 121);
        }
        .text {
          padding: 0px 10px;
        }
      }
      .btn-wrapper {
        .btn {
          margin: 10px 0;
          width: 100%;
          font-size: 18px;
          font-weight: bold;
        }
        .el-button + .el-button {
          margin-left: 0px;
        }
      }
    }
    .register-wrapper {
      width: 70%;
      margin: 0 auto;
      .header-text {
        margin: 20px 0px;
        font-weight: bold;
        font-size: 45px;
      }
      .register-title {
        display: flex;
        align-items: center;
        margin: 20px 0px;
        color: rgb(122, 121, 121);
        font-size: 15px;
        .text {
          padding: 0px 5px;
        }
        .link-text {
          color: #043bf1;
          padding-left: 10px;
          cursor: pointer;
        }
      }
      .btn-wrapper {
        .btn {
          margin: 10px 0;
          width: 100%;
          font-size: 18px;
          font-weight: bold;
        }
        .el-button + .el-button {
          margin-left: 0px;
        }
      }
    }
  }
}
</style>