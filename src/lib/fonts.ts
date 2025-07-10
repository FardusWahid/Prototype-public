import { Seymour_One, Poppins } from "next/font/google";

export const seymour = Seymour_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
