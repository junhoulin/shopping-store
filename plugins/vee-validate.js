// plugins/vee-validate.js
import { defineRule } from "vee-validate";
import { required, email, confirmed } from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import { configure } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  // 定義全域的規則
  defineRule("required", required);
  defineRule("email", email);
  defineRule("confirmed", confirmed);
  defineRule("birthdate", (value) => {
    if (!value) return "請輸入生日";

    const today = new Date().toISOString().split("T")[0]; // 取得今天的 YYYY-MM-DD
    return value < today || "生日必須小於今天";
  });
  defineRule("password", (value) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,15}$/;
    return regex.test(value) || "密碼需包含字母、數字，且長度須為 5 至 15 字元";
  });
  defineRule("username", (value) => {
    const regex = /^.{3,15}$/;
    return regex.test(value) || "使用者名稱只能 3 至 15 字元";
  });
  defineRule("phone", (value) => {
    const regex = /^[0-9]{10,10}$/;
    return regex.test(value) || "手機格式不正確";
  });
  configure({
    // 載入繁體中文的設定檔，產生繁體中文的驗證訊息
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true, // 輸入文字時立即進行驗證
  });

  // 設定預設語言為繁體中文
  setLocale("zh_TW");
});
