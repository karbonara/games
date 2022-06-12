<template>
  <!-- <Slider /> -->
  <section class="container">
    <div class="container__wrapper">
      <Selection />
      <div class="container_right">
        <Popular />
        <div class="recommendations">
          <div class="recommendations__wrapper">
            <div class="recommendations__title">
              <h2>Рекомендуемое</h2>
              <RouterLink to="/">Перейти в каталог</RouterLink>
            </div>
          </div>
        </div>
        <Recomendation />
        <Product />
        <div class="recommendations">
          <div class="recommendations__title">
            <h2>Новинки</h2>
            <RouterLink to="/">Перейти в каталог</RouterLink>
          </div>
          <Product />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "@/components/slider/Slider";
import Selection from "@/components/index/sort/Selection";
import Product from "@/components/index/products/Product";
import Recomendation from "@/components/index/sort/Recomendation";
import Popular from "@/components/index/sort/Popular";

export default {
  components: {
    Slider,
    Selection,
    Product,
    Recomendation,
    Popular,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1080px;
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
@media (max-width: 1122px) {
  .container {
    width: 800px;
  }
  .container_right {
    width: 500px;
  }
}
@media (max-width: 980px) {
  .container {
    width: 100%;
  }
}
@media (max-width: 585px) {
  .container_right {
    width: 97%;
  }
}
@media (max-width: 455px) {
  .container_right {
    width: 95%;
  }
}
</style>