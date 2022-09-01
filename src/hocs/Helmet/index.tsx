import React, {FC} from 'react'
import { IHelmetProps } from './helmet.types'
import Helmet from 'react-helmet';

const ReactHelmet: FC<IHelmetProps> = (props) => {
  const {pageTitle, pageUrl, pageDescription, pageImageUrl, pageKeywords} = props;
  return (
    <Helmet
      title={pageTitle}
      meta={[
        <meta name="viewport" content="width=device-width, initial-scale=1"/>,
        <meta name={'description'} content={pageDescription}/>,
        <meta name={'keywords'} content={pageKeywords} />,
        <meta name={'image'} content={pageImageUrl} />,
        <meta name={'og:title'} content={pageTitle}/>,
        <meta name={'og:url'} content={pageUrl}/>,
        <meta name={'og:description'} content={pageDescription}/>,
        <meta name={'og:image'} content={pageImageUrl} />,
      ]}
    />
  )
}
export default ReactHelmet;