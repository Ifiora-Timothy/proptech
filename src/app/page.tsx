import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen  text-white">
      {/* Navigation */}
      <nav className="bg-[#1652F0] rounded-xl mx-5 sm:mx-10 mt-7">
        <div className="max-w-7xl mx-auto px-6 sm:px-24">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex justify-between w-full">
              <Link 
                href="/" 
                className="text-white hover:opacity-80 transition-opacity"
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:opacity-80 transition-opacity"
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:opacity-80 transition-opacity"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className=" mx-auto px-5 sm:px-10 pt-[100px] sm:pt-8">
        {/* Date Badge */}
        <div className="inline-block">
          <span className="text-[#02060E] bg-[#7AA2F7] px-4 py-2 rounded-full text-sm">
            May 24th - 25th, 2025
          </span>
        </div>

        {/* Hero Text */}
        <div className="space-y-2 sm:space-y-6">
          <h1 className="text-[55px] leading-none md:text-7xl lg:text-[110px] lg:leading-[110px] xl:text-[120px] xl:leading-[130px] font-maname">
            The Enugu
            <br />
            International
            <br />
            Housing Exhibition 1.0
          </h1>
          <p className="text-xl  md:text-3xl font-grotesque pt-4 text-gray-300  sm:max-w-3xl">
            The Biggest Housing Exhibition Conference in Southern Nigeria
          </p>
        </div>
      </main>
    </div>
  )
}

