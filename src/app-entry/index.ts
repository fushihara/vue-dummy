import HelloWorld from "./../index.vue";
const v2 = new HelloWorld({
  propsData: {
    propTest: "vue-cli-service build --target appで、index.tsからpropを指定しています。",
  }
});
v2.$on("emit-test",()=>{
  console.log("emit-test");
  alert("emit-test");
})

v2.$mount("#app");