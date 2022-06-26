import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
	let [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		axios
			.get("https://3a07e846-385d-469c-80a6-0a4c4cdfddcd.mock.pstmn.io/products")
			.then((result) => {
				products = result.data.products;
				setProducts(products);
			})
			.catch((error) => {
				console.log(`통신실패:${error}`);
			});
	}, []);

	return (
		<div>
			<div id="body">
				<div id="banner">
					<img src="images/banners/banner1.png" alt="" />
				</div>
				<h1>Products</h1>
				<div id="product-list">
					{products.map((product, idx) => {						
						return (
							<div className="product-card" key={idx}>
								<Link className="product-link" to={`/ProductPage/${product.id}`}>
									<div>
										<img className="product-img" src={product.imageUrl} alt={product.name} />
									</div>
								</Link>
								<div className="product-contents">
									<span className="product-name">{product.name}</span>
									<span className="product-price">{product.price}원</span>
									<div className="product-seller">
										<img src="images/icons/avatar.png" alt={product.seller} className="product-avatar" />
										<span>{product.seller}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default MainPage;
