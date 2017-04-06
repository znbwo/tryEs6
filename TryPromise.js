function timeout(ms) {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve, ms, 'done');
    setTimeout(reject, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});