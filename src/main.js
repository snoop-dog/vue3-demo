import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
// import Login from './components/login'
import Router from './routes/index'
import 'ant-design-vue/dist/antd.css';
import './index.scss'
import './assets/scss/common.scss'

createApp(App)
  .use(Router)
  .use(Antd)
  .mount('#app')
