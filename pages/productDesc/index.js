import { useRouter} from "next/router";
import { useFetch } from "../../hooks/useFetch";

import React, { useRef, useState, useEffect } from "react";

export default function Id() {
    const router = useRouter();
    const idEvent = router.query.id;
	const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("../api/getProducts")
			.then((response) => response.json())
			.then((data) => (setProducts(data[0]), setLoading(false)));
	}, []);


	// useEffect(() => {
	// 	fetch("../api/getProducts")
	// 		.then((response) => response.json())
	// 		.then((data) => (setProducts(data[0]), setLoading(false)));
	// }, []);    
    console.log(idEvent)
    // console.log(products)
    
    if (!loading) {
        let detail = products.find( (element) => element.title == idEvent );
        return<></>
    }
    

    // console.log(detail)
    // return<Slug detail={detail} />
}