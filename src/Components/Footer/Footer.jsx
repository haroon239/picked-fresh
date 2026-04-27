const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <ul className="space-y-2">
              <li>No.123 Chalingt Gates</li>
              <li>( +01 9876543210 )</li>
              <li>Locations</li>
            </ul>
          </div>
  
          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 mb-4 rounded-lg text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>Copyright 2023 By Muhammad Haroon Butt</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  