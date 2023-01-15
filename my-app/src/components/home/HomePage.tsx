import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { IProductSearch } from "./types";

const HomePage = () => {
  const { GetProductList } = useActions();
  const [search, setSearch] = useState<IProductSearch>({
    page: 1,
  });

  const { list, current_page, count_page, total } = useTypedSelector(
    (store) => store.product
  );
  // useSelector((store: any) => store.product as IProductState);

  useEffect(() => {
    GetProductList(search);
  }, [search]);

  const content = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  const buttons: Array<number> = [];
  for (let i = 1; i <= count_page; i++) buttons.push(i);

  const paginate = buttons.map((page) => {
    return (
      <li key={page} className="page-item">
        <Link
          to={"?page=" + page}
          onClick={() => setSearch({ page })}
          className={classNames("page-link", { active: page === current_page })}
        >
          {page}
        </Link>
      </li>
    );
  });

  return (
    <>
      {console.log("Page render web app")}
      <h1 className="text-center">Головна сторінка</h1>
      <h4>
        Кількість записів <b>{total}</b>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>{content}</tbody>
      </table>
      <nav>
        <ul className="pagination">{paginate}</ul>
      </nav>
    </>
  );
};
export default HomePage;
