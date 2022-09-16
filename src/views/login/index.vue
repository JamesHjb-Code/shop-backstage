<template>
  <el-row class="login-wrapper">
    <el-col :lg="16"
            :md="12"
            class="left-wrapper">
      <div class="text-content">
        <div class="text-head">欢迎光临</div>
        <div class="text-content">电商——后台管理系统</div>
      </div>
    </el-col>
    <el-col :lg="8"
            :md="12"
            class="right-wrapper">
      <el-form :model="form"
               ref="formRef"
               :rules="rules"
               hide-required-asterisk="false"
               label-width="60px"
               class="form-wrapper">
        <div class="header-text">欢迎回来</div>
        <div class="login-title">
          <div class="line"></div>
          <div class="text">登录</div>
          <div class="line"></div>
        </div>
        <el-form-item label="账号："
                      prop="username">
          <el-input v-model="form.username"
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
          <el-input v-model="form.password"
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
                     @click="onSubmit">登 录</el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useRouter} from 'vue-router'
import { login } from '~/api/login'
import { useCookies } from '@vueuse/integrations/useCookies'
import { ElNotification } from 'element-plus'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
})
// 表单验证
const rules = {
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

// 获取登录数据
const formRef = ref(null)

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false
    }
    login(form)
      .then((res) => {
        // 提示成功
        console.log(res)
        if (res.success) {
          ElNotification({
            title: '提示',
            message: '登录成功',
            type: 'success',
            duration: 3000,
          })
          // 存储token和用户相关信息
          const cookie = useCookies()
          cookie.set("token",res.token)
          // 跳转到首页
          router.push('/')
        } else {
          ElNotification({
            title: '提示',
            message: res.msg,
            type: 'error',
            duration: 3000,
          })
        }
      })

  })
}
</script>
<style lang="scss" scoped>
.login-wrapper {
  min-height: 100vh;
  .left-wrapper,
  .right-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .left-wrapper {
    background: #79bbff;
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
    .form-wrapper {
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
          width: 100%;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>