// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
// 	res.status(200).json({ name: "John Doe" });
// }

const getProducts = (req, res) => {
	var array = [];
	let categoriesArray = [];
	let brandsArray = [];

	let sheetName = "MASTER";
	let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
	let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";

	fetch(
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
						? "barbijo.png"
						: "https://drive.google.com/uc?export=view&id=" + data.values[i][8],
					ml: !data.values[i][9] ? "" : data.values[i][9],
				});

				categoriesArray.push(data.values[i][0]);
				brandsArray.push(data.values[i][2]);
			}

			res.send(
				JSON.stringify([
					array,
					categoriesArray.filter((v, i, a) => a.indexOf(v) === i),
					brandsArray.filter((v, i, a) => a.indexOf(v) === i),
				])
			);
		});
};

export default getProducts;
