import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root(): JSX.Element {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '10px' }}>
                <Outlet />
            </main>
        </div>
    )
}