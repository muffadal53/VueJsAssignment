<template>
<div>  
   <div>
    <p>
   FirstName:  <input v-model="FirstName" placeholder="FirstName"/></p>
   <p>MiddleName:   <input v-model="MiddleName" placeholder="MiddleName"/></p>
   <p>LastName:  <input v-model="LastName" placeholder="LastName"/></p>
   <p>Address:  <input v-model="Address" placeholder="Address"/></p>
   <p>PhoneNumber: <input v-model.number="PhoneNumber" placeholder="PhoneNumber"/></p>
   <p><button v-on:click="AddUser">AddUser</button></p>

   <div v-for="(item, index) in UserList">
     <p>
     FullName: {{item.FirstName + item.MiddleName + item.LastName}}
     Addres: {{item.Address}}
     PhoneNumber: {{item.PhoneNumber}}
    <button @click="EditUser(index)">Edituser</button>     
    <button @click="ViewUser(index)">ViewUsers</button>
    </p>
  </div>  
   </div>  
</div> 
</template>

<script>
import userlistservice from '../helpers/userlistservice'
     export default {
        name: 'User',
        props: ["updateduser"],    
        data(){
            return {
               FirstName: '',
               MiddleName:'',
               LastName:'',
               Address:'',
               PhoneNumber:'',
               UserList: userlistservice.getUsersList()               
            }
        },                 
        methods: {
        AddUser: function () {        
        userlistservice.getUsersList().push({'FirstName' : this.FirstName,'MiddleName': this.MiddleName, 'LastName':this.LastName, 'Address': this.Address, 'PhoneNumber': this.PhoneNumber})        
         },
          EditUser : function(Index) {        
         this.$router.push({ name: 'EditUser', params: {index: Index}})         
      },
      ViewUser : function(Index) {        
         this.$router.push({ name: 'ViewUser', params: {index: Index}})         
      }         
      }      
    }
</script>