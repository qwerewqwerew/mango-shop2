import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<div id="header">
				<div id="header-area">
					<img src="images/icons/logo.png" alt="" />
				</div>
			</div>

			<Routes>
				<Route path="/" element={<MainPage></MainPage>} />
				<Route path="/UploadPage" element={<UploadPage></UploadPage>} />
				<Route path="/ProductPage/:id" element={<ProductPage></ProductPage>} />
			</Routes>

			<div id="footer">
				<a href="#">회사소개</a>
				<a href="#">이용약관</a>
				<a href="#">통신판매업:123-1234</a>
				<a href="#">사업자등록번호:456-56-78951</a>
				<a href="#"></a>
			</div>

		</React.Fragment>
	);
}

export default App;
