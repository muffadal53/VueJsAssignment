<template>
<div>
  UsersDetails
     FirstName: {{user.FirstName}}
     MiddleName: {{user.MiddleName}}
     LastName: {{user.LastName}}
     FullName: {{user.FullName}}
     Addres: {{user.Address}}
     PhoneNumber: {{user.PhoneNumber}}     
  <button v-on:click="Close">Close</button>  
</div>
</template>

<script>
import Router from 'vue-router'
import userlistservice from '../helpers/userlistservice'
export default {
    name: 'ViewUsers',
    props: ["index"],
    data(){
            return {               
               user: userlistservice.getUsersList()[this.index]             
            }
        },       
    methods: {
      Close : function() {        
         this.$router.push({ name: 'User' })      
      }        
  } 
}
</script>