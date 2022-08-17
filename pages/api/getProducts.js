export default async function getProducts() {
  let sheetName = "MASTER";
  let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
  let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${fileCode}/values/${sheetName}?alt=json&key=${APIkey}`
  );
  if (!response.ok) {
    throw new Error(`This is an HTTP error: The status is ${response.status}`);
  }
  let actualData = await response.json();

  return actualData.values;
}
