import * as types from './mutation-types'
import Firebase from 'firebase'

export const changeAuth = ({ dispatch, state }, authData) => {
  dispatch(types.AUTH_CHANGED, authData)
}

export const getProjects = ({ dispatch, state }) => {
  var projectsRef = new Firebase('https://swellfire-daily.firebaseio.com/projects')

  projectsRef.on('value', function (snapshot) {
    dispatch(types.GET_PROJECTS, snapshot.val())
    var count = snapshot.numChildren()
    console.log(count)
    dispatch(types.GET_PROJECTS_COUNT, count)
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code)
  })
}

export const getProject = ({ dispatch, state }, key) => {
  var projectRef = new Firebase('https://swellfire-daily.firebaseio.com/projects/' + key)

  projectRef.on('value', function (snapshot) {
    dispatch(types.GET_PROJECT, snapshot.val())
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code)
  })
}

export const updateProject = ({ dispatch, state }, key) => {
  var projectRef = new Firebase('https://swellfire-daily.firebaseio.com/projects/' + key)
  console.log('https://swellfire-daily.firebaseio.com/projects/' + key)
  projectRef.on('value', function (snapshot) {
    dispatch(types.GET_PROJECT, snapshot.val())
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code)
  })
}

export const setProject = ({ dispatch, state }, project) => {
  dispatch(types.SET_PROJECT, project)
}

