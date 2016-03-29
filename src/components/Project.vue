<template>
<div>
  <div class="project container" v-if="project">
    <h1>{{ project.title }}</h1>
    <h5>{{ project.number }}</h5>
    <p>{{ project.content }}</p>
  </div>
</div>
</template>

<script>
export default {
  vuex: {
    getters: {
      project: state => state.project
    }
  }
}
</script>
