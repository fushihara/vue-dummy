import HelloWorld from "./HelloWorld.vue";
const v2 = new HelloWorld({
  propsData: {
    propTest: "vue-cli-service build --target appで、index.tsからpropを指定しています。",
  }
});
v2.$mount("#app");