export interface IArticle {
    id: string;
    content: string;
    date: Date;
    desiredSlug: string;
    status: string;
    title: string;
    excerpt: string;
    featuredImage?: string;
}

export interface IArticlePage {
    article: IArticle;
    suggestedArticles?: IArticle[];
}
