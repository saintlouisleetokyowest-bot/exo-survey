# 次世代アシストスーツ 試着体験アンケート

展会用手机问卷页。扫二维码即可填写。

## 公网地址

https://saintlouisleetokyowest-bot.github.io/exo-survey/

页面右上角 **QR** 可生成当前地址的二维码。

## 答卷存在哪里？

每份答卷会发到邮箱：**saintlouislee.tokyowest@gmail.com**（表格样式邮件）。

1. **第一次**有人提交后，邮箱会收到 FormSubmit 的确认信，点开确认一次即可。
2. 之后每份答卷都会直接进收件箱，邮件里是完整表格字段。
3. 在邮箱搜索 `【展会问卷】` 即可汇总查看；需要 Excel 时，把邮件内容复制到表格即可。

如需改接收邮箱，编辑 `index.html` 里的 `COLLECT_EMAIL` 后重新推送。

## 本地预览

```bash
python3 -m http.server 8080
```

访问 `http://localhost:8080`。
