import React, { FC } from 'react'
import { INextImageProps } from './nextImage.types'
import Image from 'next/image';

const NextImage: FC<INextImageProps> = (props) => {
  const { src, alt, width, height } = props;
  return <Image src={src} alt={alt} width={width} height={height} />;
}
export default NextImage;
