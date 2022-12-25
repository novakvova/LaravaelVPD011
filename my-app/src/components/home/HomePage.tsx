import { useEffect, useState } from "react";
import http from "../../http_common";
import { IProductItem } from "./types";

const HomePage = () => {

    const [list, setList] = useState<Array<IProductItem>>([]);    

    useEffect(()=>{
        http.get<Array<IProductItem>>("/api/products")
            .then(resp=> {
                const {data} = resp;
                setList(data);
            });
    },[]);

    const content = list.map((product)=> (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.detail}</td>
        </tr>
    ));

    return(
        <>
            {console.log("Page render web app")}
            <h1 className="text-center">Головна сторінка</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                </thead>

                <tbody>
                    {content}
                </tbody>

            </table>
        </>
    );
}
export default HomePage;