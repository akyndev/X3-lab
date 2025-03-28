import { Montserrat } from "next/font/google"
import LocalFont from "next/font/local"

export const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"]
})

export const nomixa = LocalFont({
  src: [
    {
      path: "./Nomixa-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./Nomixa-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./Nomixa-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./Nomixa-ExtraBold.otf",
      weight: "900",
      style: "normal"
    }
  ]
})
