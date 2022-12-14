/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)

registerPlugins(app)

app
  .use(vuetify)
  .mount('#app')
