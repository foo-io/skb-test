<template lang="pug">
main
  h1 Starred Words
  .app-main
    .app-sidebar
      CSearch(
        :filter="true"
        @submit="getLocalWords"
        )
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
import CEmpty from "@/components/CEmpty";
import CLoading from "@/components/CLoading";

export default {
  name: "Favorites",
  components: {CEmpty, CLoading, CWord, CSearch},
  data() {
    return {
      loading: false,
      words: []
    }
  },
  mounted() {
    // first launch? =)
    this.words = this.$api.local.getWords()
  },
  methods: {
    async getLocalWords(value) {
      this.loading = true
      if (value === null) {
        const req = await this.$api.local.getWords()
        this.words = await req
      } else {
        const req = await this.$api.local.searchWord(value)
        this.words = await req
      }
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
