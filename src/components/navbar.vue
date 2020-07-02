<template>
        <b-row id="navbar" fixed>
            <b-col cols="" class="mt-3">
                <img alt="Cicciooplast Logo " src="../assets/logo_thumbnail.png">
            </b-col>
            <b-col cols="" class="text-center mt-5"> <h1>Home machinari</h1></b-col>
            <b-col cols="">
               
                <p class="h1 mb-2 mt-5">  <router-link class="wraper" :to="{ name: 'Home'}"><b-icon icon="building"></b-icon></router-link></p>
            </b-col>
        </b-row>
</template>

  <script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

@Component
export default class Navbar extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar{
     background-color: #0F70B7;
}

</style>
