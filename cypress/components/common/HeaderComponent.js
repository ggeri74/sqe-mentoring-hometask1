class HeaderComponent {

    getEpamLogos() {
        return cy.get(".header__content .header__logo");
    }

    clickOnSearchButton() {
        cy.get(".header-search__button").click()
    }

    getSearchField() {
        return cy.get("#new_form_search");
    }

    fillSearchField(searchValue) {
        this.getSearchField().type(searchValue, { delay: 0 });
    }

    submitSearch() {
        cy.get(".header-search__submit").click();;
    }

    getSearchResultCounterLine() {
        return cy.get(".search-results__counter");
    }
}

export default HeaderComponent;