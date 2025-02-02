import { Provider } from "react-redux";
import AppLoader from "./AppLoader";
import { store } from "src/state";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {


	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<I18nextProvider i18n={i18n}>
					<AppLoader />
				</I18nextProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
