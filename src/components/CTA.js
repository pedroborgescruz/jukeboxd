export default function CTA() {
    return (
      <div style={{backgroundColor: "#19121f"}}>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#1b0c27] border border-[#3e2046] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Join a community made for those who love music.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                The world is dying to hear what you listen to.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/registration"
                  className="rounded-md border border-[#8130fc] bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="/login" className="text-sm/6 font-semibold text-white">
                  Log in <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://compote.slate.com/images/6d8ff781-bc6e-42ca-84cf-55818c32ee50.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 border border-[#8130fc] ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  