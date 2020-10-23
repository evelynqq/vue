<template>
  <div id="nav">
    <router-link to="/">{{ $t("nav.Home") }}</router-link> |
    <router-link to="/ForList">{{ $t("nav.ForList") }}</router-link> |
    <!-- select綁定data中的locale值，點擊執行changeLocale() -->
    <select name="locale" id="locale" v-model="locale" @change="changeLocale()">
      <option value="tw" class="tw">中文</option>
      <option value="en" class="en">English</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 取得i18n中的locale值
      locale: this.$i18n.locale,
    };
  },
  methods: {
    // 切換語系
    changeLocale() {
      // 將i18n中locale的值變更為所選的設定值
      this.$i18n.locale = this.locale;
      // 在本地儲存"locale"的設定為目前選擇的選項
      localStorage.setItem("locale", this.locale);
    },
  },
};
</script>
