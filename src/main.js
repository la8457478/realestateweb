import Vue from 'vue'
import App from './App'
import MuseUI from './components/muse-ui';
import './components/muse-ui/dist/muse-ui.css';
import "./components/vue-material-design-icons/styles.css"
import MenuIcon from "./components/vue-material-design-icons/Menu.vue"

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
Vue.use(MuseUI)
Vue.use(MenuIcon)
const app = new Vue({
    store,
    ...App,
    components: {
        MenuIcon
    }
})
app.$mount()
