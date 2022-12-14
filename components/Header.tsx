import Link from "next/link";
import {useRouter} from "next/router";
import {useSession, signIn, signOut} from "next-auth/react";
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Image from "next/image";
import {CartBar} from "./Cart/CartBar";

const navigation = [
  {name: 'Główna', href: '/'},
  {name: 'Produkty', href: '/products'},
  {name: 'Produkty CSR', href: '/products-csr'},
  {name: 'O nas', href: '/about'},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-emerald-500">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8">
                  <Link
                    href="/"
                  >
                    <a>
                      <Image
                        className="h-8 w-8 rounded-lg"
                        src="https://github.com/aaqu.png"
                        alt="logo Aaqu"
                        layout="responsive"
                        width={1}
                        height={1}
                        quality={100}
                      />
                    </a>
                  </Link>
                </div>
                <div className="md:flex flex-row justify-between hidden">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        replace
                      >
                        <a
                          className={classNames(
                            router.pathname === item.href
                              ? 'bg-emerald-900 text-white'
                              : 'text-white hover:bg-emerald-700',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={router.pathname === item.href ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md bg-emerald-800 p-2 text-gray-400 hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div>
                {
                  session.status === "authenticated" ? (
                    <button type="button" onClick={() => signOut()} className="bg-white p-1.5 rounded-lg">Wyloguj</button>
                  ) : (
                    <button type="button" onClick={() => signIn()} className="bg-white p-1.5 rounded-lg">Zaloguj</button>
                  )
                }

              </div>
              <CartBar />
            </div>
          </div>


        </>
      )}
    </Disclosure>
  )
};