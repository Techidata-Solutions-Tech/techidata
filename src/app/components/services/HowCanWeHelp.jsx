import { ArrowUpRight } from 'lucide-react';

export default function TechiDataUI() {

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Navigation Bar (Optional) */}
        <div className="flex justify-center mb-8">
          <button className="px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors">
          ★ HOW CAN WE HELP?
          </button>
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Techidata, an Award-Winning<br className="hidden md:block" /> 
            Android App Development Company Helps?
          </h1>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Scaling a business isn't always straightforward, so we've reimagined the process. Whether you're enhancing your online presence,
            optimizing your marketing strategy, or streamlining operations, our agency empowers you with the right tools to succeed.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
              Let's Connect
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* AI based Learning Card 1 */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 mb-4">
              <div className="relative w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="font-bold text-lg">AI</span>
                <div className="absolute w-2 h-2 bg-black top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">AI based Learning</h3>
            
            <p className="text-gray-700">
              Create a stunning and user-friendly website that attracts new students 
              and engages current ones. Benefit: Improve brand image and increase enrollment.
            </p>
          </div>
          
          {/* Gamified Systems Card */}
          <div className="bg-red-100 p-8 rounded-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="48" height="48" className="fill-current text-black">
                <path d="M12 8L15 13H9L12 8Z" />
                <rect x="7" y="14" width="10" height="2" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Gamified Systems</h3>
            
            <p className="text-gray-700">
              Develop a custom mobile app that allows students to learn anytime, 
              anywhere. Benefit: Boost student engagement and accessibility
            </p>
          </div>
          
          {/* AI based Learning Card 2 */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 mb-4">
              <div className="relative w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="font-bold text-lg">AI</span>
                <div className="absolute w-2 h-2 bg-black top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute w-2 h-2 bg-black bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">AI based Learning</h3>
            
            <p className="text-gray-700">
              Create a stunning and user-friendly website that attracts new students 
              and engages current ones. Benefit: Improve brand image and increase enrollment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}