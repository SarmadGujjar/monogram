import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-custom-purple text-white'>
            <main className='flex flex-col md:flex-row mx-4 md:mx-40 md:gap-0 gap-10 justify-between pt-32'>
                <div className="md:gap-10 gap-3 flex flex-col">
                    <h2 className='text-xl font-semibold text-white uppercase'>monogram</h2>
                    <span className="w-40 flex text-gray-400">305 King St. W. <br />
                        Suite 502 <br />
                        Kitchener, ON <br />
                        Canada
                    </span>

                </div>
                <div className='flex flex-col  gap-3 text-gray-400'>
                    <h2 className='font-semibold text-white md:mb-7 uppercase'>quick links</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Home</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>How it works</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Shop</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Download</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='font-semibold text-white md:mb-7 uppercase'>Help</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>FAQs</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Support center</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Shipping and Sales</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='font-semibold md:mb-7 text-white uppercase'>Information</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>About Us</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Work with Us</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Privacy Policy</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Terms of Use</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Terms of Sale</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"></main>Press Kit</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400 pb-20'>
                    <h2 className='font-semibold text-white md:mb-7 uppercase'>subscribe to monogram</h2>
                    <main className='flex gap-3 mb-3'><span className='text-gray-400 w-56'>Master productivity with Creative Console and get all the latest Monogram news.</span></main>
                    <main className='flex gap-3 mb-3'><span className="pt-1 text-gray-400"><FaPhone /></span><span className='text-gray-400'>(+1) 435 3533</span></main>
                    <span className="flex gap-6 text-gray-400 text-2xl">
                        <AiFillTwitterCircle />
                        <FaFacebook />
                        <FaSquareInstagram /></span>                </div>

            </main>

        </div>
    )
}

export default Footer