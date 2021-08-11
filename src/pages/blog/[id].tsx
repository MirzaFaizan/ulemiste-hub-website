import fetchArticleAndMoreArticles from '@/modules/blog/api/fetchArticleAndMoreArticles';
import { IArticle } from '@/modules/blog/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';

interface IProps {
    // article: IArticle;
    article: { articleId: string };
}
export const BlogSingle: FC<IProps> = ({ article }) => {
    console.log(article);
    return <div>yo {article.articleId}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const articleId = params?.id as string;
    const articleIdType = params?.idType as string;
    console.log(articleId);
    // const article = await fetchArticleAndMoreArticles(articleId, articleIdType);
    return { props: { article: { articleId } } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    };
};

export default BlogSingle;
