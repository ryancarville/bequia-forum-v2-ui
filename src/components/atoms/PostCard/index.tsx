import ReadMore from '@Atoms/ReadMore'
import React, {FC} from 'react'
import styles from './postCard.module.css'

interface IPostCardProps {
  title: string;
  description: string;
  width?: number;
  height?: number | string;
  readMoreThreshold?: number;
}
const PostCard: FC<IPostCardProps> = ({
  title,
  description,
  width = 100,
  height = 'auto',
  readMoreThreshold
}) => {
  return (
    <div key={title} className={styles.postCardWrapper}>
      <div>{title}</div>
      <ReadMore content={description} threshold={readMoreThreshold} />
    </div>
  );
};

export default PostCard