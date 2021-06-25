import { Example } from '@prisma/client';
import QUERY_KEYS from '@/common/constants/queryKeys';

import { useQuery, UseQueryResult } from 'react-query';

export const getExampleService = async (): Promise<Example> => {
    const res: Response = await fetch('/api/example/', {
        method: 'GET'
    });
    return res.json();
};

export const useGetExample = (): UseQueryResult => {
    return useQuery(QUERY_KEYS.example, getExampleService, {
        staleTime: 300000
    });
};

export default useGetExample;
