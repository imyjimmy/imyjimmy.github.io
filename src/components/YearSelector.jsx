import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function YearSelector() {
  const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  const [year, setYear] = useState()

  // const handleRemoveItem: (
  //   key: string
  // ) => React.MouseEventHandler<HTMLButtonElement> =
  //   (key: string) => (event: MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault()
  //     removeItem(key)
  //   }

  const handleSelectYear = (year) => (event) => {
    console.log('select:', event, event.target, event.target.value, year)
    event.preventDefault()
    setYear(year)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-40 justify-center gap-x-1.5 bg-black dark:bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
        { year ?? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> }
        {/* {year} */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-42 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            { years.map(year => (
              <Menu.Item key={year} >
              {({ active }) => (
                <div
                  onClick={handleSelectYear(year)}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-3xl'
                  )}
                >
                  {year}
                </div>
              )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
