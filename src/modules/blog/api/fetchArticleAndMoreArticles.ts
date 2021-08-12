import { gql } from '@apollo/client';
import gqlClient from '@/modules/blog/api/apollo-client';
import { IArticle, IArticlePage } from '@/modules/blog/types';

const fetchArticleAndMoreArticles = async (
    postId: string
): Promise<IArticlePage> => {
    // The slug may be the id of an unpublished post
    const { data } = await gqlClient.query({
        query: gql`
            fragment PostFields on Post {
                id
                title
                excerpt
                slug
                date
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                categories {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }

            query PostBySlug($id: ID!) {
                post(id: $id) {
                    ...PostFields
                    content
                    revisions(
                        first: 1
                        where: { orderby: { field: MODIFIED, order: DESC } }
                    ) {
                        edges {
                            node {
                                id
                                title
                                excerpt
                                content
                            }
                        }
                    }
                }
                posts(
                    first: 3
                    where: { orderby: { field: DATE, order: DESC } }
                ) {
                    edges {
                        node {
                            ...PostFields
                        }
                    }
                }
            }
        `,
        variables: { id: postId }
    });

    return {
        article: data.post,
        suggestedArticles: data.posts.edges.map((post: IArticle) => post)
    };
};

export default fetchArticleAndMoreArticles;
