import getExample from '@/modules/example/api/getExample';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    try {
        // handle global endpoint permission here, throw 403/401

        switch (req.method) {
            case 'GET':
                // Get an example, immediatly invoked function to create unique scope for each case
                await (async () => {
                    const example = await getExample();
                    res.status(200).json({ example });
                })();
                break;
            case 'POST':
                // POST an example, immediatly invoked function to create unique scope for each case
                await (async () => {
                    const example = await getExample();
                    res.status(200).json({ example });
                })();
                break;
            default:
                throw { status: 405 }; //Method Not Allowed
        }
    } catch (err) {
        res.status(err?.status ?? 500).end();
    }
};
