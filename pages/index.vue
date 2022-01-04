<template>
    <div>
      <nuxt />
    </div>
</template>

<script>
export default {
middleware:['auth'],
  mounted() {
  this.$router.push('/students/addstudent');
  }
}
</script>
