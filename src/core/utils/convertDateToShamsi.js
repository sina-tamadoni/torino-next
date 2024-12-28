import moment from "jalali-moment";

function formatISODate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}/${month}/${day} ${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
}

function converDateToShamsi(date) {
  const shamsiDate = moment(date)
    .locale("fa")
    .format("YYYY/M/D HH:mm:ss")
    .split(" ")[0];
  return shamsiDate;
}
function convertToDateAndHours(isoData) {
  const shamsiDate = moment(isoData)
    .locale("fa")
    .format("YYYY/M/D HH:mm:ss")
    .split(" ")
    .join("-");
  return shamsiDate;
}

export { formatISODate, converDateToShamsi, convertToDateAndHours };
