<template>
  <div class="sadrzaj is-paddingless is-marginless" >

    <!--<img src="../assets/vodka.svg" class="image is-512x512"/>-->
  <section class="section">
    <div class="block">
    <div class="container ">
    <div class="button is-pulled-right" @click="open=true"  type="button">Košarica<span v-if="kosarica_popunjena==true" class="item is-pulled-right">

    ({{suma}})

  </span>
<span v-else>(0)</span>
    </div>

    <div v-on:keyup.escape="hideModal" class="container-modal" width="100%">
    <vue-modaltor height="auto" id="aa" :scrollable="true" :visible="open" @hide="hideModal" >
    <section class="section ">

      <app-cart v-bind:kosarica="kosarica">
          <input slot="continue_shopping" type="button" v-on:click="hideModal()" class="button is-info" value="Nastavi kupnju"/>
      </app-cart>

  </section>

    </vue-modaltor>
    </div>





  </div></div></section>
    <!--<section class="hero is-primary">-->
    <section class="hero">

    <div class="block">
      <div class="container">
  <div class="columns is-multiline">

          <!--<div class="column is-half " id="header" v-for="item in podaci" style="border:solid black 1px; margin-bottom:10px;">-->


<div class="column is-one-third-fullhd is-half-tablet"  v-for="item in items_array">
  <!--<div class="card" id="header" style="height:100%;"> 100% mora biti da mi svi card elementi- blokići u kojima je proizvod budu iste visine!!!-->
<div class="card"  style="height:100%;"><!-- 100% mora biti da mi svi card elementi- blokići u kojima je proizvod budu iste visine!!!-->
  <!--<div class="container is-fluid" style="border:solid red 1px;" >-->

<div class="container">

<!--    <div class="row team-images">-->
     <div class="container is-centered is-paddingless is-marginless"><!--ta mi je važna za centriranje-->
                                        <!--ovaj prvi naziv item je mapa u bazi, ova druga item.id je id proizvoda-->
         <router-link v-bind:to="'item/' + item.id">
              <figure class="container" width="60%" height="60%">
                 <img  :src='item.picture' class="picture"  width="60%" height="60%" alt="" />
              </figure>
         </router-link>
                                            <!--OVO DODAM AKO HOĆU TEKST NA SLIKI-NPR NAZIV U DONJEM DIJELU SLIKE   <div class="team-text">{{item.naziv}}</div>-->
                                      <!--<input type="text"  v-model="slova"/>-->
                                          <!--  </div> zatvoren ovo s row..-->
     </div>



    <div class="column">
                <div class="subtitle is-info is-size-6-mobile is-size-5-tablet is-size-5-touch" v-uredi >{{item.name}}</div>
        <div class="columns is-centered">
            <div class="container ">
              <!--<p class="html">{{item.opis |to-skraceno}}</p>-->
                <div class="content has-text-left  is-size-7-mobile is-size-6-tablet is-size-6-touch">{{item.desc |to-skraceno}}</div>
            </div>
        </div>
      </div>
      <div class="content">
          {{item.price}} kn
      </div>


</div>


    <div class="column" style="visibility:hidden">dd</div>


    <div id="sadrzaj" class="container is-centered">
      <div class="button"  v-on:click="addToCart(item)">
        <img class='t' :src='cart' width='15px' height='15px'/>
        <span class="text">Dodaj</span>
    </div>

    <div class="button " @click="open2=true" v-bind:to="'item/' + item.id" v-on:click="item_details(item)" type="button">Detalji</div>
    <!--<div class="button " @click="open2=true" v-bind:to="'item/' + item.id" v-on:click="item_details(item)" type="button">{{item.price}}</div>-->

    <vue-modaltor width="auto" height="auto" :scrollable="true"  :visible="open2" @hide="hideModal" >
    <!--{{item}}-->
    <item-description  v-bind:kosarica2="kosarica2"></item-description>
      <!--<app-cart></app-cart>-->
    </vue-modaltor>
  </div>


</div>
    </div>


   </div>
  </div>
 </div>

