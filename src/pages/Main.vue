<template>
  <section class="container">
    <div class="container__wrapper">
      <Selection />
      <div class="container_right">
        <div class="recommendations">
          <div class="recommendations__wrapper">
            <div class="recommendations__title">
              <h2>Рекомендуемое</h2>
              <a href="/">Перейти в каталог</a>
            </div>
          </div>
        </div>
        <Popular />
        <Recomendation />
        <Product />
      </div>
    </div>
    <ButtonShowMore />
  </section>
</template>

<script>
import Slider from "@/components/Slider/Slider";
import Selection from "@/components/index/sort/Selection";
import Product from "@/components/index/products/Product";
import Recomendation from "@/components/index/sort/Recomendation";
import Popular from "@/components/index/sort/Popular";
import ButtonShowMore from "@/components/Buttons/ButtonShowMore";

export default {
  components: {
    Slider,
    Selection,
    Product,
    Recomendation,
    ButtonShowMore,
    Popular,
  },
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
.container_right {
  width: 73%;
  margin: 0 auto;
}
@media (max-width: 455px) {
  .container_right {
    width: 100%;
  }
}
</style>