<template lang="pug">
  main
    h1 Search Words
    .app-main
      .app-sidebar
        CSearch(@submit="getWords")
      .app-content
        CLoading(v-if="loading")
        .app-words(v-else)
          CEmpty(v-if="!words.length")
          CWord(
            v-for="word in words"
            :word="word"
            :key="word.word"
          )
</template>

<script>
import CSearch from "@/components/CSearch";
import CWord from "@/components/CWord";
import CLoading from "@/components/CLoading";
import CEmpty from "@/components/CEmpty";
export default {
  name: "Home",
  components: {CEmpty, CLoading, CWord, CSearch},
  data() {
    return {
      loading: false,
      words: []
    }
  },
  methods: {
    async getWords(data) {
      this.loading = true
      const req = await this.$api.words.getWords(data)
      this.words = await req['data']
      this.loading = false
    },
  }
}
</script>

<style scoped lang="scss">

</style>
