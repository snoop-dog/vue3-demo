import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login'

let router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Login }
	]
})

export default router