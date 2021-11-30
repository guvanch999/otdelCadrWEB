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
          <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="primary" class="m-2" style="width:100%">
            <b-dropdown-item>Himiva we nanotehnologivalar</b-dropdown-item>
            <b-dropdown-item>Innowasivalaryň ykdysadyýeti</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-form-file browse-text="Choose Photo" placeholder="Choose photo..." accept="image/jpeg, image/png, image/gif"/>
      <br>
    </b-container>
    <b-container class="mt-3 mb-3 blockClass">
      <h2 class="mb-3 mt-3" style="width: 100%; text-align: center">Third part details!</h2>
      <b-input type="text" placeholder="Yasayan yeri:"></b-input>
      <br>
      <h6>Doglan senesi:</h6>
      <b-calendar block locale="en-EN"></b-calendar>
      <br>
      <b-input type="text" placeholder="Doglan yeri:"></b-input>
      <br>
      <b-input type="text" placeholder="Milleti:"></b-input>
      <br>
      <b-input type="text" placeholder="Tamamlan mekdebi:"></b-input>
      <br>
      <b-input type="text" placeholder="Yasayan yeri:"></b-input>
      <br>
    </b-container>
    <b-container class="mt-3 mb-3 blockClass">
     <h6 v-for="welayat in welayatlar" :key="welayat.id">{{welayat.name}}</h6>
      <br>
    </b-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions({
      loadWelayatlar: 'weleyatlarstore/loadWelayatlar'
    }),
  },
  computed: {
    ...mapGetters({
      welayatlar: 'weleyatlarstore/getWelayatlar'
    })
  },
  async mounted() {
    if(this.welayatlar.length===0){
      await this.loadWelayatlar();
      console.log('here');
    }
  }
}
</script>

<style>
.blockClass {
  background-color: hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  padding: 10px;
}
</style>
