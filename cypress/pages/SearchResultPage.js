import BasePage from "./BasePage";

class SearchResultPage extends BasePage {

    getSearchResultCounterLine() {
        return cy.get(".search-results__counter");
    }
}

export default SearchResultPage;