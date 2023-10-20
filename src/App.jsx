import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import AppLayout from "./ui/AppLayout"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import ArticleList from "./pages/ArticleList"
import SearchResults from "./pages/SearchResults"
import ArticleDetails from "./pages/ArticleDetails"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CreateArticle from './pages/CreateArticle'
import EditArticle from "./pages/EditArticle"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/artykuly/:slug" element={<ArticleDetails />} />
            <Route path="/artykuly/:slug/edytuj" element={<EditArticle /> } />
            <Route path="/artykuly/kategorie/:tag" element={<ArticleList />} />
            <Route path='/dodaj-artykul/' element={<CreateArticle />} />
            <Route path="/szukaj/" element={<SearchResults />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
