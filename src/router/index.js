import Vue from 'vue'
import Router from 'vue-router'
import CustomDirective from '@/components/feature/directive/CustomDirective'
import Axios from '@/components/request/Axios'
import Router1 from '@/components/feature/router/Router1'
import Router2 from '@/components/feature/router/Router2'
import ComputedProperty from '@/components/feature/ComputedProperty'
import Condition from '@/components/feature/directive/Condition'
import ComponentParent from "@/components/feature/nested/ComponentParent";
import ComponentSon1 from "@/components/feature/nested/ComponentSon1";
import VuexCounter from "../components/storage/VuexCounter";
import WebSite from "../components/feature/slot/WebSite";
import MixinComponent from "../components/feature/mixin/MixinComponent";
import JSZipComponent from "../components/zip/JSZipComponent";
import JSZipDemo from "../components/zip/JSZipDemo";
import Flex from "../components/css/flex/Flex";
import EventComponent from "@/components/event/EventComponent";
import Grid from "../components/css/grid/Grid";
import CssComponent from "@/components/css/CssComponent";
import FlvComponent from "@/components/media/FlvComponent";
import SessionCounter from "@/components/storage/SessionCounter";
import BoxSizing from "../components/css/box/BoxSizing";
import ContourColumnTable from "../components/css/box/ContourColumnTable";
import ContourColumnFlex from "../components/css/box/ContourColumnFlex";
import Float from "../components/css/float/Float";
import Position from "../components/css/position/Position";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomDirective',
      component: CustomDirective
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
    },
    {
      path: '/session',
      name: 'SessionCounter',
      component: SessionCounter
    },
    {
      path: '/box-sizing',
      name: 'BoxSizing',
      component: BoxSizing
    },
    {
      path: '/contour-column-table',
      name: 'ContourColumnTable',
      component: ContourColumnTable
    },
    {
      path: '/contour-column-flex',
      name: 'ContourColumnFlex',
      component: ContourColumnFlex
    },
    {
      path: '/float',
      name: 'Float',
      component: Float
    },
    {
      path: '/position',
      name: 'Position',
      component: Position
    }
  ]
})
