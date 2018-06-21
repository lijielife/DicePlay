import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
		navigationBarTitleText: '摇骰子辅助工具',
		// navigationBarBackgroundColor: '#d3ffd0'
  }
}