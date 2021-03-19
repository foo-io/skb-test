<template lang="pug">
main
  h1 Starred Words
  .app-main
    .app-sidebar
      CSearch(
        :filter="true"
        @on-input="searchWord"
      )
    .app-content
      CLoading(v-if="loading")
      .app-words(v-else)
        CEmpty(v-if="!words.length")
        draggable(
          v-model="words"
          group="words"
          @start="drag=true"
          @end="drag=false"
          handle=".app-word__handle"
        )
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
    searchWord(value) {
      if (value !== '') {
        let originalList = this.$api.local.getWords()
        this.words = originalList.filter(elem => {
          let str = elem.word
          return !str.indexOf(value)
        })
      } else {
        this.words = this.$api.local.getWords()
      }
    },
  }
}
</script>

<style scoped lang="scss">

</style>
