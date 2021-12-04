<template>
<div class="form-container">
  <form action="action_page.php">
    <div class="form-item">
    <label for="fname">お名前</label>
    <input type="text" id="lname" name="lastname" placeholder="姓">
    <input type="text" id="fname" name="firstname" placeholder="名">
    </div>
    

  </form>
</div>

</template>
<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" >
.form-container{
  display: flex;
  width:100;
  background-color: khaki;
  flex-wrap: wrap;
  justify-content: center;

  form{
    display: flex;
    width: 80%;
    flex-direction: column;

    .form-item{
    display: flex;
    padding: 10px;
    background-color: lightcoral;
    label{
      display: inline-flex;
      flex-basis: 20%;
      padding-right:4%;
      @media (max-width:450px) {
        
      }

    }
    input{
      margin-right:1%;
      flex-basis: 40%;
      padding: 5px 10px;
      @media (max-width:450px) {
        padding:5px;
        flex-basis: 20%;
      }
    }
  }


  }
  
  
}

</style>