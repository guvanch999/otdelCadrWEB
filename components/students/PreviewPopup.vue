<template>
<div class="popupBack">
  <div class="popupFront">
    <b-container>
      <h2>this is a student information data card</h2>
    </b-container>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.popupBack{

  width: 100%;
  height: 300vh;
  position: absolute;
  background-color: hsla(0, 0%, 0%, 0.1);
  left: 0;
  top: 63px;
  z-index: 1;
}
.popupFront{
  position: absolute;
  top: 5%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
