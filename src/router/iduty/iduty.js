const idutyRouters = [
    {
        path: '/iduty/order',
        name: 'Order',
        redirect: '/iduty/order/allorder',
        component: () => import(/* webpackChunkName: 'order' */'@/view/iduty/order/order'),
        meta: { title: '订单管理' },
        children: [
            {
                path: '/iduty/order/allorder',
                name: 'AllOrder',
                meta: { title: '全部订单' },
                component: () => import(/* webpackChunkName: 'allorder' */'@/view/iduty/order/allorder')
            },
            {
                path: '/iduty/order/Newlybuild',
                name: 'Newlybuild',
                meta: { title: '新建订单' },
                component: () => import(/* webpackChunkName: 'Newlybuild' */'@/view/iduty/order/Newlybuild')
            },
            {
                path: '/iduty/order/myorder',
                name: 'MyOrder',
                meta: { title: '我的订单' },
                component: () => import(/* webpackChunkName: 'myorder' */'@/view/iduty/order/myorder')
            },
            {
                path: '/iduty/order/allot',
                name: 'Allot',
                component: () => import(/* webpackChunkName: 'allot' */'@/view/iduty/order/allot'),
                meta: { title: '分配订单' }
            }
        ]
    },
    {
        path: '/iduty/task',
        name: 'Task',
        component: () => import(/* webpackChunkName: 'task' */'@/view/iduty/task'),
        meta: { title: '任务管理' },
        children: [
            {
                path: '/iduty/task/mytask',
                name: 'Mytask',
                meta: { title: '我的任务' },
                component: () => import(/* webpackChunkName: 'mytask' */'@/view/iduty/task/mytask')
            },
            {
                path: '/iduty/task/alltask',
                name: 'Alltask',
                meta: { title: '全部任务' },
                component: () => import(/* webpackChunkName: 'alltask' */'@/view/iduty/task/alltask')
            }
        ]
    },
    {
        path: '/iduty/member',
        name: 'Member',
        redirect: '/iduty/member/source',
        component: () => import(/* webpackChunkName: 'member' */'@/view/iduty/member/member'),
        meta: { title: '成员管理' },
        children: [
            {
                path: '/iduty/member/source',
                name: 'Source',
                meta: { title: '来源管理' },
                component: () => import(/* webpackChunkName: 'source' */'@/view/iduty/member/source')
            },
            {
                path: '/iduty/member/attribute',
                name: 'Attribute',
                meta: { title: '属性管理' },
                component: () => import(/* webpackChunkName: 'attribute' */'@/view/iduty/member/attribute')
            },
            {
                path: '/iduty/member/state',
                name: 'State',
                meta: { title: '状态管理' },
                component: () => import(/* webpackChunkName: 'state' */'@/view/iduty/member/state')
            }
        ]
    },
    {
        path: '/iduty/summary',
        name: 'Summary',
        component: () => import(/* webpackChunkName: 'summary' */'@/view/iduty/summary'),
        meta: { title: '管理汇总' },
        children: [
            {
                path: '/iduty/summary/Reportform',
                name: 'Reportform',
                meta: { title: '报表' },
                component: () => import(/* webpackChunkName: 'Reportform' */'@/view/iduty/summary/Reportform')
            }
        ]
    }
]

export default idutyRouters;
