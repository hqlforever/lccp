import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/lottery/K3/:id',
      component: resolve => require(['../components/page/Lottery.vue'], resolve)
    },
    {
      path: '/howtoplay/:id',
      component: resolve => require(['../components/page/howtoplay.vue'], resolve)
    },
    {
      path: '/lottery/PK10',
      component: resolve => require(['../components/page/PK10.vue'], resolve)
    },
    {
      path: '/lottery/FC3D',
      component: resolve => require(['../components/page/FC3D.vue'], resolve)
    },
    {
      path: '/lottery/PL3',
      component: resolve => require(['../components/page/PL3.vue'], resolve)
    },
    {
      path: '/lottery/6HC',
      component: resolve => require(['../components/page/6HC.vue'], resolve)
    }
    ,
    {
      path: '/lottery/SYX5/:id',
      component: resolve => require(['../components/page/SYX5.vue'], resolve)
    }
    ,
    {
      path: '/lottery/SSC/:id',
      component: resolve => require(['../components/page/SSC.vue'], resolve),
      meta: { title: '投注记录' }
    }
    ,
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          path: '/login',
          component: resolve => require(['../components/page/Login.vue'], resolve),
          meta: { title: '用户登录页面' }
        },
        {
          path: '/register',
          component: resolve => require(['../components/page/Register.vue'], resolve),
          meta: { title: '用户注册页面' }
        },
        {
          path: '/lotteryHall',
          component: resolve => require(['../components/page/LotteryHall.vue'], resolve),
          meta: { title: '购彩大厅' }
        }
        ,
        {
          path: '/lotteryHall',
          component: resolve => require(['../components/page/LotteryHall.vue'], resolve),
          meta: { title: '购彩大厅' }
        }
        ,
        {
          path: '/livelist',
          component: resolve => require(['../components/page/Livelist.vue'], resolve),
          meta: { title: '直播' }
        }
        ,
        {
          path: '/activity',
          component: resolve => require(['../components/page/Activity.vue'], resolve),
          meta: { title: '活动中心' }
        }
        ,
        {
          path: '/mobile',
          component: resolve => require(['../components/page/Mobile.vue'], resolve),
          meta: { title: '手机' }
        }
        ,
        {
          path: '/helpCenter',
          component: resolve => require(['../components/page/HelpCenter.vue'], resolve),
          meta: { title: '手机' }
        }
        ,
        {
          path: '/center',
          component: resolve => require(['../components/page/center/Center.vue'], resolve),
          meta: { title: '个人中心' },
          children: [
            {
              path: '/',
              redirect: '/center/personalInfo'
            },
            {
              path: 'personalInfo',
              component: resolve => require(['../components/page/center/personalInfo.vue'], resolve),
              meta: { title: '个人中心' }
            },
            {
              path: 'securityCenter',
              component: resolve => require(['../components/page/center/securityCenter.vue'], resolve),
              meta: { title: '安全中心' }
            },
            {
              path: 'manageBankcard',
              component: resolve => require(['../components/page/center/manageBankcard.vue'], resolve),
              meta: { title: '银行卡管理' }
            }
            ,
            {
              path: 'BetRecord',
              component: resolve => require(['../components/page/center/BetRecord.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'seekOrder',
              component: resolve => require(['../components/page/center/seekOrder.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'BillRecord',
              component: resolve => require(['../components/page/center/BillRecord.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'PLstatement',
              component: resolve => require(['../components/page/center/PLstatement.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'agentIntro',
              component: resolve => require(['../components/page/center/agentIntro.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'agentReport',
              component: resolve => require(['../components/page/center/agentReport.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'lowerReport',
              component: resolve => require(['../components/page/center/lowerReport.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'manageInvite',
              component: resolve => require(['../components/page/center/manageInvite.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'agentMember',
              component: resolve => require(['../components/page/center/agentMember.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'agentBetRecord',
              component: resolve => require(['../components/page/center/agentBetRecord.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'agentBillRecord',
              component: resolve => require(['../components/page/center/agentBillRecord.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            {
              path: 'letter',
              component: resolve => require(['../components/page/center/letter.vue'], resolve),
              meta: { title: '投注记录' }
            }
          
            ,
            {
              path: 'Notice',
              component: resolve => require(['../components/page/center/Notice.vue'], resolve),
              meta: { title: '投注记录' }
            }
            ,
            
            {
              path: 'Recharge/:id',
              component: resolve => require(['../components/page/center/Recharge.vue'], resolve),
              meta: { title: '投注记录' }
            },
            
            // {
            //   path: 'ebankPay',
            //   component: resolve => require(['../components/page/center/ebankPay.vue'], resolve),
            //   meta: { title: '投注记录' }
            // },
            // ,
            // {
            //   path: 'quickPay',
            //   component: resolve => require(['../components/page/center/quickPay.vue'], resolve),
            //   meta: { title: '投注记录' }
            // }
            // ,
            // {
            //   path: 'Alipay',
            //   component: resolve => require(['../components/page/center/Alipay.vue'], resolve),
            //   meta: { title: '投注记录' }
            // }
            // ,
            // {
            //   path: 'Weixin',
            //   component: resolve => require(['../components/page/center/Weixin.vue'], resolve),
            //   meta: { title: '投注记录' }
            // }
            // ,
            // {
            //   path: 'QQpay',
            //   component: resolve => require(['../components/page/center/QQpay.vue'], resolve),
            //   meta: { title: '投注记录' }
            // }
            // ,
            // {
            //   path: 'UnionPay',
            //   component: resolve => require(['../components/page/center/UnionPay.vue'], resolve),
            //   meta: { title: '投注记录' }
            // }
            ,
            {
              path: 'personalLevel',
              component: resolve => require(['../components/page/center/personalLevel.vue'], resolve),
              meta: { title: '投注记录' }
            }


          ]
        }

      ]
    },
    {
      path: '/manage',
      component: resolve => require(['../manage-components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: 'dashboard',
          component: resolve => require(['../manage-components/page/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
      },
      {
          path: 'table',
          component: resolve => require(['../manage-components/page/BaseTable.vue'], resolve),
          meta: { title: '基础表格' }
      },
      {
          path: 'tabs',
          component: resolve => require(['../manage-components/page/Tabs.vue'], resolve),
          meta: { title: 'tab选项卡' }
      },
      {
          path: 'form',
          component: resolve => require(['../manage-components/page/BaseForm.vue'], resolve),
          meta: { title: '基本表单' }
      },
      {
          // 富文本编辑器组件
          path: 'editor',
          component: resolve => require(['../manage-components/page/VueEditor.vue'], resolve),
          meta: { title: '富文本编辑器' }
      },
      {
          // markdown组件
          path: 'markdown',
          component: resolve => require(['../manage-components/page/Markdown.vue'], resolve),
          meta: { title: 'markdown编辑器' }    
      },
      {
          // 图片上传组件
          path: 'upload',
          component: resolve => require(['../manage-components/page/Upload.vue'], resolve),
          meta: { title: '文件上传' }   
      },
      {
          // vue-schart组件
          path: 'charts',
          component: resolve => require(['../manage-components/page/BaseCharts.vue'], resolve),
          meta: { title: 'schart图表' }
      },
      {
          // 拖拽列表组件
          path: 'drag',
          component: resolve => require(['../manage-components/page/DragList.vue'], resolve),
          meta: { title: '拖拽列表' }
      },
      {
          // 权限页面
          path: 'permission',
          component: resolve => require(['../manage-components/page/Permission.vue'], resolve),
          meta: { title: '权限测试', permission: true }
      }  
      ]
    }
  ]
})
