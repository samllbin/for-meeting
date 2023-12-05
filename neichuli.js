let id = setTimeout(function () {
  clearTimeout(id);
  console.log("exec~");
});
