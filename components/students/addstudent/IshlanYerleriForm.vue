<template>
  <table>
    <thead>
    <th>
      Işlän ýeri
    </th>
    <th>
      Işlän wagty
    </th>
    <th width="160">
      Funksiýalar
    </th>
    </thead>
    <tbody>
    <tr>
      <td>
        <b-textarea type="text" class="inputClasss" placeholder="Işlän ýeri"/>
      </td>
      <td>
        <b-input type="text" class="inputClasss" placeholder="Işlän wagty"/>
      </td>
      <td>
        <div style="text-align: center">
          <b-button variant="success" >Goş</b-button>
          <img src="~/assets/Delete_btn.svg" width="40" height="40">
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {

}
</script>
<style scoped>

table {
  width: 100%;
  padding: 10px;

}

th {
  padding: 10px;
  text-align: center;
  background-color: rgba(2, 2, 2, 0.04);
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

}

td {
  padding: 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
}
</style>
