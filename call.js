function duckCount(...args) {
  return args.some(function(arg) {
    return arg.hasOwnProperty('quack');
  });
}

module.exports = duckCount;
