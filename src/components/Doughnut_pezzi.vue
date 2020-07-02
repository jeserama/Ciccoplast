
<template>
  <div id="app">
    
        <Doughnut v-if="loaded"  :chartdata="chartdata" :options="options"></Doughnut>
   
   
  </div>
</template>
<script>
    import Doughnut from '../Charts/Doughnut.vue'
    import axios from 'axios';
    export default  {
    
    name: "Details",
    components: {
        Doughnut
        
    },
  data:()=>{
    return {
      chartdata :null,
      options : null,
      loaded : null,
      idmachinario:null
    }

  },
       async created(){
          this.idmachinario = this.$route.params.id;
          this.loaded = false ;
          await axios.get("http://localhost:3000/produzione/"+ this.idmachinario )
          .then((response) => {
             this.loaded= true 

             this.chartdata= {
               labels: ['Buoni', 'Difettosi'],
               datasets: [
                 {
                   label: "on users", 
                    backgroundColor: ["#3498DB","#F5B041" ],
                   data: [response.data.Buoni, response.data.Difettosi]
                 }
                  
               ]
             }
            this.options = {
               
               maintainAspectRatio :false,
               title:{ 
                 display: true ,
                 text:" Contattori Pezzi "
               }
            }

            });
            
     
            
    
      
 }

    };
    
    
</script>

<style scoped>

#PZS{
    position: absolute;
    margin-top: 130px;
    margin-left: 118px;
    color: #c2cfe9;
}

#Dimensioni{
    width: 300px;
    height: 400px;
    margin-left: 25px;
}

span {
  text-align: center;
  font-weight: bold;
  display: block;
}
</style>
