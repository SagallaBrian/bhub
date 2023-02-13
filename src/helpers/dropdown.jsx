import { FaChevronDown } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const MiDropdown = ({ mydata }) => {
  const [selected, setSelected] = useState(mydata[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className=" relative mt-1">
        <Listbox.Button className="relative w-full cursor-default border border-blue-700 text-blue-700 py-2 pl-3 pr-8 sm:text-sm rounded">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute  inset-y-0 right-0 flex items-center pr-2">
            <FaChevronDown className=" h-3" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {mydata.map((lang, langIdx) => (
              <Listbox.Option
                key={langIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
                value={lang}
              >
                <span className={`block truncate `}>{lang.name}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default MiDropdown;
