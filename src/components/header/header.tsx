import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FiGithub } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
const Burger = dynamic(() => import('./burger'));

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-20

        flex

        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur
        supports-backdrop-blur:bg-white/80

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-gray-900/25
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <div className="flex items-center">
          <Burger />
          <Link
            href="https://napster-drx.vercel.app"
            className="
              flex
              flex-row
              items-center
        
              font-bold
              text-gray-600

              dark:text-white
            "
            passHref
          >
            <p className="font-semibold">Napster Docs</p>
          </Link>
        </div>
        <div className=" flex space-x-2">
          <a href="https://github.com/babyo77/napsterDrx-Public" target="blank">
            <FiGithub className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/babyo7_/" target="blank">
            <SiInstagram className=" h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
