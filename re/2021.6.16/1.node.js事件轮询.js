/* 
1.timer:定时器
执行定时器回调
2.pedding callback:系统阶段
3.idel，prepare：准备阶段
4.poll 轮询
队列有回调，执行队列中回调直到队列为空或超过系统最大限度
队列为空
    有setImmediate 执行第五阶段 check
    无setImmediate 等待回调执行完进入回调队列,定时器时间到了，进行下一个阶段
5.check 执行setImmediate\
6.close callbacks (关闭回调阶段)
例外 progress.nextTick

*/