<!--<div class="column is-destop has-background-grey">Slovenec Slovenec Slovenec SlovenecSlovenec Slovenec Slovenec Slovenec Slovenec Slovenec </div>-->
<div class="button" v-on:click="post()">Klik</div>
<div class="container">
  <div class="block is-small">

  </div>

</div>

</section>



  </div>
</template>
<script src="/vue-modaltor/dist/vue-modaltor.js"></script>
<script>

import vodka from '../assets/vodka.svg'
import rum from '../assets/rum.svg'
import sensation from '../assets/sensation.jpg'
import pelin from '../assets/pelin.jpg'
import cart_slika from '../assets/cart.png'
import cart from './cart.vue'
import item_description from './item_description.vue'



export default {
  components:{
    'app-cart':cart,
    'item-description':item_description
  },
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
      cart:cart_slika,
      items_array:[],
      kosarica:[],
      kosarica_popunjena:false,
      qty:1,
      suma:0,
      duplicate:[],
      prebroji_u_kosarici:0,
      //kosarica2:[],
      kosarica2:[],
      item:''

    }
  },
methods:{
  hideModal() {
    this.open = false;
    this.open2 = false;
    this.kosarica2=[];

        },
        /*post:function(){
          this.$http.post('https://shop-158bc.firebaseio.com/item.json', {id:6,code:390, name:"Rum", picture:rum,price:'10,00',desc:"Čaj s rumom bez čaja!"}).then(function(data){

          })
        },*/
  post:function(){
    this.$http.post('https://shop-158bc.firebaseio.com/kategorija.json',



       {
           "id": 1,
           "name": "Sportska obuca",
           "code": 1,
           "parent_id": null,
           "created_at": null,
           "updated_at": null,
           "children_recursive": [
               {
                   "id": 2,
                   "name": "Tenisice",
                   "code": 2,
                   "parent_id": 1,
                   "created_at": "2018-10-17 22:00:00",
                   "updated_at": "2018-10-17 22:00:00",
                   "children_recursive": []
               },
               {
                   "id": 3,
                   "name": "Kopačke",
                   "code": 3,
                   "parent_id": 1,
                   "created_at": "2018-10-17 22:00:00",
                   "updated_at": "2018-10-17 22:00:00",
                   "children_recursive": []
               }
           ]
       },
       {
           "id": 4,
           "name": "Sportska odjeća",
           "code": 5,
           "parent_id": null,
           "created_at": "2018-10-17 22:00:00",
           "updated_at": "2018-10-17 22:00:00",
           "children_recursive": []
       }


  ).then(function(data){

    })
  },

  addToCart:function(item){

    this.kosarica.push(item);

    this.kosarica_popunjena=true;

    this.suma++;

  },
  item_details:function(item){
console.log(item)
    this.kosarica2.push(item);


  },
},

created(){

  this.$http.get('https://shop-158bc.firebaseio.com/item.json').then(function(data){
  //  console.log(data);
    return data.json();
  }).then(function(data){
    var itemArray=[];
    for(let key in data){
        //console.log(data[key]);
        data[key].id=key;
        itemArray.push(data[key]);
    }
  //  console.log(blogsArray);
    this.items_array=itemArray;
  });

},
/*OBAVEZNO STAVITI MOUNTED TU, DA MOŽEMO SA ESCAPE IZAČI  IZ MODALNOG OBJEKTA*/
mounted: function () {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      this.open = false;
      this.open2 = false;
      this.submitted = false;
      this.kosarica2 = [];

    }
  });
},
computed:{
  products(){
    return this.$store.state.products
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#header {
    position: relative;
    /*min-height: 150px;*/
    bottom:0;
    display:flex ;
}

#sadrzaj {
  position: absolute;
  bottom: 0;
  padding-bottom:2%;
}

.picture:hover {
    /*transform: scale(1.5) slow; /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    -moz-opacity:0.8;
    -webkit-opacity:0.8;
    opacity:0.8;
    filter: alpha(opacity=80); /* For IE8 and earlier */
    /*-moz-transform: scale(1.001);
    -webkit-transform: scale(1.00001);
    transform: scale(1.001);*/
    cursor:pointer;

}



</style>
