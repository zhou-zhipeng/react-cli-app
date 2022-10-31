### 生成webpack相关的配置文件
```bash
$ npm run eject
```

### 运行项目
```bash
$ npm start
```

### 运行单元测试
```bash
$ npm test
```

webpack配置@符号访问根目录

 #### 项目文件说明

 ```bash
 # webpack配置文件夹
 config/
 # npm安装包
 node_modules/
 # 静态资源文件夹
 public/
 # 运行指令环境配置
 scripts/
 # 项目主文件目录
 src/
  # 请求数据api函数封装
  |- api/
  # 公共文件处理
  |- common/
    # 路由鉴权高阶组件封装
    |- auth.router.js
    # 全局属性挂载
    |- property.js
    # 公用正则表达式
    |- regexp.js
  # 公共组件
  |- components/
  # 系统公用配置
  |- components/
    # 模块化路由配置信息文件
    |- module/
    # axios请求处理封装
    |- request.config.js
    # router跳转配置
    |- router.config.js
  # 图片存放
  |- image/
  # 样式存放
  |- less/
  # 中间件存放
  |- middleware/
  # mock数据模拟
  |- mock/
  # 页面编码文件
  |- page/
  # 状态管理
  |- redux/
  # 项目单元测试
  |- test/
  # app入口
  |- index.js/

 ```
