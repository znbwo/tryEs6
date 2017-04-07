// throw new Error("outer err")
try {
  // throw new Error("try err")
  process.nextTick(function () {
    throw new Error("nextTick err")
  });
} catch (err) {
  console.log(err)
}