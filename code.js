exports.hello = () => {
  // debugger;
  let name = 'alice';
  if (name[0] === 'a') return 'A';
  else return 'L';
}

exports.user = (function () {
  // debugger;
  var name = 'Eve';
  return {
    name: name,
    greet: function () {
      console.log(`Hello ${this.name}!`);
    }
  }
})()