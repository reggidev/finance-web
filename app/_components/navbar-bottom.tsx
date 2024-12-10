'use client'

import { ArrowLeftRightIcon, HouseIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBarBottom = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 grid w-full grid-cols-2 items-center justify-center border-t bg-background py-2 lg:hidden">
      <Link
        href="/"
        className={`border-r ${pathname === '/' ? 'font-bold text-primary' : ''}`}
      >
        <div className="mx-auto flex w-fit flex-col items-center rounded-full px-6 py-2 hover:bg-muted-foreground/20">
          <HouseIcon size={20} />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link
        href="/transactions"
        className={`${pathname === '/transactions' ? 'font-bold text-primary' : ''}`}
      >
        <div className="mx-auto flex w-fit flex-col items-center rounded-full px-6 py-2 hover:bg-muted-foreground/20">
          <ArrowLeftRightIcon size={20} />
          <p>Transações</p>
        </div>
      </Link>
    </nav>
  )
}

export default NavBarBottom