<template>
  <div class=" is-paddingless is-marginless">
    <app-header-home> </app-header-home>
    <router-view></router-view>

  </div>
</template>

<script>

import header_home from './header_home.vue'
import footer from './footer.vue'




export default {
  components: {
      'app-header-home':header_home,
      'app-footer':footer
  },
  data () {
    return {
      msg: 'Početna',

    }
  }
}
</script>


<style scoped>


.column {
  display: flex;
}
.card{
  width: 100%;
  display: flex;
}

</style>
