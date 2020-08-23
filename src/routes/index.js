import { createRouter, createWebHistory } from 'vue-router'

let router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import( "../components/login.jsx") },
		{ path: '/middle', component: () => import( "../views/middle.jsx")}
	]
})

export default router