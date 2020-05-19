const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
// 时间格式化
const formatTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join("-") + " " + [hour, minute, second].map(formatNumber).join(":");
};

/***
 * api文档模板
 */
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
