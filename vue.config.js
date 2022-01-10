module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/styles/scss/global.scss";
          `
        }
      }
    }
  };