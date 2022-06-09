<template>
  <div class="sort__block">
    <h3>Подборки игр</h3>
    <sort-items />
  </div>
</template>
<script>
import SortItems from "@/components/ItemsProducts/SortItems";
export default {
  components: { SortItems },
  data() {
    return {
      items: [
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
      ],
    };
  },
};
</script>
<style lang="scss">
.sort__block {
  margin-bottom: 20px;
  & h3 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0.1px;
    color: #f5f5f7;
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.75;
    & li {
      position: relative;
      padding-left: 30px;
      & a {
        color: #16a7ff;
        text-decoration: none;
        &:hover {
          color: #72bef4;
        }
      }
      & svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        background: no-repeat;
        background-size: 100%;
      }
    }
  }
}
</style>