import React, { ReactElement, FC } from 'react';
import Head from 'next/head';
interface IProps {
    title: string;
    description?: string;
}
const PageLayout: FC<IProps> = ({
    title,
    description,
    children
}): ReactElement => {
    return (
        <main>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta
                    property="og:description"
                    content={description}
                    key="ogdesc"
                />
                <title>{title}</title>
            </Head>
            <section>{children}</section>
        </main>
    );
};

export default PageLayout;
