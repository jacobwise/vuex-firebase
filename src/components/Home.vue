<template>
  <div class="home">
    <h1>Projects</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="project in projects">
      
        <!-- Go to Project -->
        <a href="#" 
           v-link="{ name: 'project', params: { id: $key } }" 
           @click.prevent="setProject(project)">
           {{ project.title }}
        </a>

        <!-- Delete Project -->
        <span class="pull-right">
          <button class="btn btn-danger btn-xs" @click.prevent="removeProject($key)">Delete</button>
        </span>

        <!-- Edit Project -->
        <span class="pull-right" style="margin-right: 5px;">
          <a href="#" v-link="{ name: 'editProject', params: { id: $key, project: 'test' }}" class="btn btn-warning btn-xs">Edit</a>
        </span>

      </li>
    </ul>
  </div>
</template>

<script>
import Firebase from 'firebase'
import {
  getProjects,
  setProject
} from '../vuex/actions'

export default {
  props: ['store'],
  vuex: {
    actions: {
      getProjects,
      setProject
    },
    getters: {
      projects: state => state.projects
    }
  },
  ready: function () {
    // Get the projects
    this.getProjects()
  },
  methods: {
    removeProject: function (key) {
      var url = 'https://swellfire-daily.firebaseio.com/projects/' + key
      var projectRef = new Firebase(url)
      projectRef.remove()
    }
  }
}
</script>
