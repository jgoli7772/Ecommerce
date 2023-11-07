import { Products } from "../Data/Products";
import { Link } from "react-router-dom";
const Product = ({ handleCart }) => {
  const items = Products;
  return (
    <>
      <div className="item-container-product">
        {items.map((list, index) => (
          <div key={index} className="card-product">
            <img src={list.images} alt={list.title} />
            <div>
              {/* <h1 className="text">{list.title}</h1> */}
              <Link to={list.title} className="product" data-test={list.title}>
                {list.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
