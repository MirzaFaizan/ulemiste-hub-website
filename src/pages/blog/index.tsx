import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import fetchAllArticles from '@/modules/blog/api/fetchAllArticles';
import { IArticle } from '@/modules/blog/types';
import Navbar from '@/common/components/Nav/AuthNavbar';
import ArticleCard from '@/modules/blog/components/ArticleCard';

interface IProps {
    articles: IArticle[];
}
const Blog: FC<IProps> = ({ articles }): ReactElement => {
    console.log(articles);

    return (
        <div>
            <Navbar />
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-45">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
                    }}>
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Latest News and Articles
                                </h1>
                                <p className="mt-4 text-lg text-blueGray-200">
                                    here are some of the top news articles by us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                    style={{ transform: 'translateZ(0)' }}>
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0">
                        <polygon
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <section className="bg-blueGray-100 min-h-screen ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} {...{ article }} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
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
