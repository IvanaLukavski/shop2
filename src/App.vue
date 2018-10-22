<template>
  <div id="app">

<!--<app-header>  </app-header>-->
<router-view></router-view>
<!--<app-footer></app-footer>-->


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import header from './components/header.vue'
import header_home from './components/header_home.vue'
import footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
      'app-header':header,
      'app-footer':footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.sadrzaj{
  height:100vw;

}

.is-paddingless-horizontal{
  padding-left:0;
  padding-right:0;

}
</style>
