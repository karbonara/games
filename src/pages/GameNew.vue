<template>
  <section class="container">
    <Breadcrumbs />
    <div class="container__wrapper">
      <aside>
        <MenuFilter />
      </aside>
      <div class="catalog__main">
        <div class="catalog__main-title">
          <h1>Новые онлайн игры на любой вкус</h1>
          <p>212</p>
        </div>
        <div>
          <FilterInput />
        </div>
        <RecommendationsItems />
      </div>
    </div>
  </section>
</template>
<script>
import RecommendationsItems from "@/components/ItemsProducts/RecommendationsItems";
import MenuFilter from "@/components/menu-filter/MenuFilter";
import FilterInput from "@/components/menu-filter/FilterInput";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
export default {
  components: { RecommendationsItems, MenuFilter, FilterInput, Breadcrumbs },
};
</script>
<style lang="scss" scoped>
.container {
  width: 90vw;
  margin: 0 auto;
}
.container__wrapper {
  display: flex;
  align-items: stretch;
  padding: 26px 0;
}
aside {
  position: relative;
  z-index: 5;
  float: left;
  margin-bottom: 60px;
  width: 240px;
  background-color: rgba(245, 245, 247, 0.16);
  border-radius: 8px;
}
.catalog__main {
  width: 78%;
  margin: 0 auto;
}
.catalog__main-title {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  & h1 {
    font-size: 22px;
    color: #f5f5f7;
    margin: 0;
  }
  & p {
    margin: 0;
    margin-left: 10px;
    color: #979797;
    font-size: 18px;
  }
}
@media (max-width: 1380px) {
  .catalog__main {
    width: 70%;
  }
}
@media (max-width: 988px) {
  .catalog__main {
    width: 100%;
  }
  aside {
    display: none;
  }
}
</style>
