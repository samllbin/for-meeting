function formatDate(dateInput: Date, format: string) {
  const day = dateInput.getDate();
  const month = dateInput.getMonth();
  const year = dateInput.getFullYear();

  format = format.replace("/yyyy/", year + "");
  format = format.replace("/MM", month + "");
  format = format.replace("/dd/", month + "");
}
