<template lang="pug">
.app-search
  .app-search__form
    .app-search__form-group
      input(type="text" class="app-input" placeholder="Enter a word..." @keydown.enter="submit" @input="onInput" v-model="word")
      button(class="app-button" @click="submit") 🔎
    .app-search__form-group
      .app-errors
        .app-errors__item(v-for="error in errors") {{ error }}
    .app-search__form-group(v-if="filter === true")
      .app-filter
        i(style="display: flex; margin-bottom: 16px") filter in developing =(
        label(for="adjective" class="app-filter__label")
          input(type="checkbox" id="adjective")
          span(class="app-filter__span") adjective
        label(for="noun" class="app-filter__label")
          input(type="checkbox" id="noun")
          span(class="app-filter__span") noun
</template>

<script>
export default {
  name: "CSearch",
  props: {
    filter: Boolean
  },
  data() {
    return {
      word: '',
      errors: []
    }
  },
  methods: {
    checkin() {
      this.errors = []

      if (this.word.length < 3) {
        this.errors.push('Word length < 3!')
      }

      if (/[0-9]/.test(this.word)) {
        this.errors.push('Word is number!')
      }

      if (this.filter === true) {
        this.errors = [] // its no bug - its feature
      }

      return this.errors.length === 0;
    },
    submit() {
      if (this.checkin()) {
        this.$emit('submit', this.word)
      }
    },
    onInput() {
      this.$emit('on-input', this.word)
    }
  }
}
</script>

<style scoped lang="scss">
.app-search {
  background: #efefef;
  border-radius: 4px;
  display: flex;
  flex: 1;
  padding: 16px;
  min-height: 200px;
  height: fit-content;

  &__form {
    display: flex;
    flex-direction: column;
    flex: 1;

    &-group {
      display: flex;
      position: relative;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.app-input {
  border: 0;
  padding: 16px 24px;
  border-radius: 4px;
  width: 100%;
  outline: 0;
}
.app-button {
  border: 0;
  background: 0;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 16px;
  cursor: pointer;
}
.app-filter {
  &__label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__span {
    margin-left: 16px;
  }
}
.app-errors {
  display: flex;
  flex-direction: column;
  &__item {
    display: flex;
    margin-bottom: 8px;
    font-size: 14px;
    color: red;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
