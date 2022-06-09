<template>
  <div class="recommendations">
    <div class="recommendations__wrapper">
      <div class="recommendations__title">
        <h2>Рекомендуемое</h2>
        <a href="/">Перейти в каталог</a>
      </div>
      <Tags />
      <RecommendationsItems />
      <ButtonShowMore />
    </div>
  </div>
</template>
<script>
import Tags from "@/components/ItemsProducts/Tags";
import RecommendationsItems from "@/components/ItemsProducts/RecommendationsItems";
import ButtonShowMore from "@/components/ItemsProducts/ButtonShowMore";
export default {
  components: { Tags, RecommendationsItems, ButtonShowMore },
};
</script>
<style lang="scss">
.recommendations__wrapper {
  margin: 0 auto;
}

.recommendations__title {
  margin-bottom: 18px;
  padding-right: 0;
  & h2 {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin-bottom: 0;
    margin-right: 16px;
    font-weight: 700;
    color: #ffffff;
  }
  & a {
    position: relative;
    font-size: 15px;
    white-space: nowrap;
    color: #3ac0ff;
    text-decoration: none;
  }
}
@media (max-width: 455px) {
  .recommendations__title {
    & a {
      display: none;
    }
  }
}
</style>