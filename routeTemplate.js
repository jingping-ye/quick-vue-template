/***
 * route文档模板
 */

const formatTime = require("./timeUtil");

const routeTemplate = (fileName) => {
  const upperFileName = fileName.replace(fileName[0], fileName[0].toUpperCase());
  const templateFile = `/**
 * Title: ${fileName}
 * Author: 作者
 * Date: ${formatTime()}
 * Description: Route文档
 * LastModifiedDate:${formatTime()}
 * LastModifiedDescription: 修改描述
 */
const ${fileName}Route = [
  {
    path: "/${fileName}",
    name: "${upperFileName}",
    redirect: "${fileName}",
    component: () => import("someComponent"),
    meta: {
      title: "${fileName}"
    },
    children: [
      {
        path: "${fileName}",
        name: "${upperFileName}",
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
export { ${fileName}Route };
`;
  return templateFile;
};

module.exports = { routeTemplate };
