import './App.css';
import { ThemeProvider } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from './components/Loading/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop';
import { mainTheme } from './themes/main-theme';
import { pages } from "./constants";
import { Page } from './interfaces/Page';
import { v4 as uuid } from "uuid";
import PageNotFound from './pages/PageNotFound';

const App = () => {
   
  const { isLoading } = useAuth0();
  
  if( isLoading ) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={mainTheme}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {pages.map((page: Page) => {
          return (
            <Route key={page.id} path={page.path} element={page.element} />
          );
        })}
        <Route key={uuid()} path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>    
  );
}

export default App;
