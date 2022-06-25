import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<MainPage></MainPage>} />
				<Route path="/UploadPage" element={<UploadPage></UploadPage>} />
				<Route path="/ProductPage/:id" element={<ProductPage></ProductPage>} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
