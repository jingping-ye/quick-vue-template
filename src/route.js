/**
 * Title: route
 * Author: 作者
 * Date: 2020-05-19 15:07:27
 * Description: Route文档
 * LastModifiedDate:2020-05-19 15:07:27
 * LastModifiedDescription: 修改描述
 */
const routeRoute = [
  {
    path: "/route",
    name: "Route",
    redirect: "route",
    component: () => import("someComponent"),
    meta: {
      title: "route"
    },
    children: [
      {
        path: "route",
        name: "Route",
        components: {
          default: () => import("someComponent")
        },
        meta: {
          title: "菜单名称",
          icon: "code"
        }
      }
    ]
  }
];
export { routeRoute };
