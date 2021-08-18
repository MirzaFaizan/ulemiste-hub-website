import gqlClient from '@/modules/blog/api/apollo-client';
import { IArticlePage } from '@/modules/blog/types';
import { gql } from '@apollo/client';

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
        article: {
            ...data.post,
            featuredImage: data.post?.featuredImage?.node?.sourceUrl
        },
        suggestedArticles: data.posts.edges.map((post) => ({
            ...post.node,
            featuredImage: post.node?.featuredImage?.node?.sourceUrl
        }))
    };
};

export default fetchArticleAndMoreArticles;
