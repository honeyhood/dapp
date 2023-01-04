import { PresentationChartBarIcon, CircleStackIcon, BellAlertIcon, ArrowPathRoundedSquareIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Swap & Bridge',
    description:
      'Leverage LiFi’s advanced bridge & DEX aggregation to swap between any supported token on any supported chain.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Deposit & Withdraw',
    description:
      'Deposit tokens into Vaults or Liquidity Pools to earn yield or withdraw your tokens at any time.',
    icon: CircleStackIcon,
  },
  {
    name: 'Market Research',
    description:
      'Get access to market research and insights from the leading sources in the ecosystem.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Push notifications',
    description:
      'Get notified about whatever you want, whenever you want. We support push notifications for all major browsers and mobile devices. ',
    icon: BellAlertIcon,
  },
  {
    name: 'Discuss with the community',
    description:
      'Join the community and discuss with other users about the latest news and developments in the ecosystem. Powered by Lens.',
    icon: UserGroupIcon,
  },
  {
    name: 'Portfolio',
    description:
      'Keep track of your portfolio and see how it’s performing. Powered by Covalent.',
    icon: PresentationChartLineIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40 features" id='features'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-violet-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to do web3</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Do all of your favorite on-chain and social activies in one place. Powered by the best tools in the ecosystem.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:text-center py-24">
          <h2 className="text-2xl font-semibold leading-8 text-violet-600">And anything else you want!</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-900 ">
            We are constantly working on new features and integrations. If you have any ideas, please let us know!
          </p>
          <br />
          <br />
          <a href="https://wired.canny.io/feature-requests" target="_blank" className='inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700'>Submit a request</a>
        </div>
      </div>
    </div>
  )
}
