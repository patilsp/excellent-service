import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@components/command-menu"
import { Icons } from "@components/icons"
import { MainNav } from "@components/main-nav"
import { MobileNav } from "@components/mobile-nav"
import { ModeToggle } from "@components/mode-toggle"
import { buttonVariants } from "@registry/new-york/ui/button"
import Nav from "@components/Nav";
import { Search } from "@components/search"

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky p-3 top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="ml-auto flex items-center space-x-4">
            <Search />
          </div>
                   
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            
            <ModeToggle />
            <Nav />
        
        </div>
      </div>
    </header>
  )
}
