module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/styles/scss/main.scss";
          `
        }
      }
    }
  };