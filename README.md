# 次世代アシストスーツ 試着体験アンケート

展会用手机问卷页。扫二维码即可填写，回答自动汇总到 Google 表格（可导出 Excel）。

## 公网地址

部署 GitHub Pages 后访问：

`https://<你的用户名>.github.io/exo-survey/`

页面右上角 **QR** 可生成当前地址的二维码，打印后给参观者扫描。

## 一键把回答收进表格（约 3 分钟）

1. 打开 [Google 表格](https://sheets.google.com)，新建空白表格，命名如 `展会问卷回答`。
2. 菜单：**扩展程序 → Apps Script**，删除默认代码，粘贴 `apps-script/Code.gs` 全部内容，保存。
3. 右上角 **部署 → 新建部署**：
   - 类型：**网页应用**
   - 执行身份：**我**
   - 谁可以访问：**任何人**
   - 点击部署，授权后复制 **网页应用 URL**（形如 `https://script.google.com/macros/s/.../exec`）
4. 把该 URL 填进 `index.html` 顶部的 `WEBHOOK_URL`，再 push 一次；或在线上页面右上角齿轮里临时保存（仅本机浏览器有效，展会请写进 `WEBHOOK_URL`）。
5. 用手机打开公网页试填一条，回到 Google 表格的 `回答一覧` 工作表确认有新行。

表格可用 **文件 → 下载 → Microsoft Excel (.xlsx)** 导出。

## 本地预览

用浏览器直接打开 `index.html`，或：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。
