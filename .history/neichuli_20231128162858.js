let id;
id = setTimeout(function () {
  console.log("exec~");
  clearTimeout(id);
});
