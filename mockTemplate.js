/***
 * api文档模板
 */

const formatTime = require("./timeUtil");

const mockTemplate = (fileName) => {
  const upperFileName = fileName.replace(fileName[0], fileName[0].toUpperCase());
  const innerFilename = fileName.split(".")[0];
  const templateFile = `/**
 * Title: ${innerFilename}
 * Author: 作者
 * Date: ${formatTime()}
 * Description: mock文档
 * LastModifiedDate:${formatTime()}
 * LastModifiedDescription: 修改描述
 */
import { ${innerFilename} } from "../data/${innerFilename}";
import { getQueryParam } from "@/utils/comUtils";

let ${innerFilename}List = ${innerFilename};

const ${innerFilename}Service = {
  add(config) {
    const { name} = JSON.parse(config.body);
    let addId = ${innerFilename}List.length < 10 ? \`0\${${innerFilename}List.length + 1}\` : ${innerFilename}List.length + 1;
    ${innerFilename}List.push({
      id: \`${innerFilename}_\${addId}\`,
      name
    });
    return {
      code: 20000,
      data: {
        message: "添加成功",
      },
    };
  },
  delete(config) {
    const { id } = JSON.parse(config.body);
    ${innerFilename}List =${innerFilename}List.filter((item) => item.id !== id);
    return {
      code: 20000,
      data: {
        message: "删除成功",
      },
    };
  },
  update(config) {
    const { id,name } = JSON.parse(config.body);
    let updateIndex = ${innerFilename}List.findIndex((item) => item.id === id);
    ${innerFilename}List[updateIndex] = {
      id: id,
      name: name
    };

    return {
      code: 20000,
      data: {
        message: "更新成功",
      },
    };
  },
  getList(config) {
    let queryParams = getQueryParam(config.url);
    let { pageNum = 1, pageSize = 10 } = queryParams;
    //  数据分页
    const pageList = ${innerFilename}List.filter(
      (item, index) => index < pageSize * pageNum && index >= pageSize * (pageNum - 1)
    );
    return {
      code: 20000,
      data: {
        total: ${innerFilename}List.length,
        list: pageList,
      },
    };
  },
};
export default ${innerFilename}Service;
`;
  return templateFile;
};

module.exports = { mockTemplate };
