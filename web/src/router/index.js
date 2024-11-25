import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import NotFoundIndexView from '../views/error/NotFoundIndexView'

const routes = [
  {
    path: "/",
    redirect: "/pk/",
    name: "home",
    component: PkIndexView,
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFoundIndexView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
    component: NotFoundIndexView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
