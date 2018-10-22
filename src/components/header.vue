<template>
  <div class="block is-paddingless is-marginless">
<!--<section class="hero is-paddingless-horizontal">-->

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


      <router-link to="/" exact class="navbar-item" v-uredi>Početna</router-link>
      <router-link to="/about" exact class="navbar-item " v-uredi>O nama</router-link>
      <router-link to="/items" exact class="navbar-item" v-uredi>Proizvodi</router-link>




      <!-- ******************************************************************
           ******************************************************************
           ******************************************************************
MISLIM DA OVAJ DIO NE TREBA JER MI TAJ DIV SMANJI SIVI HOVER NA KATEGORIJE

<div class="navbar" role="navigation" aria-label="main navigation" >-->
      <div class="navbar-item has-dropdown is-hoverable ">
        <a class="navbar-link " v-uredi>Kategorije</a>

     <div class="navbar-dropdown" v-uredi>



       <div class="column navbar-item "  v-for="item in items_array">
             <a class="navbar-item " >
                  {{item.name}}
              </a>
        </div>

       <!--
          <a class="navbar-item is-dark">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>-->


          <!--<hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>-->
        </div>
      </div>
    <!--</div>-->
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-success is-outlined">
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







<footer>

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
  created(){
  this.$http.get('https://shop-158bc.firebaseio.com/kategorija.json').then(function(data){
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

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.is-paddingless-horizontal{
  padding-left:0;
  padding-right:0;

}

/*
div{
  background-color: #373b42;
  border-radius:0 0 5px 5px;


}
*/
/*
 .router-link-active{
    border: solid black 1px;
    border-radius: 5px;
    padding: 10px 8px;
    background-color: white;
    text-align: center;
}

.router-link-active li{
  color:#373b42;
  text-align: center;
  font-weight: bold;
}*/
/*
ul li{
  list-style-type: none;
  display: inline-block;
  padding: 10px;

  border-radius: 3px;
  font-size: 16px;
  text-align: center;
     position:relative;
     margin: 15px 20px;
     width: 3vw;
     height: 2vh;
     color:white;
     text-decoration: none;
}
ul{
       margin-left:5vw;
}*/

/*
[
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
]*/



</style>
