<template>
  <router-link class="btn" to="/">Go back</router-link>
</template>

<style lang="scss" scoped>
  $blackish: rgba(0, 0, 0, 0.65);
  $grayish: rgba(0, 0, 0, 0.1);

  .btn {
    cursor: pointer;
    color: $blackish;
    border: 1px solid $grayish;
    border-radius: 0.25rem;
    box-shadow: $grayish 0 1px 1px 0;
    font-family: system-ui;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    text-decoration: none;
    transition: all 200ms;
    user-select: none;
    &:hover,
    &:focus {
      box-shadow: $grayish 0 4px 12px;
    }
    &:active {
      background: $grayish;
    }
  }
</style>
