const { createApp } = Vue;

createApp({
  name: "ProgressIndicator",
  data() {
    return {
      scY: 0,
      progress: 0,
      hamburgerIcon: true,
      screenMode: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.updateProgressIndicator);
  },
  methods: {
    handleScroll: function () {
      this.scY = window.scrollY;
    },
    goTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    updateProgressIndicator() {
      const { documentElement, body } = document;
      let windowScroll = body.scrollTop || documentElement.scrollTop;
      let height = documentElement.scrollHeight - documentElement.clientHeight;
      this.progress = (windowScroll / height) * 100 + "%";
    },
  },
}).mount("#app");
