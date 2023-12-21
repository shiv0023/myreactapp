import Logo from "../Images/index ";
import { IoLocationOutline } from "react-icons/io5";
import { FaFlagUsa } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import FlexSliderComponent from "./FlexSlider";
const Header = () => {
    return (
        <div className="flex bg-black ">
            <div>
                <img className="w-[100px] text-center mt-7" src={Logo.images4} alt="Logo" />
            </div>
            <div className="text-white p-5">
                Delevering To Chandigarh
                <p className="flex text-blue-700 "> <IoLocationOutline />Update Location</p>
            </div>
            <div className="">
                <input className="text-center mt-10 rounded-lg "
                    type="text"
                    class=" px-4 py-2 border rounded-md border-black  focus:outline-none focus:ring focus:border-black-400"
                    placeholder="Enter text..."
                />
            </div>
            <div className=" mr-20  mt-2 p-6">
                <select className="">
                    <option className="text-white"> <FaFlagUsa />   EN</option>
                    <option>Hindi</option>
                    <option>Franch</option>
                    <option>Spanish</option>
                    <option>Telagu</option>
                    <option>malyalam</option>
                    <option>marathi</option>

                </select>
            </div>
            <div className="text-white p-5 mr-20 ">
                <p className="font-light">Hello, Sign In</p>
                <p>Account & Lists</p>
            </div>
            <div className=" text-white mt-10 pl-20">
                <p className="flex text-red-500"><FaCartPlus />Cart</p>
            </div>
        </div>


    )

}
export default Header;