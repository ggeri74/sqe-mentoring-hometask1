class HeaderComponent {

    getEpamLogos() {
        return cy.get(".header__content .header__logo");
    }

    clickOnSearchButton() {
        const button = cy.get(".header-search__button");
        button.click();
    }

    getSearchField() {
        return cy.get("#new_form_search");
    }
    
    fillSearchField(searchValue) {
        this.getSearchField().type(searchValue);
    }

    submitSearch() {
        const button = cy.get(".header-search__submit");
        button.click();
    }

    getSearchResultCounterLine() {
        return cy.get(".search-results__counter");
    }
}

export default HeaderComponent;