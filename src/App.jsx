import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store,{ persistor} from "./app/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
          <AppRouter /></PersistGate>
          </BrowserRouter>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
