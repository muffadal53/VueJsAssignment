<template>
<div>
  <div v-for="(item, index) in NameList">
     FullName: {{item.FullName}}
     Addres: {{item.Addres}}
     PhoneNumber: {{item.PhoneNumber}}
    <button @click="EditUser(index)">Edituser</button>
    <button @click="ViewUsers()">ViewUsers</button>
  </div>  
</div>
</template>

<script>
import Router from 'vue-router'
export default {
    name: 'Display',    
    methods: {
      EditUser : function(Index) {        
         this.$router.push({ name: 'EditUser', params: { user: this.NameList[Index] }})         
      },
      ViewUsers : function() {        
         this.$router.push({ name: 'ViewUser', params: { user: this.NameList[index] }})         
      }
    },
    props: {
    NameList: {
      default: []
    }         
  } 
}
</script>




