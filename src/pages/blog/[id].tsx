import { IArticle } from '@/modules/blog/types';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';

interface IProps {
    article: IArticle;
}
export const BlogSingle: FC<IProps> = ({ article }) => {
    return <div>yo</div>;
};

export const getStaticProps: GetStaticProps = ({ params }) => {
    return { props: { article: { params } } };
};

export default BlogSingle;
