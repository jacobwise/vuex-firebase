export function configRouter (router) {
  // normal routes
  router.map({
    '/projects': {
      name: 'home',
      component: require('./components/Home.vue')
    },
    '/login': {
      name: 'login',
      component: require('./components/Login.vue')
    },
    '/register': {
      name: 'register',
      component: require('./components/Register.vue')
    },
    '/project/add': {
      name: 'addProject',
      component: require('./components/AddProject.vue')
    },
    '/project/:id/:project': {
      name: 'project',
      component: require('./components/Project.vue')
    },
    '/project/:id/edit': {
      name: 'editProject',
      component: require('./components/EditProject.vue')
    }
  })

  // Redirect to the home route if any routes are unmatched
  router.redirect({
    '*': '/projects'
  })
}

