/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from "react";
import { Menu,Transition,Tab } from '@headlessui/react';
import { Fragment } from 'react';
import Marquee from "react-fast-marquee";
import DayNightToggle from 'react-day-and-night-toggle';

const links = [
  { href: '/Signup', label: 'Signup' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
  { href: '/Login', label: 'Login' },
]



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
    return (
      <>
      <Marquee >
        ADMISSION NOTICE FOR KINDERGARTEN(KG) AND CLASS 1 FOR 2023-24, PLEASE CHECK ADMISSION SECTION****** ISC-2022-ISSUE OF DOCUMENTS, KINDLY CHECK WEBSITE NOTICE BOARD****FEES CAN BE PAID ON ANY DAY BETWEEN 5TH AND 20TH OF EVERY MONTH.
  
      </Marquee>

      <Tab.Group>
        <Tab> <Menu>
          {({ open }) => (
        <>
      <Menu.Button>Menu</Menu.Button>
      <Transition
       show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      ></Transition>
      <Menu.Items >
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-blue  text-black'
                }`}
              >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu></Tab>

&nbsp;
       <Menu>
          {({ open }) => (
        <>
      <Menu.Button>Menu</Menu.Button>
      <Transition
       show={open}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      ></Transition>
      <Menu.Items >
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-blue  text-black'
                }`}
              >
                {link.label}<br/>
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items> 
  </>
      )}
      </Menu>
      

      <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />

   </Tab.Group>
    </>
    
    );
}
