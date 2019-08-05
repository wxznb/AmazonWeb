# AmazonWeb
AmazonWeb

## How to run
```
develop enviroment:

yarn install 
yarn dev

Or:

npm install
npm dev
```
```
production enviroment:

yarn install
yarn build

Or: 

npm install
npm build
```
规则：
- 以文件夹作为组件基础。方便放文档；
- 样式、页面和逻辑最好分开放；
- reducer、actions分开放；
- 数据采取同源法并拆分大对象为小对象，尽量不要对象套对象，最多套一层；
- 针对复杂数据不更新，最好就是冻结对象，然后需要更新时，在进行操作；
- 函数中用完的参数最好手动赋值null，使其在函数执行完得以释放内存；
- 公共ui组件全局引用，提取公共函数，提取公共样式；
- 参数命名采取驼峰法；
- 四格缩进；
- 样式命名采取短横-进行连接。
