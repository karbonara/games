<template>
  <selection class="games">
    <div class="games__breadcrumbs">
      <Breadcrumbs />
    </div>
    <div class="games__wrapper">
      <MenuFilter />
      <FilterCheckBox />
      <div class="games__right">
        <div class="catalog__main-title">
          <h1>Новые онлайн игры на любой вкус</h1>
          <p>212</p>
        </div>
        <FilterIntup />
        <Product />
        <Pagination />
      </div>
    </div>
  </selection>
</template>

<script>
import FilterCheckBox from "@/components/goods/filterCheckBox/FilterCheckBox";
import FilterIntup from "@/components/goods/filterInput/FilterInput";
import Product from "@/components/index/products/Product";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Pagination from "@/components/index/pagination/Pagination";

export default {
  components: {
    FilterCheckBox,
    FilterIntup,
    Product,
    Breadcrumbs,
    Pagination,
  },
};
</script>
<style lang="scss" scoped>
.games__breadcrumbs {
  width: 1080px;
  margin: 0 auto;
}
.games__wrapper {
  width: 1080px;
  margin: 0 auto;
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
}
.games__right {
  width: 760px;
}
.catalog__main-title {
  display: flex;
  align-items: baseline;
  color: #fff;
  padding: 0 0 12px 0;
  & h1 {
    font-size: 22px;
    color: #f5f5f7;
    margin: 0 12px 0 0;
  }
  & p {
    margin: 0;
    margin-left: 10px;
    color: #979797;
    font-size: 18px;
  }
}
@media (max-width: 1207px) {
  .games__wrapper {
    width: 800px;
  }
  .games__right {
    width: 528px;
  }
  .games__breadcrumbs {
    width: 800px;
  }
}
@media (max-width: 1098px) {
  .games__right {
    width: 640px;
  }
}
@media (max-width: 1008px) {
  .games__breadcrumbs {
    width: 100%;
  }
  .games__right {
    width: 100%;
  }
}
@media (max-width: 908px) {
  .games__wrapper {
    width: 90%;
  }
}
@media (max-width: 608px) {
  .catalog__main-title {
    & h1 {
      font-size: 13px;
    }
    & p {
      font-size: 13px;
    }
  }
}
</style>