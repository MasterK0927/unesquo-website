// RootLayout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UNESQUO BIT Mesra",
  description: "Debating and Quizzing club of BIT Mesra",
};

// const myArray = [
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
//   "circle",
//   "x-shape",
// ];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} black-and-white-theme`}>
        {/* <div className="lines">
          {[1, 2, 3, 4].map((line) => (
            <div key={line} className={`line-${line}`}>
              <div className="shapes">
                {myArray.map((shape, index) => (
                  <div key={index} className={shape}></div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
        {children}
      </body>
    </html>
  );
}
