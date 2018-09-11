import sadrzaj from './components/sadrzaj.vue'

import unos from './components/unos.vue'
import neke from './components/neke.vue'
import singleblogs from './components/singleblogs.vue'
import opis from './components/opis.vue'




export default[
  {path:'/', component:sadrzaj},
  {path:'/unos', component:unos},
  {path:'/opis', component:opis},
  {path:'/neke', component:neke},
  {path:'/posts/:id', component:singleblogs}
]
