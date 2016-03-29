<template>
  <div class="add-project container">
    <form @submit.prevent="updateProject(project.key)">
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
      <button type="submit" class="btn btn-default btn-success">Submit</button> <i class="glyphicon glyphicon-ok" v-show="updated" transition="fade"></i>
    </form>
    {{ error }}
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data () {
    return {
      project: {
        title: '',
        number: '',
        content: ''
      },
      error: '',
      updated: false
    }
  },
  attached: function () {
    this.getProject()
  },
  methods: {
    updateProject: function () {
      var projectsRef = new Firebase('https://swellfire-daily.firebaseio.com/projects/' + this.$route.params.id)
      this.updated = true
      projectsRef.update(this.project, this.onComplete)
    },
    onComplete: function (error) {
      if (error) {
        this.error = error
      } else {

      }
    },
    getProject: function () {
      var projectsRef = new Firebase('https://swellfire-daily.firebaseio.com/projects/' + this.$route.params.id)
      projectsRef.on('value', function (snapshot) {
        this.project = snapshot.val()
      }.bind(this), function (errorObject) {
        console.log('The read failed: ' + errorObject.code)
      })
    }
  }
}
</script>

<style type="text/css">
  /* always present */
  .fade-transition {
    transition: all .5s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
