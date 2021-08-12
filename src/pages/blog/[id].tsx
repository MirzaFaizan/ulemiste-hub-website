import fetchArticleAndMoreArticles from '@/modules/blog/api/fetchArticleAndMoreArticles';
import { IArticlePage } from '@/modules/blog/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import PageLayout from '@/common/components/Layouts/PageLayout';
import ArticleCard from '@/modules/blog/components/ArticleCard';

export const BlogSingle: FC<IArticlePage> = ({
    article,
    suggestedArticles
}) => {
    return (
        <PageLayout title={article.title}>
            <div className=" text-base">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <section className="bg-blueGray-100  ">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-lg text-center text-primary">
                        Read more articles
                    </h1>
                    <div className="flex flex-wrap">
                        {suggestedArticles.map((article) => (
                            <ArticleCard key={article.id} {...{ article }} />
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
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
