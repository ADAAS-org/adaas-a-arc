import { config } from 'dotenv';
import { A_ARC_MaskQueryBuilder } from '../src/lib/A_ARC_MaskQueryBuilder.class';
config();
jest.retryTimes(0);

describe('ARC Mask Query Builder Tests', () => {
    it('Allow Read ANY Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb
            .action('read')
            .allow();

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@*:*@*/Allow:read');
    });
    it('Deny Read ANY Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb
            .action('read')
            .deny();

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@*:*@*/Deny:read');
    });
    it('Allow Read ANY "user" Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.action('read')
            .entity('user')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@*:user:*@*/Allow:read');
    });
    it('Allow Read ("0001" "user") Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.action('read')
            .entity('user')
            .id('0001')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@*:user:0001@*/Allow:read');
    });
    it('Allow Read ("0001" "user") Entity in ("test") OR ("test2") Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.action('read')
            .scopes(['test', 'test2'])
            .entity('user')
            .id('0001')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@(test:user:0001@*|test2:user:0001@*)/Allow:read');
    });
    it('Allow Read ("v1" "0001" "user") Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.action('read')
            .entity('user')
            .id('0001')
            .version('v1')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@*:user:0001@v1/Allow:read');
    });
    it('Allow Read ("v1" "0001" "user") AND ("v2" "0002" "user") Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.action('read')
            .entity('user')
            .id('0001')
            .version('v1')
            .next()
            .entity('user')
            .id('0002')
            .version('v2')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@(*:user:0001@v1|*:user:0002@v2)/Allow:read');
    });

    it('Allow Read or Delete ("v1" "0001" "user") AND ("v2" "0002" "user") Entity in ANY Scope', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.actions(['read', 'delete'])
            .entity('user').id('0001').version('v1')
            .next()
            .entity('user').id('0002').version('v2')
            .allow();

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('a-sdk@(*:user:0001@v1|*:user:0002@v2)/Allow:(read|delete)');
    });

    it('Raw Query', async () => {
        const qb = new A_ARC_MaskQueryBuilder();

        qb.raw('*');

        console.log('qb.toString()', qb.toString());

        expect(qb).toBeDefined();
        expect(qb).not.toBeNull();

        expect(qb.toString()).toBe('*');
    });
});


// a-sdk@(*:user:0001@v1|*:user:0002@v2)/Allow:(read|delete)
// a-sdk@(*:user:0001@v1|*:user:0001@v2|*:user:0002@v1|*:user:0002@v2)/Allow:(read|delete)