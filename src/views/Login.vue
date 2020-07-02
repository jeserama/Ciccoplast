<template>
<b-container fluid  id="container">
  <b-row>
  <b-col class="mr-5" >
    <img alt="Cicciooplast Logo " src="../assets/logo.png">
  </b-col>
  
  <b-col class="ml-5">
    <Login/>
  </b-col>
    
    
  </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
