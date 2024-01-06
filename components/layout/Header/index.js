/* eslint-disable prettier/prettier */
import LogoIcon from "@/images/Logo.png"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <nav className="bg-pink-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 py-8 relative">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse absolute left-0">
            <Image src={LogoIcon} className="h-8" alt="Flowbite Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
            <li className="px-6 border-r-[1px] border-gray-light">
              <a href="#" className="block text-[20px] leading-none text-white rounded md:bg-transparent md:text-pink-main md:p-0" aria-current="page">{t("home")}</a>
            </li>
            <li className="px-6 border-r-[1px] border-gray-light">
              <a href="#" className="block text-[20px] leading-none text-gray-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-main md:p-0">{t("our_therapy")}</a>
            </li>
            <li className="px-6 border-r-[1px] border-gray-light">
              <a href="#" className="block text-[20px] leading-none text-gray-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-main md:p-0">{t("about_us")}</a>
            </li>
            <li className="px-6 border-r-[1px] border-gray-light">
              <a href="#" className="block text-[20px] leading-none text-gray-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-main md:p-0">{t("login")}</a>
            </li>
            <li className="px-6">
              <Link href="#" className="block text-[20px] leading-none text-gray-main rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-main md:p-0" locale={`${router.locale === "en" ? 'ar' : "en"}`}>{router.locale === "en" ? 'العربية' : "en"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
