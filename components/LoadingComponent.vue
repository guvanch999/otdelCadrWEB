<template>
  <div class="parentHovew">
    <div class="howeredClass">
      <div style="text-align: center">
        <b-spinner variant="primary" style="margin-top: 20px;margin-bottom: 20px"></b-spinner>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style>
.parentHovew{
  background-color: hsla(0,0%,0%,0.1);
  position: fixed;
  width: 100%;
  height: 100vh;
  top:0;
  right:0;

}
.howeredClass{
  position: absolute;
  top: 50%;
  left:50%;

  transform: translate(-50%,-50%);
  border-radius: 10px;
  background-color: #FFFFFF;
  width:400px;
}
</style>
