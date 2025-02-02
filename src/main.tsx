import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import {pdfjs} from "react-pdf";

const container = document.getElementById("root") as Element;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();
const root = createRoot(container!);
root.render(<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
