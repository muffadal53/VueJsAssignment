<template>
<div>  
   <div>
    <p>
    FirstName <input v-model="user.FirstName"/>
    MiddleName <input v-model="user.MiddleName"/>
    LastName <input v-model="user.LastName"/>
    Address <input v-model="user.Address"/>
    PhoneNumber <input v-model="user.PhoneNumber"/>
    </p>
    <p>
   <button v-on:click="Update">UpdateUser</button>
   </p>      
   </div>    
</div> 
</template>

<script>
import userlistservice from '../helpers/userlistservice'
     export default {
        name: 'EditUser',
        props: ["index"],        
        data(){
            return {              
               user: userlistservice.getUsersList()[this.index]         
            }
        },
        methods: {
      Update : function() {
          debugger
          userlistservice.getUsersList()[this.index] = this.user;        
         this.$router.push({ name: 'User'})         
      }
    }, 
    }
</script>