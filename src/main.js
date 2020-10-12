import { createApp } from 'vue'
import App from './App.vue'
// import Login from './components/login'
import Router from './routes/index'
import 'ant-design-vue/dist/antd.css';
import './index.scss'
import './assets/scss/common.scss'

// const app = createApp(App)
// router.isReady().then(() => app.mount('#app'))
createApp(App).use(Router).mount('#app')
