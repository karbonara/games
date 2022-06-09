<template>
  <section class="container">
    <div class="container__wrapper">
      <aside>
        <Sort />
        <Sort />
        <Sort />
      </aside>
      <div class="container_right">
        <PopularCategories />
        <Recommendations />
      </div>
    </div>
    <Description />
  </section>
</template>
<script>
import Sort from "@/components/ItemsProducts/Sort";
import PopularCategories from "@/components/ItemsProducts/PopularCategories";
import Recommendations from "@/components/ItemsProducts/Recommendations";
import Description from "@/components/ItemsProducts/Description";
export default {
  components: { Sort, PopularCategories, Recommendations, Description },
};
</script>
<style lang="scss">
.container {
  width: 90vw;
  margin: 0 auto;
}
.container__wrapper {
  display: flex;
  align-items: stretch;
  padding: 26px 0;
}
.container_right {
  width: 73%;
  margin: 0 auto;
}
aside {
  position: relative;
  z-index: 5;
  float: left;
  margin-bottom: 60px;
  width: 240px;
}
@media (max-width: 690px) {
  .container_right {
    width: 100%;
  }
  aside {
    display: none;
  }
}
</style>