import { PresentationChartBarIcon, CircleStackIcon, BellAlertIcon, ArrowPathRoundedSquareIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const items = [
  {
    name: 'Swap & Bridge',
    icon: ArrowPathRoundedSquareIcon,
    destination: '/swap',
    available: true,
  },
  {
    name: 'My Feed',
    icon: UserGroupIcon,
    destination: '/app',
    available: true,
  },
  {
    name: 'My Portfolio',
    icon: PresentationChartLineIcon,
    destination: '/portfolio',
    available: true,
  },
  {
    name: 'Deposit & Withdraw',
    icon: CircleStackIcon,
    destination: '/positions',
    available: false,
  },
  {
    name: 'Research',
    icon: PresentationChartBarIcon,
    destination: '/research',
    available: false,
  },
  {
    name: 'Manage Notifications',
    icon: BellAlertIcon,
    destination: '/notifications',
    available: false,
  },
]
const Sidebar = () => {
  return (
    <aside className="min-h-screen" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto w-56 bg-black min-h-screen">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="m-1.5 p-1.5">
            <span className="sr-only">WIRED</span>
            <h1 className="text-2xl font-bold text-white">WIRED</h1>
          </a>
        </div>
        <br />
        <br />
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.name}>
              {
                item.available ? (
                  <a
                    href={item.destination}
                    className="flex items-center decoration-white p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white hover:bg-violet-400 dark:hover:bg-violet-700"
                    style={{
                      color: 'white',
                    }}
                  >
                    <item.icon className="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ml-3 text-white decoration-white font-bold">{item.name}</span>
                  </a>
                ) : (
                  <a
                    href="#"
                    className="flex items-center decoration-white p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white hover:bg-violet-400 dark:hover:bg-violet-700"
                    aria-disabled="true"
                  >
                    <item.icon className="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="ml-3 decoration-white text-white-500">{item.name}</span>
                  </a>
                )

              }
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}


export default Sidebar;