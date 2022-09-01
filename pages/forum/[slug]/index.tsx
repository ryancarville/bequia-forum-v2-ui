import PageLayout from '@Layouts/PageLayout'
import MainContent from '@Layouts/WithSidebar/MainContent'
import PostCardList from '@Molecules/PostCardList'
import categoriesService from '@Services/categories/categories.service'
import postServices from '@Services/posts/posts.services'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const PermitVisasGovernment = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<[] | null>([]);
  const { forumTitle, forumDescription, id } = router.query

  useEffect(() => {
    const getPosts = async () => {
      const { results } = await postServices().listPosts(id);
      if (!!results) setPosts(results);
      setPosts(null);
    }

    if (!!posts && posts.length === 0) getPosts();

  },[posts, setPosts, id])

  return (
    <PageLayout
      pageTitle={forumTitle}
      pageDescription={forumDescription}
      pageKeywords={`${forumTitle}, Bequia, forum, SVG `}
    >
      <MainContent>
        <div><h1>{forumTitle}</h1></div>
        <PostCardList posts={posts}/>
      </MainContent>
    </PageLayout>
  );
}

export default PermitVisasGovernment;