const Query = {
  message: (root, args, ctx, info) => {
    return {
      text: "HELLO WORLD"
    };
  }
};

module.exports = Query;
