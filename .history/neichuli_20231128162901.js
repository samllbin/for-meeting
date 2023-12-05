let id;
id = setTimeout(function () {
  clearTimeout(id);
  console.log("exec~");
});
