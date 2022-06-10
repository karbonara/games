<template>
  <div class="filter__input">
    <div class="filter__input-wrapper">
      <div class="filter__input-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#59595c"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <input type="text" placeholder="Поиск по каталогу" />
      </div>
    </div>
    <FilterSort />
  </div>
</template>

<script>
import FilterSort from "@/components/menu-filter/FilterSort";

export default {
  components: { FilterSort },
};
</script>

<style lang="scss" scoped>
.filter__input {
  background-color: rgba(245, 245, 247, 0.16);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
}
.filter__input-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px 0px;
  font-size: 15px;
  line-height: 32px;
}
.filter__input-search {
  width: 100%;
  position: relative;
  & svg {
    position: absolute;
    top: 8px;
    left: 9px;
    width: 16px;
  }
  & input {
    padding: 11px 10px 12px 35px;
    border: 1px solid #59595c;
    border-radius: 4px;
    font-size: 16px;
    line-height: normal;
    color: #f5f5f7;
    background-color: #3c3c40;
    width: 90%;
    box-sizing: border-box;
    transition: 0.2s;
    &:hover {
      border-color: #59595c;
      background-color: #46464c;
    }
  }
  & svg:hover {
    opacity: 0.7;
  }
}
</style>