<template>
<div>  
   <div>
   FirstName <input v-model="FirstName" placeholder="FirstName"/>
   MiddleName <input v-model="MiddleName" placeholder="MiddleName"/>
   LastName <input v-model="LastName" placeholder="LastName"/> 
   <button v-on:click="AddUser">AddUser</button>      
   </div>      
   <display :name-list="NameList" v-on:event_edit_view="editUser"></display>    
</div> 
</template>

<script>
import Display from './Display.vue'
     export default {
        name: 'User',
        components: {
            Display
        },
        data(){
            return {
               FirstName: '',
               MiddleName:'',
               LastName:'',
               NameList: []
            }
        },                 
        methods: {
        AddUser: function () {
        this.NameList.push({'FirstName' : this.FirstName,'MiddleName': this.MiddleName, 'LastName':this.LastName, 'FullName': this.FirstName + this.MiddleName + this.LastName})        
         },
         editUser: function(index)
         {     debugger   
             this.FirstName =  this.NameList[index].FirstName,
             this.MiddleName = this.NameList[index].MiddleName,
             this.LastName = this.NameList[index].LastName             
         }
      }      
    }
</script>