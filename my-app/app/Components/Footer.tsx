export default function Footer() {
    return (
      <>
        <footer className="relative mt-[20px] ">
          <div className="footer p-5 border-t-2 leading-10 border-gray-300 flex flex-col md:flex-row justify-around gap-6 md:gap-12">
            <div className="w-full md:w-[14rem]">
              <h2 className="font-bold text-2xl">Funiro.</h2>
              <p className="leading-none">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
  
            <div className="w-full text-center md:text-left">
              <h4 className="font-bold">Navbar</h4>
              <ul className="space-y-2 font-bold">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            <div className="w-full text-center md:text-left font-bold">
              <h4 className="font-bold">Help</h4>
              <ul className="space-y-2">
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
  
            <div className="w-full text-center md:text-left">
              <h4 className="font-bold">Newsletter</h4>
              <input
                type="text"
                placeholder="Your Email"
                className="mt-2 p-2 border-b-2 border-gray-300 outline-none focus:border-yellow-600 w-full sm:w-[250px] md:w-[300px]"
              />
              <button type="submit" className="font-bold mt-3 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
  
          <div className="para absolute left-1/2 transform -translate-x-1/2 w-full text-center">
            <hr className="my-4 mx-auto w-[1000px] sm:w-[80%] md:w-[60%]" />
            <p className="font-normal">2024 Furniro. All rights reserved</p>
          </div>
        </footer>
      </>
    );
  }
  