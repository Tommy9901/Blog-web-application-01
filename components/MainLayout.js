import { Nav } from "./Header/Nav";
import { Footer } from "./Footer/Footer";

export function MainLayout({children}){
    return(
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
}