import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Movie from './pages/Moviepage';
import Product from './pages/Product';
import PhotoAlbum from './pages/PhotoAlbum';
import { darkTheme, lightTheme } from './theme';
import Signin from './pages/Signin'
import Register from './pages/Register';
import Profile from './pages/Profile';

function Router() {

  return (
      <ConfigProvider theme={lightTheme} >
        <HelmetProvider context={{}}>
          <BrowserRouter >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photoalbum" element={<PhotoAlbum />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="photoalbum/music">
                <Route path="id/:musicId" element={<Product />} />
                <Route path="id/:musicId/photoalbum/music/id/:musicId" element={<Product />} />
              </Route>
              <Route path="music">
                <Route path="id/:productId" element={<Product />} />
                <Route path="id/:productId/music/id/:productId" element={<Product />} />
              </Route>
              <Route path="auth">
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
  );
}

export default Router;