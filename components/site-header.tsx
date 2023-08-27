import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/registry/new-york/ui/button"
import  Nav  from "@/components/Nav"

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky p-3 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex  justify-between h-14 items-center">

      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/icons/logo.jpg'
          alt='logo'
          width={40}
          height={40}
          className='object-contain'
        />
        <p className='logo_text'>Excellent Service</p>
      </Link>

        <div className="hidden md:block items-center space-x-4 lg:space-x-6">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="customers"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          href="products"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Products
        </Link>
        <Link
          href="tasks"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Tasks
        </Link>
        <Link
          href="settings"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </Link>
                    
        </div>        
        <MobileNav />

        <div className="flex justify-end">
          <div className="w-full flex-1 flex md:justify-end gap-2">
            <CommandMenu />
            <Nav />
          </div>
        </div>
      </div>
    </header>
  )
}
