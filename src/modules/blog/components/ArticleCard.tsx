import { IArticle } from '@/modules/blog/types';
import React, { ReactElement } from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
    article: IArticle;
}

const ArticleCard: FC<IProps> = ({ article }): ReactElement => {
    const router = useRouter();
    return (
        <div
            className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center min-w-full"
            onClick={() => router.push(`/blog/${article.id}`)}>
            <div className="grid grid-cols-10 grid-flow-col min-w-0 break-words bg-rose-200 w-full mb-8 shadow-lg  p-4">
                <div className="mb-2 relative  md:m-4 md:mt-0 col-span-3">
                    <Image
                        alt="Article Image"
                        src={article.featuredImage ?? '/assets/logo.png'}
                        layout="intrinsic"
                        height="50"
                        width="80"
                    />
                </div>
                <div className="px-4 py-5 col-span-7">
                    <h6 className="text-xl font-semibold ">{article.title}</h6>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
