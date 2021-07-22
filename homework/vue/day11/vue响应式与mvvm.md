# mvvm

## 1数据代理

```  
遍历data的所有属性,对所有属性进行数据代理
通过Object.defineProperty将data的属性重新定义在this上,同时设置get/set方法
当通过this读取属性时,实际读取的是data原数据的属性
当通过this读取设置时,实际设置的是data原数据的属性 

```

## 2数据劫持

 ```
 遍历data的所有属性,对所有属性进行重新定义,使其成为响应式数据
 先提取data所有属性,再通过遍历使用Object.defineProperty将所有属性进行重新定义成响应式
 给所有响应式属性添加一个dep,在get/set方法中使用了dep,形成闭包,使其不会销毁
 ```

## 3模板解析

#### 创建文档碎片节点

#### 解析模板语法

```
获取el所有子节点,添加到文档碎片节点中,返回文档碎片节点
遍历解析文档碎片节点中所有子节点
 -判断子节点是元素节点还是文本节点
  -元素节点,解析指令语法
   -提取属性节点,判断是否为指令语法(v-)
    -是指令语法,判断是事件指令还是非事件指令
     -事件指令,绑定事件和回调,回调使用bind将this指向vm
     -非事件指令,调用响应的更新DOM的updater方法更新DOM,new Watcher
  -文本节点,解析插值语法
    -同非事件指令v-text,通过textUpdater,更新元素的tetxContent属性,new Watcher
 子节点递归调用模板语法解析方法,使所有元素都会被解析

```



#### 将文档碎片节点插入到el中



## 4 new Watcher

```
调用时会读取数据,从而触发数据劫持的get方法,调用dep.depend()方法,使watcher的depids保存了dep的id,dep的subs保存了watcher,从而建立响应式联系
所有响应式数据都有dep,所有非事件指令都有watcher
```

##  5响应式

```
当响应式数据发生变化时,data的set触发,更新data保存的数据
数据劫持的set触发,调用了dep.notify()方法,dep.notify会调用,dep保存的watcher更新用户界面的方法cb调用,更新用户界面,达到响应式

```



# Vue响应式

## 1数据代理

```  
遍历data的所有属性,对所有属性进行数据代理
通过Object.defineProperty将data的属性重新定义在this上,同时设置get/set方法
当通过this读取属性时,实际读取的是data原数据的属性
当通过this读取设置时,实际设置的是data原数据的属性 

```

## 2数据劫持

 ```
遍历data的所有属性,对所有属性进行重新定义,使其成为响应式数据
先提取data所有属性,再通过遍历使用Object.defineProperty将所有属性进行重新定义成响应式
给所有响应式属性添加一个dep,在get/set方法中使用了dep,形成闭包,使其不会销毁
 ```

## 3响应式

```
new Watcher
每个组件只有一个watcher(没有使用watch属性的前提)
 _render 将真实DOM转化为虚拟DOM树
 转化时触发了数据代理的get,获取data数据,触发数据劫持的get方法,从而调   用了dep.depend(),建立了响应式联系
 -update 更新数据时触发数据劫持的set方法,调用patch(完成页面初始化渲染,将虚拟DOM转化为真实DOM,插入页面中生效,删除虚拟DOM树)
```

# 虚拟DOM diff

#### patch入口方法

```
调用patchVNode方法
```

#### patchVNode

```
判断是否为静态节点,是就返回
-新的虚拟DOM有无文本
 -有,判断新旧的文本是否相同
  -不同,将元素的文本设置为新的文本内容
 -无文本,判断新旧DOM是否都有子节点
  -新有旧有,调用updatechildren
  -新有旧无,将新的虚拟DOM转化为真实DOM,插入
  -旧有新无,将旧的DOM删除
  -新旧都无
   	旧有无文本节点,有就清空
```



#### updateChildren

```
遍历新旧DOM树所有子节点
-旧前和新前的DOM是否存在,不存在则前++ 后--
-旧前和新前,旧后和新后,旧前和新后,旧后和新前进行比较(if...else if...)
-若有相同则前的下标++ 后的下标--,新后插到旧前的前面,新前插到旧后的后面,调用patchVNode方法更新子元素
若上面都没有找到相同,通过比较key来对比
-旧DOM中所有key组成keys
-判断新前DOM的key是否在keys中
 -在则调用patchVNode渲染子元素,将元素插入到旧前DOM前
 -不在,创建新元素,插入到旧前DOM前
-新前下标++

退出循环条件 后下标小于前下标

- 判断旧前是否大于旧后
  - 如果是，说明新的 DOM 比旧的 DOM 多，就将创建多的新 DOM ，并插入的最后
- 判断新前是否大于新后
  - 如果是，说明新的 DOM 比旧的 DOM 少，就将删除多的旧 DOM
```

