import { config } from 'dotenv';
config();
import { A_ARC_Context } from '@adaas/a-sdk/definitions/A_ARC_Context.def';
import { Resource } from '../src/api/server-commands';
jest.retryTimes(0);


describe('ARC Mask Query Builder Tests', () => {
    it('Allow Read ANY Entity in ANY Scope', async () => {
        try {
            await A_ARC_Context.ready;

            const foo = await Resource.list({
                mask: '*'
            });

            console.log('READY');
        } catch (error) {

            A_ARC_Context.Logger.error(error);

        }




    });
});