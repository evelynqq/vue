import Vue from "vue";
import VueI18n from "vue-i18n";

// 載入自訂語言檔
import en from "@/i18n/lang/en.js";
import tw from "@/i18n/lang/tw.js";

// 使用VueI18n
Vue.use(VueI18n);

const i18n = new VueI18n({
    // locale = 提取本地的"locale"設定，如尚未設定預設為"tw"中文檔
    locale: localStorage.getItem("locale") || "tw",
    messages: { en, tw }
});

export default i18n;