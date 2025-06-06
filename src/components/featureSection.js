import { WindowIcon, StarIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Log your listens.',
    description:
      'Track the albums, EPs, and singles you listen to — from first spins to repeat plays. Jukeboxd lets you easily document your listening habits over time.',
    icon: WindowIcon,
  },
  {
    name: 'Rate and review.',
    description:
      'Leave quick thoughts or in-depth reflections. Whether it’s a 5-star masterpiece or a total skip, your opinions help tell the story of your taste.',
    icon: StarIcon,
  },
  {
    name: 'Build your library.',
    description:
      'Create curated lists, catalog favorites, and organize your music world however you want — from genre deep-dives to yearly wrap-ups.',
    icon: BuildingLibraryIcon,
  },
]


export default function Example() {
  return (
    <div className="bg-[#14091c] overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold accent-jukeboxd">Discover more</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A better way to track your listening
              </p>
              <p className="mt-6 text-lg/8 text-white">
              Ditch the spreadsheets and scattered notes — Jukeboxd helps you 
              log every album, single, and sonic detour with ease. Build your 
              personal archive, reflect on what moves you, and stay inspired by
              your evolving taste alongside your friends.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold primary-jukeboxd">
                      <feature.icon aria-hidden="true" className="absolute text-white top-1 left-1 size-5" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://i.imgur.com/ZTM53nj.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl border border-[#14091c] hover:border-[#5f3c69] transition-colors duration-200 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
