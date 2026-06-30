import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage"
import NotesPage from "./pages/notePage/NotePage"
import ErrorPage from "./pages/errorPage/ErrorPage";
import Layout from "./pages/Layout"
import BooksPage from "./pages/booksPage/BooksPage";
import LoginPage from "./pages/loginPage/LoginPage"
import FavoritePage from "./pages/booksPage/favoritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <BooksPage></BooksPage>
      },
      {
        path: "/notes",
        element: <NotesPage></NotesPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/favorite",
        element: <FavoritePage></FavoritePage>
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
