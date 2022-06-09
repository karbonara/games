<template>
  <div class="breadcrumbs">
    <ul>
      <li>
        <BreadcrumbsItem link="/qwerty">STEAM GAME</BreadcrumbsItem>
      </li>
      <li>
        <BreadcrumbsItem link="/test">Популярные игры</BreadcrumbsItem>
      </li>
    </ul>
  </div>
</template>
<script>
import BreadcrumbsItem from "@/components/Breadcrumbs/BreadcrumbsItem";
export default {
  components: { BreadcrumbsItem },
};
</script>
<style lang="scss" scoped>
.breadcrumbs {
  & ul {
    display: flex;
    padding: 12px 0 0 0;
    margin: 0;
    list-style: none;
  }
}
</style>