<template>
  <div>
    <table>
      <thead>
      <th>
        Işlän ýeri
      </th>
      <th>
        Işlän wagty
      </th>
      <th style="width:160px">
        Funksiýalar
      </th>
      </thead>
      <tbody>
      <tr v-for="place in workedPlaces" :key="place.id">
        <td>
          {{ place.yeri }}
        </td>
        <td>
          {{ place.wagt }}
        </td>
        <td>
          <img src="~/assets/Delete_btn.svg" width="40" height="40" @click="deletePlace(place.id)">
        </td>
      </tr>
      <tr>
        <td>
          <b-textarea type="text" v-model="ishlanYer.yeri" class="inputClasss" placeholder="Işlän ýeri"/>
        </td>
        <td>
          <b-input type="text" v-model="ishlanYer.wagt" class="inputClasss" placeholder="Işlän wagty"/>
        </td>
        <td>
          <div style="text-align: center">
            <b-button variant="success" @click="createWorkPlace">Goş</b-button>
            <img src="~/assets/Delete_btn.svg" width="40" height="40" @click="clearData">
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div style="text-align: center;margin-top: 10px">
      <b-button variant="primary" @click="$emit('changeStep','step2',{update:false})">Yza</b-button>
      <b-button variant="primary" @click="nextStep">Indiki</b-button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      ishlanYer: {
        wagt: "",
        yeri: "",
        studentID: 0
      }
    }
  },
  methods: {
    ...mapActions(
      {
        addWoredPlace: 'students/addWorkPlase',
        removePlace: 'students/deleteWorkPlace'
      }
    ),
    async deletePlace(index) {
      //birini ochurdmeli how sapar aytdy
      this.$emit('changeIsLoading', true);
      let success = await this.removePlace(index);
      if (success) {
        this.$emit('changeIsLoading', false);
      } else {
        this.$emit('changeIsLoading', false);
        alert("BIr zat nadogry");
      }
    },
    clearData() {
      this.ishlanYer.yeri = "";
      this.ishlanYer.wagt = "";
    },
    async createWorkPlace() {
      this.$emit('changeIsLoading', true);
      this.ishlanYer.studentID = this.currentId;
      let success = await this.addWoredPlace(this.ishlanYer);
      if (success) {
        this.$emit('changeIsLoading', false);
        this.clearData();
      } else {
        this.$emit('changeIsLoading', false);
        alert("BIr zat nadogry");
      }
    },
    nextStep() {
      console.log("emitted");
      this.$emit('changeStep', 'step4');
    }
  },
  computed: {
    ...mapGetters({
      currentId: 'students/getCurrentId',
      workedPlaces: 'students/getWorkedPlaces'
    }),
  },
  async mounted() {
    await this.$store.dispatch('students/loadWorkPlaces',localStorage['id']);
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
}
</style>
