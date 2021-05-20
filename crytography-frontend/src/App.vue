<template>
  <div id="app" style="padding:5% 9%; box-sizing: border-box">
    <router-view/>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
}
</style>
