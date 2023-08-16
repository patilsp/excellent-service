import "@/styles/globals.css";
import { Metadata } from "next"
import { cn } from "@lib/utils"
import { ThemeProvider } from "@components/providers"
import Provider from "@components/Provider";
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "Excellent Service ",
  description: "indian water purifier service ",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
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
        
            <Toaster />
            <div className="relative flex min-h-screen flex-col">
             
              <div className="flex-1">{children}</div>
              
            </div>

          
          </main>
        </Provider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
