import BlogLayout from '@/common/components/Layouts/BlogLayout';
import fetchAllArticles from '@/modules/blog/api/fetchAllArticles';
import ArticleCard from '@/modules/blog/components/ArticleCard';
import { IArticle } from '@/modules/blog/types';
import { GetStaticProps } from 'next';
import React, { FC, ReactElement } from 'react';

interface IProps {
    articles: IArticle[];
}
const Blog: FC<IProps> = ({ articles }): ReactElement => {
    return (
        <BlogLayout
            title="News and Articles"
            description="some latest news and articles">
            {articles.map((article) => (
                <ArticleCard key={article.id} {...{ article }} />
            ))}
        </BlogLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articles = await fetchAllArticles();
    return {
        props: {
            articles
        }
    };
};

export default Blog;
