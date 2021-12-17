<template>
  <div class="mainclassfordefoult">
    <nuxt />
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
  min-height: 100vh;
  background-color: rgba(228, 228, 229, 0.58);
}
</style>
