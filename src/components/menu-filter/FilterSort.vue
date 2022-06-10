<template>
  <div class="filter__sort">
    <div>Сначала</div>
    <div>
      <select
        class="nativeSelect___1tjVr"
        name="lang-dropdown"
        id="lang-dropdown"
      >
        <option value="-priority" data-test="priority">рекомендуемые</option>
        <option value="-date_launch" data-test="launch_date">
          по дате выхода
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter__sort {
  display: flex;
  align-items: baseline;
  & div:first-child {
    color: #f5f5f7;
    opacity: 0.6;
    margin: 0;
    font-size: 15px;
    line-height: 32px;
  }
  & select {
    border: none;
    background: inherit;
    margin-right: 3px;
    color: #f5f5f7;
    opacity: 0.6;
    outline: none;
    cursor: pointer;
  }
}
</style>
