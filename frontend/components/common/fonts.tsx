import localFont from "next/font/local";
/**
 * Fampiasana azy

```tsx
import { NextflixFonts } from "@/components/common/fonts"
<h1 className={`${NetflixMedium.className}`}>Hello world!</h1>
```
 */
export const NetflixMedium = localFont({
  src: "../../public/fonts/NetflixSans_W_Md.woff2",
  style: "medium",
});
export const NetflixRegular = localFont({
  src: "../../public/fonts/NetflixSans_W_Rg.woff2",
  style: "regular",
});
export const NetflixBold = localFont({
  src: "../../public/fonts/NetflixSans_W_Bd.woff2",
  style: "bold",
});
export const NetflixBlack = localFont({
  src: "../../public/fonts/NetflixSans_W_Blk.woff2",
  style: "black",
});
