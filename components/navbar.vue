<template>
  <div class="navbar">
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background-color: #87CEFA;
  color: #fff;
  padding: 0 20px;
}

.navbar button {
  margin-right: 0;
}

.navbar .title {
  display: flex;
  align-items: center;
}

.navbar .title span {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
</style>