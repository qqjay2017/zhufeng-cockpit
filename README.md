# Getting Started with zhueng-cockpit

## 新建项目

```
$ npx create-react-app zhufeng-cockpit --template typescript  
```

安装vscode插件 - AppWorks  37k那个
https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks


安装点依赖

```
$ yarn add recharts styled-components query-string dayjs    react-router-dom@6
```

```
$ yarn add @craco/craco @types/styled-components  -D
```

支持less

```
$ yarn add craco-less
```









## 大屏大纲

demo仓库 https://github.com/qqjay2017/zhufeng-cockpit
demo预览(开发中) https://zhufeng-cockpit.vercel.app/


第一章  基础
模拟实现粒子动画背景图
布局  grid
grid快速适配小屏幕设备
响应式-大屏适配
图片加载监听-开始展示时候保证图片已经加载完成,避免背景图从上往下刷
less生成工具类

第二章  recharts开发特殊图表需求

1. 自定义柱状图背景
2. 水柱图- 自定义柱状图样式
3. 自定义xy轴
4. 饼图阴影/渐变
5. 饼图圆角
6. tooltip自定义
7. 图例自定义

第三章 other
交互需求快速实现：
useRequest 轮询接口
自动翻页

第四章
echarts画地图
地图下钻(直辖市特殊处理)
echarts地图下钻到leaflet

可能需要1-2周时间准备,最近项目赶,上班时间基本都要100%投入,只能晚上和早上准备