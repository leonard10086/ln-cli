注意，如果使用npm所有用户均可见，保密性存疑。

以下我思考的解决办法：

cli的本质是执行git clone

【！！！】npm好像有给企业专用的包来着

1.代码是保存在npm上还是gitlab上？gitlab是否只能在连接vpn的时候进行git clone?如果是的话，断开vpn进行测试。

2.使用verdaccio搭建企业私有库

3.在脚手架初始化的时候进行账户和密码的输入

还有,由于执行git clone，仓库的提交可能会修改模板的Git仓库，要么设置不允许提交，要么用别的方法进行下载