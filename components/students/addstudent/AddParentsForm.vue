<template>
  <div>
    <table>
      <thead>
      <th style="width:200px">
        Garyndaşlyk derejesi
      </th>
      <th>
        Ady Familiýasy
      </th>
      <th style="width:200px">
        Doglan güni
      </th>
      <th style="width:160px">
        Kaziýete çekilenmi?
      </th>
      </thead>
      <tbody>
      <tr>
        <td>
          <b-dropdown class="inputClasss" text="Garyndaşlyk derejesini saýlaň" variant="light">
            <b-dropdown-item>Ejesi</b-dropdown-item>
          </b-dropdown>
        </td>
        <td>
          <b-input type="text" class="inputClasss"/>
        </td>
        <td>
          <b-input type="date" class="inputClasss"/>
        </td>
        <td>
          <b-dropdown class="inputClasss" style="width: 90%" variant="light">
            <b-dropdown-item selected="true">Ýok</b-dropdown-item>
          </b-dropdown>
        </td>
      </tr>

      </tbody>
    </table>
    <hr>
    <table>
      <thead>
      <th>
        Doglan ýeri
      </th>
      <th>
        Işleýän ýeri
      </th>
      <th>
        Ýaşaýan ýeri
      </th>
      </thead>
      <tbody>
      <tr>
        <td>
          <b-form-textarea type="text"/>
        </td>
        <td>
          <b-form-textarea type="text"/>
        </td>
        <td>
          <b-form-textarea type="text"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {}
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
