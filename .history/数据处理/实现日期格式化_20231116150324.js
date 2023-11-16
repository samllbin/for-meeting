function dateFormat(dateInput, format) {
  var day = dateInput.getDate();
  var month = dateInput.getMonth() + 1;
  console.log(dateInput.getMonth());
  var year = dateInput.getFullYear();
  format = format.replace(/yyyy/, year + "");
  format = format.replace("/MM", month + "");
  format = format.replace("/dd/", day + "");

  return format;
}

console.log(dateFormat(new Date("2020-12-01"), "yyyy/MM/dd")); // 2020/12/01
console.log(dateFormat(new Date("2020-04-01"), "yyyy/MM/dd")); // 2020/04/01
console.log(dateFormat(new Date("2020-04-01"), "yyyy年MM月dd日")); // 2020年04月01日
