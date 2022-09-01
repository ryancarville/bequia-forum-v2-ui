import { ReactNode } from "react"

export interface IHelmetProps {
  pageTitle: string;
  pageUrl: string;
  pageDescription: string;
  pageImageUrl?: string;
  pageKeywords?: string;
}