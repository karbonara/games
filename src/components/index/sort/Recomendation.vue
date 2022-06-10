<template>
  <div class="recomendation">
    <div class="recomendation__wrapper">
      <div class="recomendation__lists" v-for="item in items" :key="item.title">
        <div>
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "MMORPG" },
        { title: "Шутер" },
        { title: "Казуальные" },
        { title: "MMORPG" },
        { title: "Шутер" },
        { title: "Казуальные" },
      ],
    };
  },
};
</script>
<style lang="scss">
.recomendation {
  margin-bottom: 20px;
}
.recomendation__wrapper {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: scroll;
}
.recomendation__lists {
  & div {
    margin-bottom: 0;
    margin-right: 7px;
    font-size: 14px;
    line-height: 1.4;
    color: #bcbcbc;
    background-color: hsla(0, 0%, 100%, 0.17);
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.27);
    }
  }
}
</style>