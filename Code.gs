// Google Apps Script: bind this script to your Google Sheet (Extensions > Apps Script).
const SHEET_NAME = '需求反馈';
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (!Array.isArray(data.features) || data.features.length !== 3) throw new Error('Exactly 3 features required');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(['提交时间','功能1','功能2','功能3','最大困难','AI自主权偏好','其他需求']);
    const safe = value => {const s=String(value||'').slice(0,5000);return /^[=+\-@\t\r]/.test(s)?"'"+s:s};
    sheet.appendRow([new Date(), ...data.features.map(safe), safe(data.pain),safe(data.autonomy),safe(data.extra)]);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
