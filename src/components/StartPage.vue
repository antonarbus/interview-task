<template> 
  <p>My first component in <img src="../assets/logo.svg" alt="vue logo">ue</p>
  <router-link class="btn" to="/task">Go to task</router-link>
</template>

<style lang="scss" scoped>
  $blackish: rgba(0, 0, 0, 0.65);
  $grayish: rgba(0, 0, 0, 0.1);

  img {
    position: relative;
    height: 30px;
    top: 5px;
    left: 2px;
  }

  .btn {
    cursor: pointer;
    color: $blackish;
    border: 1px solid $grayish;
    border-radius: .25rem;
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
