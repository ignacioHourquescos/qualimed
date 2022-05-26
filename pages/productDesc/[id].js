import { useRouter} from "next/router";
import { useFetch } from "../../hooks/useFetch";
import Slug from './Slug';

export default function Id() {
    const router = useRouter();
    const { id } = router.query;

    const { loading, data } =  useFetch(`https://qualimed.herokuapp.com/articulos`);
    console.log(data)

    if (!loading) {
        const detail = data.find( id => id === (id) );
        console.log(detail)
    }
    

    // console.log(detail)
    // return<Slug detail={detail} />
}