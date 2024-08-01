import { Footer } from "@/components/Footer/Footer";
import { Nav } from "@/components/Header/Nav";
import { TopHeader } from "@/components/Header/TopHeader";

const Contact = () => {
  return (
    <div className="container mx-auto bg-white max-w-[1215px]">
      <Nav />
        <div className="mx-[200px] mt-[100px] mb-[166px]">
            <div className="mb-[39px]">
                <div className="mb-5 mt-3 ">
                    <h2 className="text-4xl font-semibold">Contact Us</h2>
                    <p className="max-w-[624px] font-normal text-base text-[#696A75] mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
                <div className="flex gap-[50px] ">
                    <div className="border-[1px] rounded-lg w-[294px] p-4 ">
                        <h3 className="font-semibold text-2xl mb-2.5">Address</h3>
                        <p className="font-normal text-lg text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="border-[1px] rounded-lg w-[294px] p-4">
                        <h3 className="font-semibold text-2xl mb-2.5">Contact</h3>
                        <p className="font-normal text-lg text-[#696A75]">313-332-8662 <br />
                        info@email.com</p>
                    </div>
                </div>
            </div>
            <div className="p-[29px] bg-[#F6F6F7] rounded-lg">
                <h1>Leave a Message</h1>
                <div>
                    <div className="flex gap-7 mt-6 mb-5">
                        <input type="text" placeholder="Your name" className="input input-bordered w-[225px] h-[38px] " />
                        <input type="text" placeholder="Your Email" className="input input-bordered w-[225px] h-[38px]" />
                    </div>
                    <div className="max-w-[478px] mb-5">
                        <input type="text" placeholder="SUBJECT" className="input input-bordered h-[35px] w-full" />
                    </div>
                    <div className="max-w-[478px] mb-[29px]">
                        <input type="text" placeholder="Write a message" className="input input-bordered w-full h-[134px] " />
                    </div>
                    <button className="btn bg-[#4B6BFB] text-white">Send Message</button>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Contact;
