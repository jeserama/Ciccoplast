/* eslint-disable no-undef */
<template>
  <div id="app">
    
        <Bar v-if="loaded"  :chartdata="chartdata" :options="options"></Bar>
    
  </div>
</template>
<script>
    import Bar from '../Charts/Bar.vue'
    import axios from 'axios';
    export default  {
    
    name: "Details",
    components: {
        Bar
        
    },
  data:()=>{
    return {
      chartdata :null,
      options : null,
      loaded : null,
      idmachinario:null,
      totale:[],
      sum :null
    }

  },
       async created(){
          await axios.get("http://localhost:3000/produzione/ ")
          .then((response) => {
            
            //Push into array totale all pezzi Buoni 
            response.data.forEach(element => {
               this.totale.push(element.Buoni);
            });
            // Function that make the sum of pezzi buoni in totale
             this.sum = this.totale.reduce(function(a, b){
                     return a + b;
                }, 0);
        console.log(" this is the total "  ,this.sum)
            
                //Get request to have the daily production target 
              axios.get("http://localhost:3000/targets").then((res)=>{
                  console.log()
                  this.loaded= true 
                  this.chartdata= {
               labels: ['Totale pezzi fate', 'Target Giornaliero'],
               datasets: [
                 {
                   label: "Tatale pezzi attualmente fate", 
                    backgroundColor: ["#F5B041","#3498DB"],
                    data: [this.sum, res.data.target]
                 }  
               ]
             }
            this.options = {
               
               maintainAspectRatio :false,
               title:{ 
                 display: true ,
                 text:" Target giornaliero"
               }
            }

              });
             

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
    height: 300px;
    margin-left: 25px;
}

span {
  text-align: center;
  font-weight: bold;
  display: block;
}
</style>
