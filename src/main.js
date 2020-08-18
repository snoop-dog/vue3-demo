import { createApp } from 'vue'
import App from './App.vue'
// import Login from './components/login'
import Router from './routes/index'
import './index.scss'

createApp(App).use(Router).mount('#app')
