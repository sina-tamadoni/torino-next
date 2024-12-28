const convertNum = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
const formatPrice = (price) => price.toLocaleString("fa-IR");
export { convertNum, formatPrice };
