<template>
  <div class="filter__container">
    <div class="filter__item">
      <h2>Тип</h2>
      <div class="filter__item-checkbox">
        <label>
          <input class="filter__item-input" type="checkbox" />
          <span class="filter__item-input-checkbox"></span>
          <span>Мини-игры</span>
        </label>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filter__container {
  margin-bottom: 20px;
}

.filter__item {
  padding: 12px 12px 18px;
  & h2 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0.1px;
    color: #f5f5f7;
  }
}
.filter__item-checkbox {
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  & label {
    color: #c3c3c3;
    width: 100%;
    position: relative;
    & span {
      margin-left: 8px;
    }
  }
}
.filter__item-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
}
.filter__item-input-checkbox {
  width: 18px;
  height: 18px;
  position: absolute;
  margin-left: -7px;
  background-color: transparent;
  border-radius: 3px;
  border-color: rgba(245, 245, 247, 0.3);
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 0 0 rgb(0 0 0 / 4%);
}
</style>