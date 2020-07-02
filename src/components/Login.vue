<template>
     <b-container id="login">
        <div >
           <img src="../assets/engeniera.jpg" class="rounded-circle mb-10" width="100px" height="100px" > <br>
            <b-label>Username</b-label>
           <b-form-input type="text"></b-form-input> <br>
            <b-label>Password</b-label>
           <b-form-input type="password" class="primary "></b-form-input>
           <b-button class="mt-3" variant="light">ACCEDI</b-button>

         </div>
     </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.min.css'

@Component
export default class Login extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #login {
      background-color: #0F70B7;
      height: 500px;
   }

</style>
