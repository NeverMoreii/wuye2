import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '便捷青岛后台管理', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Exampless', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
//新增基础信息管理路由
{
  path: '/jichu',
  component: Layout,
  redirect: '/jichu/xiaoqu',
  name: 'jichu',
  meta: {
    title: '基础信息管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'xiaoqu',
      component: () => import('@/views/jichu/xiaoqu'), // Parent router-view
      name: 'xiaoqu',
      meta: { title: '小区管理' },
      children: [
        {
          path: 'xiaoqulist',
          component: () => import('@/views/jichu/xiaoqulist'),
          name: 'xiaoqulist',
          meta: { title: '小区管理' }
        },        
        {
          path: 'newsxiaoqu',
          component: () => import('@/views/jichu/newsxiaoqu'),
          name: 'newsxiaoqu',
          meta: { title: '小区详情' }
        },
        {
          path: 'addxiaoqu',
          component: () => import('@/views/jichu/addxiaoqu'),
          name: 'addxiaoqu',
          meta: { title: '小区新增' }
        },
        {
          path: 'changxiaoqu',
          component: () => import('@/views/jichu/changxiaoqu'),
          name: 'changxiaoqu',
          meta: { title: '小区变更' },
        },
      ]
    },
    //楼栋管理
    {
      path: 'build',
      component: () => import('@/views/jichu/build/build'), // Parent router-view
      name: 'build',
      meta: { title: '楼栋管理' },
      children: [
        {
          path: 'buildlist',
          component: () => import('@/views/jichu/build/buildlist'),
          name: 'buildlist',
          meta: { title: '楼栋列表' }
        },        
        {
          path: 'addbuild',
          component: () => import('@/views/jichu/build/addbuild'),
          name: 'addbuild',
          meta: { title: '增加楼栋' }
        },
        {
          path: 'addbuild2',
          component: () => import('@/views/jichu/build/addbuild2'),
          name: 'addbuild2',
          meta: { title: '增加楼栋2' }
        },        
        {
          path: 'changbuild',
          component: () => import('@/views/jichu/build/changebuild'),
          name: 'changbuild',
          meta: { title: '修改楼栋' },
        },
      ]
    },
    //单元管理
    {
      path: 'danyuan',
      component: () => import('@/views/jichu/danyuan/danyuan'), // Parent router-view
      name: 'danyuan',
      meta: { title: '单元管理' },
      children: [
        {
          path: 'danyuanlist',
          component: () => import('@/views/jichu/danyuan/danyuanlist'),
          name: 'danyuanlist',
          meta: { title: '单元列表' }
        },        
        {
          path: 'adddanyuan',
          component: () => import('@/views/jichu/danyuan/adddanyuan'),
          name: 'adddanyuan',
          meta: { title: '增加单元' }
        },
        {
          path: 'adddanyuan2',
          component: () => import('@/views/jichu/danyuan/adddanyuan2'),
          name: 'adddanyuan2',
          meta: { title: '增加单元2' }
        },        
        {
          path: 'changdanyuan',
          component: () => import('@/views/jichu/danyuan/changdanyuan'),
          name: 'changdanyuan',
          meta: { title: '修改单元' },
        },
      ]
    }, 
     //房屋管理
     {
      path: 'house',
      component: () => import('@/views/jichu/house/house'), // Parent router-view
      name: 'house',
      meta: { title: '房屋管理' },
      children: [
        {
          path: 'houselist',
          component: () => import('@/views/jichu/house/houselist'),
          name: 'houselist',
          meta: { title: '房屋列表' }
        },        
        {
          path: 'addhouse',
          component: () => import('@/views/jichu/house/addhouse'),
          name: 'addhouse',
          meta: { title: '增加房屋' }
        },
        {
          path: 'addhouse2',
          component: () => import('@/views/jichu/house/addhouse2'),
          name: 'addhouse2',
          meta: { title: '增加房屋2' }
        },        
        {
          path: 'changehouse',
          component: () => import('@/views/jichu/house/changehouse'),
          name: 'changehouse',
          meta: { title: '修改房屋' },
        },
      ]
    }, 
    //业主管理
    {
      path: 'user',
      component: () => import('@/views/jichu/user/user'), // Parent router-view
      name: 'user',
      meta: { title: '业主管理' },
      children: [
        {
          path: 'userlist',
          component: () => import('@/views/jichu/user/userlist'),
          name: 'userliat',
          meta: { title: '业主列表' }
        },         
        {
          path: 'adduser',
          component: () => import('@/views/jichu/user/adduser'),
          name: 'adduser',
          meta: { title: '增加业主' }
        },
        {
          path: 'adduser2',
          component: () => import('@/views/jichu/user/adduser2'),
          name: 'adduser2',
          meta: { title: '增加业主2' }
        },        
        {
          path: 'changeuser',
          component: () => import('@/views/jichu/user/changeuser'),
          name: 'changeuser',
          meta: { title: '修改业主' },
        },
      ]
    },   
  ]
},
//结束
//新增费用管理路由
{
  path: '/cost',
  component: Layout,
  redirect: '/cost/cost',
  name: 'cost',
  meta: {
    title: '费用科目管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'costlist',
      component: () => import('@/views/cost/costlist'), // Parent router-view
      name: 'costlist',
      meta: { title: '费用科目列表' },
    },    
    {
      path: 'addcost',
      component: () => import('@/views/cost/addcost'), // Parent router-view
      name: 'addcost',
      meta: { title: '添加费用科目' },
    },
    {
      path: 'changecost',
      component: () => import('@/views/cost/changecost'), // Parent router-view
      name: 'changecost',
      meta: { title: '修改费用科目' },
    }  
  ]
},
//结束
//新增交费标准管理路由
{
  path: '/costrule',
  component: Layout,
  redirect: '/costrule/costrule',
  name: 'costrule',
  meta: {
    title: '缴费标准管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'costrulelist',
      component: () => import('@/views/costrule/costrulelist'), // Parent router-view
      name: 'acostrulelist',
      meta: { title: '缴费标准列表' },
    },
    {
      path: 'addcostrule',
      component: () => import('@/views/costrule/addcostrule'), // Parent router-view
      name: 'addcostrule',
      meta: { title: '添加缴费标准' },
    }  
  ]
},
//结束
//新增线下缴费路由
{
  path: '/windowpay',
  component: Layout,
  children: [
    {
      path: 'winwpay',
      name: 'winpay',
      component: () => import('@/views/windowpay/winpay'),
      meta: { title: '线下缴费', icon: 'form' }
    }
  ]
},
//结束
//新增账单管理路由
{
  path: '/bill',
  component: Layout,
  redirect: '/bill/billlist',
  name: 'bill',
  meta: {
    title: '账单管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'billlist',
      component: () => import('@/views/bill/billlist'), // Parent router-view
      name: 'billlist',
      meta: { title: '账单列表' },
    },
    {
      path: 'cheakbill',
      component: () => import('@/views/bill/cheakbill'), // Parent router-view
      name: 'cheakbill',
      meta: { title: '对账单' },
    },
    {
      path: 'pays',
      component: () => import('@/views/bill/pays'), // Parent router-view
      name: 'pays',
      meta: { title: '缴费明细' },
    },     
  ]
},
//结束



]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
