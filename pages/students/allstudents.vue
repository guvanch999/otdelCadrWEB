<template>
  <div>
    <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
      <div v-if="isLoading"  style="text-align: center">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <table v-else class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
    <PreviewPopup/>
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="pageCount"
        :per-page="1"
        v-if="pageCount>1"
        first-number
        last-number
        align="center"
        @change="changePage"
      ></b-pagination>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import PreviewPopup from "~/components/students/PreviewPopup";
export default {
  components:{
    PreviewPopup
  },
  data(){
    return {
      currentPage:1,
      isLoading:true
    }
  },
  computed:{
    ...mapGetters({
      pageCount:'students/getPageCount'
    })
  },
  methods:{
    async changePage(index){
        if(index===0)index=1;
        this.$store.commit('students/setPage',index);
        this.isLoading=true;
        await this.$store.dispatch('students/loadStudentList',{

        })
    }
  }
}
</script>

<style>

</style>
