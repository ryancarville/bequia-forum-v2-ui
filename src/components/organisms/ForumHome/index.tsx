import categoriesService from '@Services/categories/categories.service'
import { ICategoriesResponse, ICategory } from '@Services/categories/categoriesService.types'
import { uriMapper } from '@Shared/utils/common.util'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './forumHome.module.css';

export default function ForumHome() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategories = async () =>  {
      const allCats: ICategoriesResponse = await categoriesService().listCategories();
      if (allCats.results.length) setCategories(allCats.results);
    }
    if (!!!categories.length) getCategories();
  }, [categories]);

  const getElements = () => {
    console.log(categories)
    return (
      <div className={styles.forumGrid}>
        {categories.map((cat: ICategory) => (
          <div key={cat.title} className={styles.forumGridItem}>
            <span className={styles.forumDetails}>
              <Link
                href={{
                  pathname: `/forum/${uriMapper(cat.title, '/', '-')}`,
                  query: {forumTitle: cat.title, id: cat.id, forumDescription: cat.description}

                }}

              >
                {cat.title}
              </Link>
              <p>{cat.description}</p>
            </span>
            <span className={styles.forumStatsWrapper}>
              <span className={styles.forumStats}>
                {cat.numOfPosts} <p>Posts</p>
              </span>
              <span className={styles.forumStats}>
                {cat.numOfThreads} <p>Threads</p>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  return !!categories.length ? getElements() : <></>;
}
