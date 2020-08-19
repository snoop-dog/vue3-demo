import { ref, defineComponent } from "vue"
import http from '../middleware/index'
import '../assets/scss/login.scss'

export default defineComponent({
	setup(props, ctx) {
		let userNmae = ref('admin')
		let passWord = ref('123')

		// 重写v-model
		let input = (e) => {
			if (e.target.type === 'password') {
				passWord.value = e.target.value
			} else {
				userNmae.value = e.target.value
			}
		}

		// 点击登录
		let submitLogin = () => {
			let params = {
				username: userNmae.value,
				password: passWord.value
			}
			if (!validLoginParam()) return

			http('post', '/api/login').then(data => {
				console.log(data)
			})
			console.log(userNmae)
			console.log(passWord)
		}

		// 验证登录参数
		function validLoginParam () {
			if (!userNmae.value || !passWord.value) {
				return false
			} else {
				return true
			}
		}

		return {
			userNmae,
			passWord,
			input,
			submitLogin
		}
	},

	render() {
		return (
			<div className='login-container'>
				<div className='login-main'>
					<div className='login-title'>
						<span className='jump-item' style='--i:1'>欢</span>
						<span className='jump-item' style='--i:2'>迎</span>
						<span className='jump-item' style='--i:3'>访</span>
						<span className='jump-item' style='--i:4'>问</span>
					</div>

					<div className='login-box'>
						<div className='login-box-ctx'>
							<div className='login-input-item'>
								<span className='input-item-label'>账号：</span>
								<input className='input-item-value' placeholder='请输入账号' type='text' value={this.userNmae} onInput={this.input} />
							</div>
							<div className='login-input-item'>
								<span className='input-item-label'>密码：</span>
								<input className='input-item-value' placeholder='请输入密码' type='password' value={this.passWord} onInput={this.input} />
							</div>
						</div>
					</div>

					<div className='login-footer'>
						<button className='login-btn' onClick={this.submitLogin}>登录</button>
					</div>
				</div>
			</div>
		)
	}
})