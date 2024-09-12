import { Star, BellRing, Zap } from 'lucide-react'

export default function HeroSection() {
    return (
        <div className="bg-[#071119] text-white py-16 px-4 flex flex-col min-h-screen">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    "Boost Your Online Presence with Custom Software & Tech Consulting"        </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                   We specialize in creating tailored software solutions and providing strategic tech consulting to help your business thrive online. Enhance your digital impact with our expert SEO optimization services.                </p>
                <button className="bg-[#00ff9d] text-[#0c0d0e] px-12 py-4 rounded-full font-medium border-2 border-[#00ff9d] hover:bg-[#071119] hover:text-white hover:border-[#00cc7d] transition-colors duration-300 ease-in-out w-60">
                    Quote now
                </button>
                <div className="flex items-center justify-center mt-4">
                    <span className="mr-2">4.8</span>
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                </div>
            </div>
            <div className="mt-16">
                <p className="text-center text-gray-400 mb-6">Companies that trust Ingabo Tech</p>
                <div className="flex justify-center items-center space-x-12">
                    <div className="text-[#00ff9d] font-bold text-xl flex items-center">
                        <BellRing className="mr-2" /> ODE
                    </div>
                    <div className="text-[#00ff9d] font-bold text-xl flex items-center">
                        <Zap className="mr-2" /> TURBO
                    </div>
                    <div className="text-[#00ff9d] font-bold text-xl">
                        LECOS
                    </div>
                    <div className="text-[#00ff9d] font-bold text-xl">
                        Adepts
                    </div>
                </div>
            </div>
        </div>
    )
}