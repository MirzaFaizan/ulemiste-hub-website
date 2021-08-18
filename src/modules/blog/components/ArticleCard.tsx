import { IArticle } from '@/modules/blog/types';
import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';

interface IProps {
    article: IArticle;
}

const ArticleCard: FC<IProps> = ({ article }): ReactElement => {
    const router = useRouter();
    return (
        <div
            className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center min-w-full"
            onClick={() => router.push(`/blog/${article.id}`)}>
            <div className=" rounded overflow-hidden shadow-lg">
                <img
                    className="w-full"
                    src={article.featuredImage}
                    alt="article feature Image"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-4">
                        {article.title}
                    </div>
                    <div
                        className="text-gray-700 text-base truncate"
                        dangerouslySetInnerHTML={{ __html: article.excerpt }}
                    />
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default ArticleCard;
