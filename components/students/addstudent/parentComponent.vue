<template>
  <div class="addedParentClass">
    <table>
      <thead>
      <th style="width:200px">
        Garyndaşlyk derejesi
      </th>
      <th>
        Ady
      </th>
      <th>
        Familiýasy
      </th>
      <th>
        Atasynyň ady
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
          {{parentStatus.find(x=>x.id===parent.parentstatusID)['name']}}
        </td>
        <td>
          {{parent.name}}
        </td>
        <td>
          {{parent.surname}}
        </td>
        <td>
          {{parent.fatherName}}
        </td>
        <td>
          {{parent.birthYear}}
        </td>
        <td>
          {{parent.sudimost}}
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
          {{parent.birthPlace}}
        </td>
        <td>
          {{parent.workingPlace}}
        </td>
        <td>
          {{parent.yashayanYeri}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  props:['parent'],
  computed:{
    ...mapGetters({
      parentStatus:'parents/getParentStatus'
    }),
  }
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
  min-width: 200px;
}
.addedParentClass{
  margin-top:10px;
  margin-bottom: 20px;
  border: 4px solid #0762C8;
}
</style>
