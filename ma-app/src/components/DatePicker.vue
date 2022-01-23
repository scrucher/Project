<template>
  <div>
     <Datepicker v-model="customDate" ></Datepicker>
  </div>
</template>
 
<script>
import Datepicker from 'vuejs-datepicker';

export default {
    components:{
         "Datepicker":Datepicker
         },
  name: "App",
  data() {
    return {
        customDate: Date.now()
    };
  }
};
</script>