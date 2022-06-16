import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Instance from '@/components/Instance'
import DataBinding from '@/components/DataBinding'
import Events from '@/components/Events'
import EventModifier from '@/components/EventModifier'
import KeyboardEvents from '@/components/KeyboardEvents'
import ComputedProperties from '@/components/ComputedProperties'
import DynamicCSS from '@/components/DynamicCSS'
import Conditionals from '@/components/Conditionals'
import Components from '@/components/Components'
import Components2 from '@/components/Components2'
import Refs from '@/components/Refs'
import Test from '@/components/Test'
import Main from '@/components/NestedComponentsProject/Main'
import ParentProp from '@/components/Props/ParentProp'
import LifeCycleHooks from '@/components/LifeCycleHooks'
import ChildSlot from '@/components/Slots/ChildSlot'
import DynamicComponents from '@/components/DynamicComponents'
import UserBlog from '@/components/VueBlog/UserBlog'
import CustomDirective from '@/components/CustomDirective'
import Filters from '@/components/Filters'
import SearchFilter from '@/components/SearchFilter'
import NotFound from '@/components/NotFound'
import TestClass from '@/components/TestClass'


Vue.use(Router)

export default new Router({
  /* Hash mode set to history, will make server request for every routes */
  //mode: 'history', 

  /* Mode set to hash is the default and it will add # to url which avoids additional server request */
  mode: 'hash',  

  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/1',
      name: 'Instance',
      component: Instance
    },
    {
      path: '/2',
      name: 'DataBinding',
      component: DataBinding
    },
    {
      path: '/3',
      name: 'Events',
      component: Events
    },
    {
      path: '/4',
      name: 'EventModifier',
      component: EventModifier
    },
    {
      path: '/5',
      name: 'KeyboardEvents',
      component: KeyboardEvents
    },
    {
      path: '/6',
      name: 'ComputedProperties',
      component: ComputedProperties
    },
    {
      path: '/7',
      name: 'DynamicCSS',
      component: DynamicCSS
    },
    {
      path: '/8',
      name: 'Conditionals',
      component: Conditionals
    },
    {
      path: '/9',
      name: 'Components',
      component: Components
    },
    {
      path: '/10',
      name: 'Components2',
      component: Components2
    },
    {
      path: '/11',
      name: 'Refs',
      component: Refs
    },
    {
      path: '/12',
      name: 'Test',
      component: Test
    },
    {
      path: '/13',
      name: 'Main',
      component: Main
    },
    {
      path: '/14',
      name: 'ParentProp',
      component: ParentProp
    },
    {
      path: '/16',
      name: 'LifeCycleHooks',
      component: LifeCycleHooks
    },
    {
      path: '/17',
      name: 'ChildSlot',
      component: ChildSlot
    },
    {
      path: '/18',
      name: 'DynamicComponents',
      component: DynamicComponents
    },
    {
      path: '/blog',
      name: 'UserBlog',
      component: UserBlog
    },
    {
      path: '/19',
      name: 'CustomDirective',
      component: CustomDirective
    },
    {
      path: '/20',
      name: 'Filters',
      component: Filters
    },
    {
      path: '/21',
      name: 'SearchFilter',
      component: SearchFilter
    },
    {
      path: '/22',
      name: 'TestClass',
      component: TestClass
    },
  ]
})

