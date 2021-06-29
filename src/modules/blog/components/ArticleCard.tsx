import { IArticle } from '@/modules/blog/types';
import React, { ReactElement } from 'react';
import { FC } from 'react';

interface IProps {
    article: IArticle;
}

const ArticleCard: FC<IProps> = ({ article }): ReactElement => {
    return (
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="grid grid-cols-10 grid-flow-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 col-span-4">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        img
                    </div>
                    <div className="col-span-6">
                        <h6 className="text-xl font-semibold ">
                            {article.title}
                        </h6>
                        <div
                            className="mt-2 mb-4 text-blueGray-500"
                            dangerouslySetInnerHTML={{
                                __html: article.excerpt
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
