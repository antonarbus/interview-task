<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
  $blackish: rgba(0, 0, 0, 0.65);

  main {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    align-items: center;
    /* height: 100vh; */
    margin: auto;
    padding: 3rem 1rem;
    font-size: 1.5rem;
    color: $blackish;
  }
</style>