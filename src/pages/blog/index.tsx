import PageLayout from '@/common/components/Layouts/PageLayout';
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
        <PageLayout
            title="News and Articles"
            description="some latest news and articles">
            {articles.map((article) => (
                <ArticleCard key={article.id} {...{ article }} />
            ))}
        </PageLayout>
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
