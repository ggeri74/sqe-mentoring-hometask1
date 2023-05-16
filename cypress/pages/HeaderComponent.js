class HeaderComponent {

    // there are 4 logo elements in the DOM (mobile/desktop/light/dark)
    // the test validates that at least one is visible
    getEpamLogos() {
        return cy.get(".header__content .header__logo");
    }

    clickOnSearchButton() {
        const button = cy.get(".header-search__button");
        button.click();
    }

    fillSearchField(value) {
        const searchField = cy.get("#new_form_search");
        searchField.type(value).should("have.value", value);
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