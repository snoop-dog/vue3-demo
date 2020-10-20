import { ref, defineComponent } from 'vue';
import { Tabs, Row } from 'ant-design-vue';
import '/@/assets/scss/layout/tag-view.scss'

const { TabPane } = Tabs;

export default defineComponent({
  name: 'tag-view',
  setup () {
    const panes = ref([
      { title: 'Tab 1', key: '1' , closable: false },
      { title: 'Tab 2', key: '2' , closable: true},
      { title: 'Tab 3', key: '3' , closable: true},
    ])
    
    let activeKey = ref(panes.value[0].key)

    const onChange = currentKey => {
      activeKey.value = currentKey
    };

    return {
      panes,
      activeKey,
      onChange
    }
  },
  render () {
    return (
      <Row class='tag-container'>
        <Row class='fold-box' />
        <Tabs
          // type="editable-card"
          onChange={this.onChange}
          activeKey={this.activeKey}
          size='large'
          centered='false'
        >
          {this.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              {/* {pane.content} */}
            </TabPane>
          ))}
        </Tabs>
        <Row class='tool-box' />
      </Row>
    )
  }
})