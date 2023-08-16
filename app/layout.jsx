import "@/styles/globals.css";
import { Metadata } from "next"
import { cn } from "@lib/utils"
import { ThemeProvider } from "@components/providers"
import { SiteHeader } from "@components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@components/tailwind-indicator"
import { ThemeSwitcher } from "@components/theme-switcher"
import Provider from "@components/Provider"
import { Toaster } from "react-hot-toast"


export const metadata = {
  title: "Excellent Service ",
  description: "indian water purifier service ",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head />

     <body
          className={cn(
            "min-h-screen bg-background antialiased"            
          )}
        >

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <Provider>
          <main className='app'>
        
            
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />

            </div>

          
          </main>
        </Provider>
  
            <TailwindIndicator />
          </ThemeProvider>
          <ThemeSwitcher />
          <Toaster />
    </body>
  </html>
);

export default RootLayout;
