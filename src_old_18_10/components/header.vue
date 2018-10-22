<template>
  <div class="block ">
<!--<section class="hero is-paddingless-horizontal">-->


<!--<div class="container" style="background-image:url(https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg)">-->
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <!--<div class="navbar-brand">
    <router-link to="/" exact class="navbar-item " v-uredi >
  <div class="navbar-image">
  <figure class="image logo">
    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
  </figure>
  </div>
    </router-link>
  </div>-->


  <div class="navbar-brand">
      <router-link to="/" exact class="navbar-item " v-uredi >

       <img src="../assets/logo.png" alt="Logo" width="112" height="28">
        </router-link>
     <!--<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
     </div>-->
   </div>


  <div class="navbar-menu">
    <div class="navbar-start">


      <router-link to="/" exact class="navbar-item" v-uredi>Početna</router-link>
      <router-link to="/items" exact class="navbar-item" v-uredi>Proizvodi</router-link>




<div class="navbar is-dark" role="navigation" aria-label="main navigation" >
      <div class="navbar-item has-dropdown is-hoverable is-dark">
        <a class="navbar-link is-dark" v-uredi>Kategorije</a>

     <div class="navbar-dropdown " v-uredi>
          <a class="navbar-item is-dark">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>


          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-outlined">
            <strong>Sign up</strong>
          </a>
          <a class="button is-info is-outlined">
              <strong>Login</strong>
          </a>
        </div>
      </div>
    </div>


  </div>
</nav>










<!--


    <nav class="navbar is-dark">
          <div class="container is-fluid" >
            <div class="navbar-brand" >

  <router-link to="/" exact class="navbar-item " v-uredi >
<div class="navbar-image">
<figure class="image logo">
  <img src="https://timedotcom.files.wordpress.com/2015/07/earth-blue-marble-2002.jpg"/>
</figure>
</div>
  </router-link>


            </div>
            <div id="navMenu" class="navbar-menu">
              <div class="navbar-end">

                <router-link to="/" exact class="navbar-item" v-uredi>Početna</router-link>
                <router-link to="/items" exact class="navbar-item" v-uredi>Proizvodi</router-link>

              </div>
            </div>
          </div>
    </nav>-->

<!--</section>-->

<div class="gg" style="border-bottom:1px solid black"></div>

</div>
</template>

<script>
export default {

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
