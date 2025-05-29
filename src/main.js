import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
// import text from './views/HomeView.vue'
import router from './router'

const app = createApp(App)
app.component('nav-bar', NavBar)
// app.use(createPinia())
app.use(router)

app.mount('#app')
