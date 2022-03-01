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

 #### HTML书写规范
 1. ##### 空元素标签、单标签元素、双标签元素
 	空元素标签都不加 “/” 字符，(空元素：`area`、`base`、`br`、`col`、`command`、`embed`、`hr`、`img`、`input`、`keygen`、`link`、`meta`、`param`、`source`、`track`、`wbr`)；
 	双标签元素都应具有开始标签和结束标签；
    
```html
<!-- index.html 文件命名采用小驼峰命名方式 -->
<div>
<!-- 双标签元素必须要有结束标签且正确嵌套,块级元素独占一行,内联元素可选换行且里面不能嵌套块级元素 -->
	<h1>我是h1标题</h1> 
	<p>我是一段文字，我有始有终，浏览器能正确解析</p> 
	<img src="../todo"> <!-- 空元素标签不加 "/" -->
</div>
```
 2. ##### HTML书写风格
    HTML标签名、类名、标签属性和大部分属性值统一用小写，其属性值使用大写必须符合W3C规范，元素属性值可以写上的都写上，不需要为 CSS、JS 指定类型属性，如果html元素中有特殊字符引用需要进行转义处理，代码缩进统一使用四个空格(可以设置编辑器保存一个Tab转化为四个空格)；

```html
	<!-- 如果属性值使用大写必须符合W3C或相关规范 -->
	<meta http‐equiv="X‐UA‐Compatible" content="IE=edge,chrome=1"/>
	<!-- ... -->
	<div class="demo"> <!-- 标签、属性、属性值统一使用小写 -->
		<input type="radio" name="name" checked="checked" > <!-- 属性可以全部写上 -->
		<a href="#"> more &gt;&gt;</a> <!-- > 需要转义处理为 &gt; -->
		<!-- S DNS预解析 --> <!-- HTML注释约定为 S(开始) + 说明 + E(结束) -->
		<link rel="dns‐prefetch" href="#">
		<!-- E DNS预解析 -->
	</div>
```
 #### CSS书写规范
 

 1. #####	CSS书写风格
    CSS书写风格采用展开式书写，方便易于阅读查找和修改；选择器尽量少用通用选择器，不使用 ID 选择器和无具体语义定义的标签选择器，每一行属性结束都要加";"(如用`stylus`等则按其推荐规范)，左括号与类名之间一个空格，冒号与属性值之间一个空格，需为单个 CSS 选择器或新申明开启新行；
 
```css
@charset "UTF‐8"; /* @charset规则放在文件首行首个字符开始 */ 
.dome { /* 展开式书写,左括号与类名之间一个空格 */
	width: 100%; /* 末尾加分号,冒号与属性值之间一个空格 */
}
.dome li { /* 为单个css选择器或新申明开启新行 */
	width: 100%;
}
.dome p { /* css 后代选择器书写 */
	width: 100%;
}
.dome { /* less 后代选择器书写,正确嵌套 */
	p {
		font‐family: 'Hiragino Sans GB'; /* 统一使用单引号 */
		font-size: 12px; /* 属性值需要带单位 */
		color: rgba(255,255,255,.5); /* rgba()里不需有空格,0.5可以省略不必要的0 */
		background: #fff; /* 十六进制数值能用简写就简写 */
		padding: 0 10px; /* 0不要指明单位 */
	}
}
```
 2. ##### CSS属性书写顺序及注释说明
    建议遵循以下顺序进行属性书写：
    1. 布局定位属性(`display` `position` `float` `clear` `visibility` `overflow`)；
    2. 自身属性(`width` `height` `margin` `padding` `border` `background`)；
    3. 文本属性(`color` `font` `text-decoration` `text-align` `vertical-align` `white-space` `break-word`)；
    4. 其他属性（CSS3）(`content` `cursor` `border-radius` `box-shadow` `text-shadow` `...`)；
    
```css
.dome-list { /* 样式命名一律小写采用短横线连接 */
	display: block; /* 布局定位属性 */
	width: 100%; /* 自身属性 */
	color: #fff; /* 文本属性 */
	‐webkit‐border‐radius: 10px; /* CSS3浏览器私有前缀在前，标准前缀在后 */
	‐moz‐border‐radius: 10px;
	‐o‐border‐radius: 10px;
	‐ms‐border‐radius: 10px;
	border‐radius: 10px; /* CSS3属性 */
}

/* 注释说明 */

/* 单行注释 */

/**
* 多行注释
* @desc File Info
* @author Author Name
* @date 2015‐10‐10
*/

/* 模块注释 A
‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐‐ */
```
 #### JavaScript书写规范
 
 1. ##### JavaScript书写风格及规范
    使用`let`、`const`等关键字变量声明方式，变量名命名方式采用小驼峰，创建字符串时使用单引号，连续声明变量逗号后面间隔一个空格，函数声明时建议使用函数声明的方式创建，构造函数首字母大写，运算符左右间隔一个空格，数组使用 `map` 等函数方法需要`return`数据；
    
```javascript
conts pi = 3.1415; // conts 声明一个常量,编码风格需要统一,如果文件用ES6语法尽量都使用ES6语法编写,例如:不要let和var等混用
/* 使用字面量的方式创建字符串、数组、对象等 */

// 字符串使用单引号声明
let dome = '';

// 变量采用小驼峰命名
let domeList = [];

// 连续声明变量逗号后留一个空格
let domeObj = {}, test = []; 

// 使用函数声明创建函数,给函数入参传递一个初始值,函数声明或者判断语句循环语句的括号与花括号之间间隔一个空格
function myFunc(params = {}) {};

// 运算符和赋值符号左右留一个空格
let sumNum = 1 + 2; 

// map函数必须return,省略{}相当于return
[1, 2].map(item => item + 1); 

// Car()构造函数申明和使用建议首字母大写,用于区分其他函数
let car = new Car(); 

/* 对象数组等赋值操作采用解构赋值 */
let {data, msg} = res.data;
let [a, b] = [1, 2];

/* 数组和对象的拷贝与合并可使用拓展运算符 */
let list = [...[1,2], ...[1,2,3]]

// 注释说明

// 用于单行注释,斜杠后面间隔一个空格

/* 多行注释
*@method 方法名
*@for 所属类名
*@param{参数类型}参数名 参数说明
*@return {返回值类型} 返回值说明
*/

/*函数说明
* @param {string} p1 参数1的说明
* @param {string} p2 参数2的说明，比较长
* 那就换行了.
* @param {number=} p3 参数3的说明（可选）
* @return {Object} 返回值描述
*/

/* 模块说明
* @module 模块名
*/

/* 类说明
* @class 类名
* @constructor
*/

```
一般`javascript`的书写规范会通过相关的代码格式化工具进行配置，代码在保存时会自动进行脚本格式化处理。
 #### 图片规范
 1. #####  图片的命名规范
    图片命名建议以以下顺序命名：图片业务（可选） +（mod_）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）

```bash
#举个例子如下：

pp_icon_mod_sidenav.png

#图片业务：pp_拍拍，wx_：微信，sq_：手Q，jd_：京东商城 …
#图片功能类别： mod_：是否公共（可选），icon：模块类固化的图标，logo：LOGO类，spr：单页面各种元素合并集合，btn：按钮，   bg：可平铺或者大背景 …
#图片模块名称：goodslist：商品列表，goodsinfo：商品信息，userava tar：用户头像 …
#图片精度：普清：@1x，Retina：@2x | @3x …
```
 2. #####  图片的大小规范
    为了保证图片能更好地加载展示给用户看，团队约定：PC平台单张的图片的大小不应大于 200KB，移动平台单张的图片的大小不应大于 100KB。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
