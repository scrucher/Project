<template>
<div id="navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="create">Create Company</a>
      </li>
    </ul>
  </div>
</nav>  
</div>

</template>

<style scoped>
  #navbar{
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: transparent;
  }
</style>

<script>
export default({
    name: "App",
    data() {
        return {};
    },
})
</script>
