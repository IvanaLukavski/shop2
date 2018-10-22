<template>

  <div class="block is-paddingless is-marginless">
<!--<section class="hero is-paddingless-horizontal">-->


<!--  <transition-group name='alert-in'>-->

<!--</transition-group>-->

<!--<div class="container" style="background-image:url(https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg)">-->
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">



  <div class="navbar-brand">
      <router-link to="/" exact class="navbar-item is-dark" v-uredi >

       <img src="../assets/logo.png" alt="Logo" width="112" height="28">
        </router-link>
     <!--<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
     </div>-->
   </div>


  <div class="navbar-menu">
    <div class="navbar-start">


      <router-link to="/" exact class="navbar-item " v-uredi>Početna</router-link>
      <router-link to="/about" exact class="navbar-item " v-uredi>O nama</router-link>
      <router-link to="/items" exact class="navbar-item" v-uredi>Proizvodi</router-link>




      <!-- ******************************************************************
           ******************************************************************
           ******************************************************************
MISLIM DA OVAJ DIO NE TREBA JER MI TAJ DIV SMANJI SIVI HOVER NA KATEGORIJE

<div class="navbar" role="navigation" aria-label="main navigation" >-->

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link " v-uredi>Kategorije</a>

<div class="navbar-dropdown">



       <div class="navbar-item has-dropdown is-hoverable"  v-for="item in items_array">
              <div class="navbar-item has-dropdown ">
                <!--<a class="navbar-item is-hoverable" ><span class="navbar-link">{{item.name}}</span>-->
                   <a class="navbar-item " ><span class="navbar-link">{{item.name}}</span>
                       <div class="navbar-item">
                          <div class="navbar-item has-dropdown is-hoverable"  v-for="novo in item.children_recursive">
                                {{novo.name}}
                          </div>
                       </div>
                    </a>
              </div>
        </div>

  </div>
      </div>
    <!--</div>-->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-success is-outlined" >
            <span>Sign up</span>
          </a>
          <a class="button is-success is-outlined">
              <span>Login</span>
          </a>
        </div>
      </div>
    </div>


  </div>
</nav>
<!--<transition name='alert-in' >
 <p  v-for="nn in items_array" class="  is-outlined is-large" >Neki naslov.</p>
</transition>-->
<!--  <transition-group name='alert-in'>-->

<!--</transition-group>-->




<footer class="footer_novi">
  <div>
    <p class="content has-text-centered  is-marginless">
      <strong class="content">Copyright 2018</strong>
      <strong class="is-success">Poduzeće bla bla</strong></p>
      <p>
        <a class="link" v-uredi href="https://www.google.com" >www.gugl-gugl.com</a>
      </p>
  </div>
</footer>

</div>
</template>

<script>




export default {
  data () {
    return {
      showModal: false,
      msg: 'Košarica',
      id:'',
      name:'',
      showModal: false,
      open: false,
      open2:false,
      show: false,
      items_array:[],
      items_array2:[],
      kosarica:[],
      kosarica_popunjena:false,
      qty:1,
      suma:0,
      duplicate:[],
      prebroji_u_kosarici:0,
      //kosarica2:[],
      kosarica2:[],
      item:'',
      niz:[1,2,3]

    }
  },
  created(){
  this.$http.get('https://shop-158bc.firebaseio.com/kategorija.json').then(function(data){
    console.log(data);
    return data.json();
  }).then(function(data){
    var itemArray=[];
    var itemArray2=[];
    for(let key in data){
        //console.log(data[key]);
        data[key].id=key;
        itemArray.push(data[key]);
        itemArray2.push(data[key]);
    }
  //  console.log(itemArray);


    this.items_array=itemArray;
  });

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.footer_novi{
  bottom:0;
  margin-bottom:0;
  position:fixed;
  width:100%;

/*  background-color: transparent;*/
}

.is-paddingless-horizontal{
  padding-left:0;
  padding-right:0;

}

.block{
  background-image:url('../assets/cetvrta.jpg');
  background-repeat:no-repeat;
  background-size: cover;
  width:100vw;
  height: 100vh;
}
.navbar{
background-color: transparent;
}
.navbar-item:hover{
  color:#40b782;
}


.alert-in-enter-active{
  animation: bounce-in .5s;
}

.alert-in-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.1);

  }
  60% {
    transform: scale(1.2);

  }
  100% {
    transform: scale(1);
  }
}


</style>
