module.exports = {
  slug: function(string) {
    return string.replace(/[^a-zA-Z]/g, "_").toLowerCase();
  }
};
