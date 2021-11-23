<template>
  <div>
    <b-container class="mt-3 blockClass">
      <h2 class="mb-3 mt-3" style="width: 100%;text-align: center;">Add student</h2>
      <b-input type="number" placeholder="Talyp belgisi"></b-input>
      <br>
      <b-input type="text" placeholder="Atasynyň ady"></b-input>
      <br>
      <b-input type="text" placeholder="Ady"></b-input>
      <br>
      <b-input type="text" placeholder="Familiýasy"></b-input>
      <br>
      <b-input type="text" placeholder="Topar nomeri"></b-input>
      <br>
      <b-row>
       <b-col md="6">
         <b-dropdown id="dropdown-left" text="Kursuny saýlaň" variant="primary" class="m-2" style="width:100%">
           <b-dropdown-item>DÖB</b-dropdown-item>
           <b-dropdown-item>1-nji kurs</b-dropdown-item>
           <b-dropdown-item>2-nji kurs</b-dropdown-item>
         </b-dropdown>
       </b-col>
        <b-col md="6">
          <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="primary"  class="m-2" style="width:100%">
            <b-dropdown-item>Himiva we nanotehnologivalar</b-dropdown-item>
            <b-dropdown-item>Innowasivalaryň ykdysadyýeti</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <br>
    </b-container>
    <b-container class="mt-3 blockClass">


    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.blockClass{
  background-color: hsla(0,0%,0%,0.1);
  border-radius: 10px;
  padding: 10px;
}
</style>
