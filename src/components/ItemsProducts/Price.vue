<template>
  <div class="price">
    <span>199Р</span>
  </div>
</template>
<style lang="scss" scoped>
.price {
  position: absolute;
  top: 7px;
  right: 7px;
  background: #ffca4d;
  padding: 4px 13px;
  border-radius: 8px;
  & span {
    font-size: 15px;
    color: #000;
    font-weight: 500;
  }
}
@media (max-width: 455px) {
  .price {
    padding: 3px 9px;
    & span {
      font-size: 14px;
    }
  }
}
</style>