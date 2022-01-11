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
  background-color: rgba(228, 228, 229, 0.58);
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
}
</style>
