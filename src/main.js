import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import SvgIcon from './components/SvgIcon/index.vue'
import "./guardPermission"
// 挂载到应用上
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.component('svg-icon', SvgIcon) // 全局注册SvgIcon组件
app.mount('#app')
// 全局注册-icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
