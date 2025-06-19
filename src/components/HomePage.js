import { useEffect,useState } from 'react';
import Nav from './Nav';
import FilterPage from './FilterPanel';
import Axios from 'axios';
import Card from './Card';
export default function HomePage(){

    const [products,setProducts] = useState([]);
    const [childProducts,setChildProducts] = useState([]);

    useEffect(()=>{
        Axios.get('https://dummyjson.com/products')
        .then((val)=>{
            setProducts(val.data.products);
            setChildProducts(val.data.products);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    function getChildFromParent(data){
        setChildProducts(data);
    }

    return(
        <div class="container">
            <Nav items={products} getState={getChildFromParent} />
            <div class="row">
                <FilterPage props={products} getState={getChildFromParent}/>
                <div class="col-10">
                    <div class="row d-flex justify-content-around">
                        {
                            childProducts.map((obj)=>{
                                return <Card object={obj} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}