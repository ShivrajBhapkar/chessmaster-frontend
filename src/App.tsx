
import "./themes.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'
import Login from './screens/Login'
import { RecoilRoot } from 'recoil'
import { Layout } from "./layout";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import { ThemesProvider } from "./context/themeContext";
import { Settings } from "./screens/Settings";
import { Themes } from "./components/themes";
function App() {

  return (
    <>
      <div className="min-h-screen bg-bgMain text-textMain">
        <BrowserRouter>
          <RecoilRoot>
            <Suspense fallback={<Loader />}>
              <ThemesProvider>
              <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>} />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/game/:gameId"
                  element={<Layout><Game/></Layout>}
                  />
                  <Route
                    path='/settings'
                    element={<Layout><Settings /></Layout>}
                  >
                    <Route path="themes" element={<Themes />} />
                    </Route>
                </Routes>
              </ThemesProvider>
            </Suspense>
          </RecoilRoot>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
