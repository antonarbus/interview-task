import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import InterviewTask from '../components/InterviewTask.vue'

const routes = [
  { path: '', component: StartPage, name: 'StartPage' },
  { path: '/task', component: InterviewTask, name: 'InterviewTask' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
