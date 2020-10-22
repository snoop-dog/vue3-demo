import { ref, reactive,  defineComponent, onBeforeMount } from 'vue';
import { Menu } from 'ant-design-vue';
import { getMenuData } from '/@/apis/index.js'
// import '/@/assets/scss/layout/side-bar.scss';
// import Icon from '@ant-design/icons-vue';

const { SubMenu } = Menu;

export default defineComponent({
  name: 'slide-bar',
  setup () {
    let openKeys = ref(['103'])
    let menuData = ref([])
    const inlineCollapsed = ref(false)
    const rootSubmenuKeys = ref(['102', '103', '104', '105'])

    const onOpenChange = keys => {
      const latestOpenKey = keys.find(key => openKeys.value.indexOf(key) === -1);
      if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        openKeys.value = keys
      } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : [];
      }
    };

    const onSelect = ({item, key, selectedKeys}) => {
      console.log(item)
      console.log(key)
      console.log(selectedKeys)
    }

    const getMenu = () => {
      getMenuData({})
        .then(res => {
          menuData.value = res?.data[0]?.children
        })
        .catch(err => {
          console.log(err)
        })
    }

    onBeforeMount(() => {
      getMenu()
    })

    return {
      openKeys,
      menuData,
      inlineCollapsed,
      rootSubmenuKeys,
      onOpenChange,
      onSelect
    }
  },
  render () {
    return (
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={this.inlineCollapsed}
        defaultSelectedKeys={['103082']}
        openKeys={this.openKeys}
        onOpenChange={this.onOpenChange}
        onSelect={this.onSelect}
        // style={{ width: 200 }}
      >
        {
          this.menuData.map(item => (
            <SubMenu
              key={item.id}
              title={
                <span>
                  <span>{item.name}</span>
                </span>
              }
            >
              {
                item.children.map(it => (
                  <Menu.Item key={item.id}>{it.name}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
    )
  }
})
