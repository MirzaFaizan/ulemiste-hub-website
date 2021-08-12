import fetchArticleAndMoreArticles from '@/modules/blog/api/fetchArticleAndMoreArticles';
import { IArticlePage } from '@/modules/blog/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import PageLayout from '@/common/components/Layouts/PageLayout';

export const BlogSingle: FC<IArticlePage> = ({
    article,
    suggestedArticles
}) => {
    console.log('on the component', article);

    return (
        <PageLayout title={article.title}>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const articleId = params?.id as string;
    const article = await fetchArticleAndMoreArticles(articleId);
    console.log(article);
    return { props: { ...article } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    };
};

export default BlogSingle;
