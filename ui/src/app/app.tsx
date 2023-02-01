
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { store } from "./store";
import { Box, ChakraProvider } from '@chakra-ui/react'
import { routes } from "./routing";

const App = () => {
  return (
    <ChakraProvider>
      <Box height={'100vh'}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              {routes.map(({path, element}) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </BrowserRouter>
        </Provider>
      </Box>
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
