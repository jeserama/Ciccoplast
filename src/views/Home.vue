<template>
  <div class="Home">
    <Navbar/>
    <Listmachinari/>
    </div>
</template>
<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue';
import Listmachinari from '@/components/Listmachinari.vue';

export default {
  name: 'Home',
  components: {
      
      Navbar,
      Listmachinari,
      
    
  }
}
</script>
