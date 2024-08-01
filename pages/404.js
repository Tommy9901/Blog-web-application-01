import { Footer } from "@/components/Footer/Footer"
import { Nav } from "@/components/Header/Nav"

export default function Custom404() {
    return( <div className="container bg-white px-8">
                <Nav />
                <div className="mx-[100px]">
                    <div className=" border-r-[1px]">404</div>
                    <div>
                        <div>Page Not Found</div>
                        <div>We're sorry, This page is unknown or does not exist the page you are looking for.</div>
                        <button className="btn">Back To Home</button>
                    </div>
                </div>

                <Footer />
            </div>
            );
    
  }