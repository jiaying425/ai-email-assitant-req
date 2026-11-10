AI 邮件助手：部署说明

文件：
- index.html：可以直接在浏览器打开的中文互动网页
- Code.gs：将提交数据写入 Google Sheets 的脚本

1. 在 Google Drive 新建 Google Sheets，命名为「AI 邮件助手需求反馈」。
2. 在表格中打开「扩展程序 > Apps Script」。删除原有示例代码，粘贴 Code.gs 内容并保存。
3. 点击「部署 > 新部署 > 类型：Web 应用」。执行身份选「我」，访问权限选「任何人」（如可选）。确认您愿意让持有链接的人提交内容到这张表格；不要公开分享表格本身。
4. 完成授权，复制 Web 应用 URL（以 /exec 结尾）。
5. 编辑 index.html，将 PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE 替换为刚才复制的 URL。
6. 在浏览器打开 index.html 进行测试。选择三个功能并提交，再去 Google Sheets 检查是否新增一行。
7. 部署 index.html：可以通过 GitHub 仓库连接 Vercel，或使用其他静态网页托管服务。部署后分享网页链接。

注意：由于 Apps Script 跨域限制，页面只能知道提交请求是否发出，无法可靠确认 Google Sheets 已写入；请在表格里核对测试数据。若希望可靠显示「保存成功」，后续可改用带响应验证的后端 API。不要将敏感客户邮件或账号密码填写到表单。
