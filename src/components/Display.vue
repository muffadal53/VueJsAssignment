<template>
<div>
  <div v-for="(item, index) in NameList">
    FirstName: {{item.FirstName}}    
    MiddleName: {{item.MiddleName}}
    LastName: {{item.LastName}}
    FullName: {{item.FullName}}
    <button @click="EditUser(index)">Edituser</button>
  </div>  
</div>
</template>

<script>
export default {
    name: 'Display',
    
    methods: {
      EditUser : function(Index) {        
        debugger
          this.$emit('event_edit_view', Index)
      }
    },
    props: {
    NameList: {
      default: []
    }         
  } 
}
</script>




