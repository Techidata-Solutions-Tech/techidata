import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center">
            <Image
              src="/td.png"
              alt="TechiData Logo"
              height={100}
              width={200}
            />
          </div>
          <p className="mt-2 text-gray-500">
            Data visualization, and expense management for your business.
          </p>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="mt-2 space-y-2">
              {[
                "Digital Invoice",
                "Insights",
                "Reimbursements",
                "Virtual Assistant",
                "Artificial Intelligence",
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-2 space-y-2">
              {[
                "About Us",
                "Newsletters",
                "Our Partners",
                "Career",
                "Contact Us",
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              {["Blog", "Pricing", "FAQ", "Events", "Ebook & Guide"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Follow Us</h3>
            <ul className="mt-2 space-y-2">
              {["LinkedIn", "Twitter", "Instagram", "Facebook", "YouTube"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <span className="cursor-pointer hover:text-gray-800">
            Privacy Policy
          </span>
          |
          <span className="cursor-pointer hover:text-gray-800">
            Terms & Conditions
          </span>
          |
          <span className="cursor-pointer hover:text-gray-800">
            Cookie Policy
          </span>
        </div>
        <p className="mt-4 md:mt-0">&copy; TechiData 2025</p>
      </div>
    </footer>
  );
}
