/// <reference types="cypress"/>

import DEV_URL from '../../config';

context('Banner Section', () => {
    beforeEach(() => cy.visit(DEV_URL));
    it('should render a banner image', () => {
        cy.get('img').should('be.visible');
    });

    it('should have big heading heading', () => {
        cy.get('h1').should('have.class', 'text-4xl');
    });
});
