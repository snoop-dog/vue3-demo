import { ref, defineComponent } from 'vue';
import { doLogin } from '../apis/index';
import '../assets/scss/login.scss';
import { useRouter } from 'vue-router';
import { Button, Input, message } from 'ant-design-vue';

export default defineComponent({
  name: 'Login',
  setup(props, ctx) {
    let userNmae = ref('admin');
    let passWord = ref('123');
    const router = useRouter();

    // 重写v-model
    const input = (e) => {
      if (e.target.type === 'password') {
        passWord.value = e.target.value;
      } else {
        userNmae.value = e.target.value;
      }
    };

    // 点击登录
    const submitLogin = () => {
      const params = {
        username: userNmae.value,
        password: passWord.value,
      };

      if (!validLoginParam()) return;

      doLogin(params).then((data) => {
        router.push('/layout');
      });
    };

    // 验证登录参数
    function validLoginParam() {
      if (!userNmae.value || !passWord.value) {
        return message.error('请输入用户名，密码！');
      } else {
        return true;
      }
    }

    return {
      userNmae,
      passWord,
      input,
      submitLogin,
    };
  },

  render() {
    return (
      <div className="login-container">
        <div className="login-main">
          <div className="login-title">
            <span className="jump-item" style="--i:1">
              欢
            </span>
            <span className="jump-item" style="--i:2">
              迎
            </span>
            <span className="jump-item" style="--i:3">
              访
            </span>
            <span className="jump-item" style="--i:4">
              问
            </span>
          </div>

          <div className="login-box">
            <div className="login-box-ctx">
              <div className="login-input-item">
                {/* <span className='input-item-label'>账号：</span> */}
                <Input
                  class="input-item-value"
                  placeholder="账号"
                  type="text"
                  value={this.userNmae}
                  onInput={this.input}
                />
              </div>
              <div className="login-input-item">
                {/* <span className='input-item-label'>密码：</span> */}
                <Input
                  class="input-item-value"
                  placeholder="密码"
                  type="password"
                  value={this.passWord}
                  onInput={this.input}
                />
              </div>
            </div>
          </div>

          <div className="login-footer">
            <Button type="primary" class="login-btn" onClick={this.submitLogin}>
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
