import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./pages/Root"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import { Theme, ThemeProvider } from "@emotion/react"
import { CssBaseline, ThemeOptions, createTheme, useMediaQuery } from "@mui/material"
import defineTheme from "./utils/defineTheme"
import EEAPassport from "./pages/EEAPassport"
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Create from "./pages/Create"

let themeContext: ThemeOptions
let theme: Theme

function setTheme(): void {
  theme = createTheme({...themeContext})
}

function App() {
  // Handle routing  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/about', element: <About /> },
        { path: '/EEAPassports', element: <EEAPassport /> },
        { path: '/EEAPassports/Create', element: <Create />}
      ]
    }
  
  ])

  // Handle theme
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  if (prefersDarkMode) {
    themeContext = defineTheme('dark')
    setTheme()
  } else {
    themeContext = defineTheme('light')
    setTheme()
  }

  // Handle react query
  const queryClient = new QueryClient()

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App