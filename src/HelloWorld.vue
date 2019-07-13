<template>
  <div class="root">
    <p><button @click="clickButton">button-test</button></p>
    <p>{{this.propTest}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted: function () { },
  components:{},
  props: {
    propTest: { type: String, required: false, default: "propは指定されていません。" }
  },
  data: function () {
    return {
    };
  },
  methods: {
    clickButton:function(){
      this.$emit("emit-test");
    }
  },
  watch: {
  }
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.root {
  border:solid 1px black;
  background: white;
}
p{
  margin:0;
}
</style>