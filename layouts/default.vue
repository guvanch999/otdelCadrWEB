<template>
  <div class="mainclassfordefoult">
    <b-row>
      <b-col md="auto">
          <Sidebar />
      </b-col>
      <b-col>
        <Header />
        <nuxt />
      </b-col>

    </b-row>


  </div>

</template>

<script>
import Sidebar from "~/components/Sidebar";
import Header from "~/components/Header";
export default {
  components:{
    Sidebar,
    Header
  }
}
</script>

<style>
.mainclassfordefoult{
  margin: 0;
  padding: 0;
  background-color: rgba(228, 228, 229, 0.58);
}
</style>
