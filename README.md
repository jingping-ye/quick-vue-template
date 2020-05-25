# quick-vue-template

> 快速生成 vue 项目各种模板

目前支持的模板：

- vue 组件
- api 文件
- 路由文件
- vuex 文件

## 目录说明

```js
|-- apiTemplate.js api模板
|-- compTemplate.js vue组件模板
|-- gen.js 生成模板脚本
|-- routeTemplate.js 路由模板
|-- vuexTemplate.js vuex模板
```

## 使用步骤

### 通过npm安装

1. 安装依赖

   ```js
   npm i quick-vue-template
   ```

2. 因为模板生成依赖于`chalk `和`inquirer`两个包，所以先安装依赖

   ```bash
   npm i chalk inquirer
   ```
3. 在项目的`package.json`中增加如下命令

    ```js
    "scripts": {
        ......
        "gen": "gen"
      },
    ```

4. 运行命令

   ```js
   npm run gen
   ```

5. 选择模板类型

   ![支持的模板类型](http://ytju2r.coding-pages.com/生成模板功能.jpg)

6. 输入生成文件名称

   ![输入生成文件名称](http://ytju2r.coding-pages.com/生成文件路径.jpg)

- 默认生成在 vue 项目的 src 目录下

- 如果要指定文件路径，请以`@`开头（`@`代表的是`src`目录），比如`@/views/userList/userList.vue`生成的文件目录如下:

  ```text
  |-src
    |-views
  	  |- userList
  	      |- userList.vue
  ```

## 通过github安装

1. 下载git库

   ```bash
   git clone https://github.com/jingping-ye/quick-vue-template.git
   ```

2. 将下载下来的repo放在项目根目录下，如下:

   ```text
   |- project
   	|- quick-vue-template // 下载下来的repo
   	|- src // 项目的src目录
   	|- ...
   ```

3. 安装相关依赖

   ```bash
   cnpm i inquirer chalk -D
   ```

4. 在`package.json`中添加如下命令

   ```js
   "scripts": {
       ...
       "gen": "node quick-vue-template gen"
     },
   ```

5. 运行`npm run gen`即可

## 其他

1. 如果要修改模板，只需在对应文件修改。

2. 依赖于`chalk`和` inquirer`,使用前请安装。

   ```bash
    npm i chalk inquirer
   ```

## 模板示例

### vue组件-简单模式

```js
<template>
  <div class="simpleComp">
    simpleComp组件
  </div>
</template>
<script>
//  常量声明
const value = {
  msg:"Hello World!"
}
export default {
  name: 'simpleComp',
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World！")
    }
  },
  mounted(){}
}
</script>
<style scoped>
.simpleComp {

}
</style>
```

### vue组件-完全模式

```js
<template>
  <div class="fullVueComp">
    fullVueComp组件
  </div>
</template>
<script>
//  常量声明
const value = {msg:"Hello World!"};

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'fullVueComp',
  mixins:[],
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World!")
    }
  },
  created(){},
  mounted(){},
  destoryed(){}
}
</script>
<style scoped>
.fullVueComp {

}
</style>
```

### api模板

```js
/**
 * Title: api
 * Author: 作者
 * Date: 2020-05-25 15:17:05
 * Description: API文档
 * LastModifiedDate:2020-05-25 15:17:05
 * LastModifiedDescription: 修改描述
 */
import http from "@/utils/http";

const prefix = "v1"; // 可以在此处写"v1/"，自动拼接路径
const api = {
  list: `${prefix}/api/list`,
  update: `${prefix}/api/update`,
  delete: `${prefix}/api/delete`,
  add:  `${prefix}/api/add`,
  detail: `${prefix}/api/detail`
};

/**
 * 获取列表
 * @param {object} argsParams
 * @param {number} argsParams.isDelete 是否删除状态 0-正常[default]|1-删除
 * @note 备注
 * @usage 使用示例
 */
function getApiList(argsParams = {}) {
  return http
    .get(api.list, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 更新
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function updateApi(argsParams = {}) {
  return http
    .put(api.update, argsParams)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 新增
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function addApi(argsParams = {}) {
  return http
    .post(api.add, argsParams)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 删除
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function deleteApi(argsParams = {}) {
  return http
    .delete(api.delete, { data: { ...argsParams } })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 获取详情
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function getApiDetail(argsParams = {}) {
  return http
    .get(api.detail, {
      params:argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export default {
  getApiList,
  updateApi,
  addApi,
  deleteApi,
  getApiDetail
};

```

## 路由文件

```js
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
```

### vuex文件

```js
/**
 * Title: vuex
 * Author: 作者
 * Date: 2020-05-19 15:08:46
 * Description: Route文档
 * LastModifiedDate:2020-05-19 15:08:46
 * LastModifiedDescription: 修改描述
 */
const state = {};

const getters = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
```

