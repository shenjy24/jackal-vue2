import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Axios from '@/components/Axios'
import Router1 from '@/components/Router1'
import Router2 from '@/components/Router2'
import ComputedProperty from '@/components/ComputedProperty'
import Condition from '@/components/Condition'
import ComponentParent from "@/components/ComponentParent";
import ComponentSon1 from "@/components/ComponentSon1";
import VuexCounter from "../components/VuexCounter";
import WebSite from "../components/slot/WebSite";
import MixinComponent from "../components/mixin/MixinComponent";
import JSZipComponent from "../components/zip/JSZipComponent";
import JSZipDemo from "../components/zip/JSZipDemo";
import Flex from "../components/css/flex/Flex";
import EventComponent from "@/components/event/EventComponent";
import Grid from "../components/css/grid/Grid";
import CssComponent from "@/components/css/CssComponent";
import FlvComponent from "@/components/media/FlvComponent";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/router1',
      name: 'Router1',
      component: Router1
    },
    {
      path: '/router2',
      name: 'Router2',
      component: Router2
    },
    {
      path: '/computed',
      name: 'ComputedProperty',
      component: ComputedProperty
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/parent',
      name: 'ComponentParent',
      component: ComponentParent
    },
    {
      path: '/son1',
      name: 'ComponentSon1',
      component: ComponentSon1
    },
    {
      path: '/counter',
      name: 'VuexCounter',
      component: VuexCounter
    },
    {
      path: '/slot',
      name: 'WebSite',
      component: WebSite
    },
    {
      path: '/mixin',
      name: 'MixinComponent',
      component: MixinComponent
    },
    {
      path: '/zip',
      name: 'JSZipComponent',
      component: JSZipComponent
    },
    {
      path: '/zip2',
      name: 'JSZipDemo',
      component: JSZipDemo
    },
    {
      path: '/flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/event',
      name: 'EventComponent',
      component: EventComponent
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/css',
      name: 'CssComponent',
      component: CssComponent
    },
    {
      path: '/video',
      name: 'FlvComponent',
      component: FlvComponent
    }
  ]
})
