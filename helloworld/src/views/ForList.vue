<template>
  <div>
    <h1>跑一般的陣列資料</h1>
    <ul>
      <li v-for="(item, i) in dogs" :key="item">{{ i }}.{{ item }}</li>
    </ul>
    <h1>傳進一個數值做輸出</h1>
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 要跑迴圈的資料
      dogs: ["Rex", "Rover", "Henrietta", "Alan"],
    };
  },
};
</script>
<style lang="scss">
li {
  display: inline-block;
  width: 150px;
  height: 50px;
  background: #eee;
  margin: 2px;
  line-height: 50px;
}
</style>