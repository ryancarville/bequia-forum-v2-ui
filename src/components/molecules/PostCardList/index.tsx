import PostCard from '@Atoms/PostCard'
import React, {FC} from 'react'
import styles from './postCardList.module.css'

interface IPostCardListProps {
  forumTitle: string;
  posts: [];
}
const PostCardList: FC<IPostCardListProps> = ({forumTitle, posts}) => {
  console.log(posts)
  return (
    <div className={styles.postListWrapper}>
      <h1>{forumTitle}</h1>
      {!!posts && posts.length ? (
        posts.map((post: any) => (
          <PostCard
            key={post.sk}
            title={post.title}
            description={post.content}
          />
        ))
      ) : (
        <h2>No posts yet</h2>
      )}
    </div>
  );
}

export default PostCardList;