import { gql } from '@apollo/client';
import gqlClient from '@/modules/blog/api/apollo-client';
import { IArticle } from '@/modules/blog/types';

const fetchAllArticles = async (): Promise<IArticle[]> => {
    const { data } = await gqlClient.query({
        query: gql`
            query GetPosts {
                posts {
                    edges {
                        cursor
                        node {
                            id
                            content
                            date
                            desiredSlug
                            status
                            title
                            excerpt
                        }
                    }
                }
            }
        `
    });

    return data.posts.edges.map((edge) => edge.node);
};

export default fetchAllArticles;
