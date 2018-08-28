<template lang="html">
  <v-flex ref="item" class="card" @click="onClickCard($event)"></v-flex>
</template>

<script>
export default {
  props: {
    card: Object,
    mainColor: String
  },
  data() {
    return {};
  },
  methods: {
    setCardBg(color) {
      this.$refs.item.style.backgroundColor = color;
    },
    onClickCard(e) {
      this.setCardBg(this.card.bc);
      this.$emit('clickItem', e.target);
    }
  },
  mounted() {
    this.setCardBg(this.mainColor);
  }
};
</script>

<style lang="css">
.card{
  position: absolute;
  top:5px;
  bottom:5px;
  left:5px;
  right:5px;

}
</style>
