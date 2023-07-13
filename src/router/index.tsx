import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/Layout';
import { HomePage, DetailPage, NotFoundPage } from '../pages';

const router = (
  <Route element={<Layout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="detail/:id" element={<DetailPage />} />
    <Route path="/*" element={<NotFoundPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
