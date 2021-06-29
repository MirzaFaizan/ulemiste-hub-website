import { gql } from '@apollo/client';
import gqlClient from '@/modules/blog/api/apollo-client';
import { IArticle } from '@/modules/blog/types';

const getPostAndMorePosts = async (
    postId: string,
    postIdType: string
): Promise<IArticle> => {
    // The slug may be the id of an unpublished post
    const { data } = await gqlClient.query({
        query: gql`
            fragment AuthorFields on User {
                name
                firstName
                lastName
                avatar {
                    url
                }
            }

            fragment PostFields on Post {
                title
                excerpt
                slug
                date
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                author {
                    node {
                        ...AuthorFields
                    }
                }
                categories {
                    edges {
                        node {
                            name
                        }
                    }
                }
                tags {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }

            query PostBySlug($id: ID!, $idType: PostIdType!) {
                post(id: $id, idType: $idType) {
                    ...PostFields
                    content
                    revisions(
                        first: 1
                        where: { orderby: { field: MODIFIED, order: DESC } }
                    ) {
                        edges {
                            node {
                                title
                                excerpt
                                content
                                author {
                                    node {
                                        ...AuthorFields
                                    }
                                }
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
        variables: { postId, postIdType }
    });

    return data;
};

export default getPostAndMorePosts;
