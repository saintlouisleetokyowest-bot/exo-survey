/**
 * 展会问卷 → Google Sheets 收集脚本
 *
 * 用法：
 * 1. 新建一个 Google 表格
 * 2. 扩展程序 → Apps Script，把本文件全部粘贴进去并保存
 * 3. 部署 → 新建部署 → 类型选「网页应用」
 *    - 执行身份：我
 *    - 具有访问权限的用户：任何人
 * 4. 复制「网页应用」URL，粘贴到本仓库 index.html 顶部的 WEBHOOK_URL
 */

var SHEET_NAME = '回答一覧';

var HEADERS = [
  'timestamp',
  'name',
  'email',
  'industry',
  'position',
  'age',
  'gender',
  'scene',
  'ease',
  'weight',
  'fit',
  'power',
  'resistance',
  'timing',
  'improvement',
  'purchase_option',
  'price',
  'comments'
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();
    ensureHeaders_(sheet);

    var row = HEADERS.map(function (key) {
      var value = data[key];
      if (value === null || value === undefined) return '';
      return String(value);
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('EXO-SURVEY webhook is running')
    .setMimeType(ContentService.MimeType.TEXT);
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}
