<template lang="pug">
#app
  .app-container
    CHeader
    router-view
</template>

<script>
import CHeader from "@/components/CHeader";
export default {
  components: {CHeader}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-height: 100vh;
  background: #faf4f4;
}
.app-container {
  max-width: 1000px;
  width: 100%;
  padding: 0 16px;
}
main {
  display: flex;
  flex-direction: column;
}
.app-main {
  display: flex;
}
.app-sidebar {
  display: flex;
  width: 30%;
  margin-right: 16px;
}
.app-content {
  display: flex;
  width: calc(70% - 16px);
}
.app-words {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}
</style>
