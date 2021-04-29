- BFC(block formatting context): 块级格式化上下文
通俗来讲就是一个封闭的大盒子，这里面的元素不会影响到外界的元素，并且BFC具有一些普通元素不具有的特性

- 如何触发BFC
1. body根元素
2. float属性不为none
3. 绝对定位元素 position为absolute或者fixed
4. overflow不是visible
5. display为inline-block 或 flex 或 table-cells

- 特性及应用
1. 同一个BFC, 会出现margin折叠 要想解决这个问题 可以把两个元素放在不同BFC中
2. BFC可以包含浮动元素（清除浮动）
  子元素设置了浮动的时候 父元素会发生高度塌陷 此时需要清楚浮动
3. BFC可以阻止元素被浮动元素覆盖（可以做自适应两栏布局）

