import { createRouter, createWebHistory } from 'vue-router'

let router = createRouter({
	history: createWebHistory(),
	routes: [
		{ 
			path: '/', 
			name: 'Login',
			component: () => import( "../components/login.jsx") 
		},
		{ 
			path: '/layout', 
			name: 'Layout',
			component: () => import( "../views/layout/app-main.vue"),
			redirect: '/middle',
			children: [
				{ 
					path: '/middle', 
					name: 'Middle',
					component: () => import( "../views/middle.jsx")
				}
			]
		},
	]
})

export default router