<template>
  <selection class="games">
    <Breadcrumbs />
    <div class="games__wrapper">
      <MenuFilter />
      <div class="games__right">
        <div class="catalog__main-title">
          <h1>Новые онлайн игры на любой вкус</h1>
          <p>212</p>
        </div>
        <FilterIntup />
        <Product />
      </div>
    </div>
  </selection>
</template>

<script>
import MenuFilter from "@/components/menu-filter/MenuFilter";
import FilterIntup from "@/components/menu-filter/FilterInput";
import Product from "@/components/index/products/Product";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default {
  components: {
    MenuFilter,
    FilterIntup,
    Product,
    Breadcrumbs,
  },
};
</script>
<style lang="scss" scoped>
.games {
  width: 90vw;
  margin: 0 auto;
}
.games__wrapper {
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
}
.games__right {
  width: 960px;
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
@media (max-width: 1343px) {
  .games__right {
    width: 900px;
  }
}
@media (max-width: 1282px) {
  .games__right {
    width: 840px;
  }
}
@media (max-width: 1207px) {
  .games__right {
    width: 740px;
  }
}
@media (max-width: 1098px) {
  .games__right {
    width: 640px;
  }
}
@media (max-width: 1008px) {
  .games__right {
    width: 100%;
  }
}
</style>