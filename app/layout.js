import "@app/globals.css";
import { Source_Code_Pro } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@components/Navbar";
import Foot from "@components/Foot";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Matthew Tapia",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={source_code_pro.className}>
        <div className="bg-gradient-to-b from-sky-100 via-sky-900 to-sky-950">
          <header>
            <Navbar />
          </header>

          {children}

          <footer>
            <Foot />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
