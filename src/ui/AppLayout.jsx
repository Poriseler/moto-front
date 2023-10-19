import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
// import Main from "./Main"

function AppLayout() {
    return (
        <div className="grid h-screen grid-rows-[1fr_10fr_auto]">
            <Header />
            <div className="flex flex-col items-center">
                <Outlet />

            </div>
            {/* <Main /> */}
            <Footer />
        </div>
    )
}

export default AppLayout
