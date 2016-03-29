<template>
  <div class="add-project container">
    <form @submit.prevent="addProject">
      <div class="form-group">
        <label for="number">Product Number</label>
        <input v-model="project.number" type="text" class="form-control" id="number" placeholder="Product Number">
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="project.title" type="text" class="form-control" id="title" name="title" placeholder="Title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea v-model="project.content" id="content" name="content" placeholder="content" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
var projectsRef = new Firebase('https://swellfire-daily.firebaseio.com/projects')
import Firebase from 'firebase'

export default {
  data () {
    return {
      project: {
        number: '',
        title: '',
        content: ''
      }
    }
  },
  vuex: {
    getters: {
      projects: state => state.projects
    }
  },
  methods: {
    addProject: function () {
      projectsRef.push({
        number: this.project.number,
        title: this.project.title,
        content: this.project.content
      })
    }
  }
}
</script>
