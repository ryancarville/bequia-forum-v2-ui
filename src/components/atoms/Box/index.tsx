import React, { FC } from 'react'
import { IBoxProps } from './box.types'

const Box: FC<IBoxProps> = (props) => {
  const {children, className} = props;
  return <div className={className}>{children}</div>;
}
export default Box;