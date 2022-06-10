<template>
  <selection class="games">
    <MenuFilter />
    <div class="games__right">
      <FilterIntup />
      <Product />
    </div>
  </selection>
</template>

<script>
import MenuFilter from "@/components/menu-filter/MenuFilter";
import FilterIntup from "@/components/menu-filter/FilterInput";
import Product from "@/components/index/products/Product";

export default {
  components: {
    MenuFilter,
    FilterIntup,
    Product,
  },
};
</script>
<style lang="scss" scoped>
.games {
  width: 90vw;
  margin: 0 auto;
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
}
.games__right {
  width: 960px;
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