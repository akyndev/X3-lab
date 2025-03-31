import LocalFont from "next/font/local"


export const nomixa = LocalFont({
  src: [
    {
      path: "./Nomixa/Nomixa-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./Nomixa/Nomixa-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./Nomixa/Nomixa-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./Nomixa/Nomixa-ExtraBold.otf",
      weight: "900",
      style: "normal"
    }
  ]
})


export const mont = LocalFont({
  src: [
    {
      path: "./Mont/Mont-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./Mont/Mont-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ]
})