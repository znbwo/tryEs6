function timeout(ms) {
  return new Promise((resolve, reject) => {
    throw new Error("err");
    setTimeout(resolve, ms, 'done');
    setTimeout(reject, ms, 'no done');
  });
}

timeout(100).then((value) => {
  console.log(value);
},(err)=>{
    console.log(err);
});