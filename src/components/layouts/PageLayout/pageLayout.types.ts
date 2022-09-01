import { ReactNode } from "react"
import { IHelmetProps } from "../../../hocs/Helmet/helmet.types"

export interface IPageLayoutProps extends IHelmetProps {
  children: ReactNode;
}