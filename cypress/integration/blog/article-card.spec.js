/// <reference types="cypress"/>

import { DEV_URL } from '../../config';

context('Article Card', () => {
    before(() => cy.visit(DEV_URL + '/blog'));

    // receiving proper props
    it('Check article card props', () => {
        cy.get('');
    });
});
