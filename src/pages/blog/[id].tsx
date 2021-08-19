import fetchArticleAndMoreArticles from '@/modules/blog/api/fetchArticleAndMoreArticles';
import { IArticlePage } from '@/modules/blog/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import BlogLayout from '@/common/components/Layouts/BlogLayout';
import ArticleCard from '@/modules/blog/components/ArticleCard';

export const BlogSingle: FC<IArticlePage> = ({
    article,
    suggestedArticles
}) => {
    return (
        <BlogLayout title={article.title} featuredImage={article.featuredImage}>
            <div className="text-lg text-justify my-6">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <div className="container mx-auto p-8 ">
                <h1 className="text-2xl lg:text-4xl text-center text-primary">
                    Read more articles
                </h1>
                <div className="flex flex-wrap py-20">
                    {suggestedArticles.map((article) => (
                        <ArticleCard key={article.id} {...{ article }} />
                    ))}
                </div>
            </div>
        </BlogLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const articleId = params?.id as string;
    const articlePageData = await fetchArticleAndMoreArticles(articleId);
    return { props: { ...articlePageData } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    };
};

export default BlogSingle;
