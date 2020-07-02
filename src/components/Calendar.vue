<template>
  <div>
    <label>Selezionare la data</label>
    <date-picker v-model="time3" range></date-picker>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default  {
 components: { DatePicker },
    data() {
      return {
        //time1: null,
       // time2: null,
        time3: null,
      };
    },
  
 

}
    

 


</script>