import updateExampleById from '@/modules/example/api/updateExampleById';

export default async (req, res) => {
    try {
        if (!req?.query?.id) throw { status: 404 };

        switch (req.method) {
            case 'PUT':
                await (async () => {
                    const example = await updateExampleById(req?.query?.id);
                    if (!example) throw { status: 404 };
                    res.status(200).json(example);
                })();
                break;
            default:
                throw { status: 405 }; //Method Not Allowed
                break;
        }
    } catch (err) {
        res.status(err?.status ?? 500).end();
    }
};
