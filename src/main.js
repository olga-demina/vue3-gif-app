import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass)
library.add(faLink)
library.add(faWhatsapp)

import './assets/main.css'

createApp(App).
component('font-awesome-icon', FontAwesomeIcon).
mount('#app')
