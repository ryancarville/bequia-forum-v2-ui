import { ImgHTMLAttributes } from "react"

export interface INextImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}