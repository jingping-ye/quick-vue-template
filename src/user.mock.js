/**
 * Title: user
 * Author: 作者
 * Date: 2020-06-03 22:41:11
 * Description: mock文档
 * LastModifiedDate:2020-06-03 22:41:11
 * LastModifiedDescription: 修改描述
 */
import { user } from "../data/user";
import { getQueryParam } from "@/utils/comUtils";

let userList = user;

const userService = {
  add(config) {
    const { name} = JSON.parse(config.body);
    let addId = userList.length < 10 ? `0${userList.length + 1}` : userList.length + 1;
    userList.push({
      id: `user_${addId}`,
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
    userList =userList.filter((item) => item.id !== id);
    return {
      code: 20000,
      data: {
        message: "删除成功",
      },
    };
  },
  update(config) {
    const { id,name } = JSON.parse(config.body);
    let updateIndex = userList.findIndex((item) => item.id === id);
    userList[updateIndex] = {
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
    const pageList = userList.filter(
      (item, index) => index < pageSize * pageNum && index >= pageSize * (pageNum - 1)
    );
    return {
      code: 20000,
      data: {
        total: userList.length,
        list: pageList,
      },
    };
  },
};
export default userService;
