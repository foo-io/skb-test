<template lang="pug">
header.app-header
  router-link(class="app-link" to="/") Word Keeper
  router-link(class="app-link" to="/favorites") ⭐ Starred Words
</template>

<script>
export default {
  name: "CHeader",
}
</script>

<style scoped lang="scss">
header {
  background: #6dc0fa;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 24px 32px;
  margin-top: 16px;
}
.app-link {
  font-weight: bolder;
  font-size: 24px;
  color: #fff;
  text-decoration: none;
}
</style>
