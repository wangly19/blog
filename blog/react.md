---
title: React常见问题
---

## 你是怎么理解React的合成事件的？


首先，React18对合成事件的实现是坐了变化的，与旧的版本有一定的差距，我先说下旧的处理，然后在说下新的处理上的改变。

在React旧版本中，给元素添加点击事件并不是通过`onclick`这种原生js的方法，而是通过React自己实现的`onClick`事件来处理的。


注意点来了，原生的`onclick`是绑定在`element`本身的，这单可以在浏览器的`devtool`中可以看到。而React的`onClick`是绑定在`document`对象当中统一来调度的。



在`React17`版本中，对其做了一个小的改动就是从原先绑定到`document`变成了`RootAppContainer`，这样的话有利于一个`HTML`应用下如果存在多个`React容器`实现的。


> 目前，微前端的话就会在一个页面容器中存在多个`React的容器`。


## React中onClick与onClickCapture事件有什么区别

`onClick`是在模拟冒泡的阶段中执行的，而`onClickCapture`则是运行在捕获阶段当中的