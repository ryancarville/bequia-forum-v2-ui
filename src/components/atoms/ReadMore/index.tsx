import styles from './readMore.module.css'
import React, {FC, useEffect, useState} from 'react'
interface IReadMoreProps {
  content: string;
  threshold?: number;
  initialIsMore?: boolean;
}


const ReadMore: FC<IReadMoreProps> = ({content, threshold = 100, initialIsMore = false}) => {
  const [isMore, setIsMore] = useState<boolean>(initialIsMore);
  const [text, setText] = useState<string>(content);
  // const [currThreshold, setCurrThreshold] = useState<number>(threshold);

  useEffect(() => {
    if (isMore) setText(content);
    else if (!!content) {
      setText(content.substring(0, threshold));
    }
  }, [threshold, content, setText, isMore])

  return (
    <div className={styles.readMoreWrapper}>
      <p>
        {text}
        <span
          onClick={() => setIsMore(!isMore)}
          className={styles.readMoreActionText}
        >
          {isMore ? '...Read Less' : '...Read More'}
        </span>
      </p>
    </div>
  );
}
export default ReadMore;