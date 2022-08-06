export const getStaticPaths = async () => {
  var array = [];
  let sheetName = "MASTER";
  let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
  let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${fileCode}/values/${sheetName}?alt=json&key=${APIkey}`
  )
    .then((response) => response.json())

    .then((data) => {
      for (var i = 1; i < data.values.length; i++) {
        array.push({
          code: data.values[i][0],
          category: !data.values[i][1] ? "" : data.values[i][1],
          brand: data.values[i][2],
          title: data.values[i][3],
          brief: data.values[i][4],
          description: data.values[i][5],
          application: data.values[i][6],
          techcnial: data.values[i][7],
          img: !data.values[i][8]
            ? "/placeholder.png"
            : "https://drive.google.com/uc?export=view&id=" + data.values[i][8],
          ml: !data.values[i][9] ? "" : data.values[i][9],
        });
      }
    });

  const paths = array.map((product) => {
    return {
      params: { slug: product.code.toString() || "404" },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
