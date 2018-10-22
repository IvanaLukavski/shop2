import home from './components/home.vue'
import items from './components/items.vue'
import item_description from './components/item_description.vue'
import cart from './components/cart.vue'
import about from './components/about.vue'

export default[
  {path:'/', component:home},
  {path:'/items', component:items},
  {path:'/about', component:about},
  {path:'/cart', component:cart},
  {path:'/item/:id', component:item_description}

]
