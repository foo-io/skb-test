<template lang="pug">
.app-word
  .app-word__preview
    button(class="app-word__title app-button" @click="showMore = !showMore") {{ word.word }}
    .app-word__part {{ word['tags'][0] | setPart }}
    .app-word__defs {{ (word['defs'] ? word['defs'][0] : 'defs empty') | removePart}}
    button(class="app-word__favorite app-button" :class="{active: isFavorite}" @click="handler") ⭐
  .app-word__full(v-if="showMore")
    section.app-word__section(v-if="word['defs']")
      .app-word__section-title Definitions:
      ul.app-word__examples
        li(class="app-word__examples-item" v-for="def in word['defs']") {{ def }}
    section.app-word__section
      .app-word__section-title Pronunciation:
      ul.app-word__examples
        li.app-word__examples-item {{ word['tags'][1] }}
        li.app-word__examples-item {{ word['tags'][2] }}
</template>

<script>
export default {
  name: "CWord",
  props: {
    word: Object
  },
  data() {
    return {
      showMore: false,
      isFavorite: false
    }
  },
  computed: {
    getLocalWords() {
      return this.$api.local.getWords()
    }
  },
  mounted() {
    if (this.checkin()) {
      this.isFavorite = true
    }
  },
  methods: {
    checkin() {
      return this.getLocalWords.find(elem => elem.word === this.word.word)
    },
    handler() {
      if (this.isFavorite) {
        this.deleteFavorite()
      } else {
        this.addFavorite()
      }
    },
    addFavorite() {
      if (this.checkin()) {
        alert('Word is already on wordlist!')
      } else {
        if (this.$api.local.saveWord(this.word))
          this.isFavorite = true
      }
    },
    deleteFavorite() {
      if (this.$api.local.deleteWord(this.word.word))
        this.isFavorite = false
    }
  },
  filters: {
    setPart(value) {
      let part

      switch (value) {
        case 'n':
          part = 'noun'
              break
        case 'v':
          part = 'verb'
              break
        case 'adj':
          part = 'adjective'
              break
        case 'adv':
          part = 'adverb'
              break
        default:
          part = '-'
      }

      return part
    },
    removePart(value) {
      return value.replace(/^.*\t/, "")
    }
  }
}
</script>

<style scoped lang="scss">
.app-word {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background: #fff;
  border-radius: 4px;
  padding: 16px 24px;

  &__preview {
    display: flex;
  }
  &__full {
    margin-top: 16px;
  }
  &__section {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    font-weight: bold;
    margin-right: 24px;
    white-space: nowrap;
  }
  &__part {
    margin-right: 24px;
    font-style: italic;
  }
  &__defs {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 24px;
  }
  &__favorite {
    margin-left: auto;
    opacity: .3;
    transition: opacity .2s ease-out;

    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
  &__examples {
    margin-bottom: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.app-button {
  border: 0;
  cursor: pointer;
  background: 0;
  padding: 0;
  outline: 0;
}
</style>
