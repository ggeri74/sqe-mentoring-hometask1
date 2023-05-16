import HomePage from "../pages/HomePage";
import HeaderComponent from "../pages/HeaderComponent";
import SearchResultPage from "../pages/SearchResultPage";

describe("EPAM Website Tests", () => {

    beforeEach(() => {
        cy.visit("https://www.epam.com/");
    });

    // it("Validates the title of the EPAM home page", () => {
    //     const homePage = new HomePage();
    //     homePage.getTitle().should("eq", "EPAM | Software Engineering & Product Development Services");
    // });

    // it("Validates that the EPAM logo exists in the header", () => {
    //     const headerComponent = new HeaderComponent();
    //     headerComponent.getEpamLogos().should('be.visible');
    // });

    it("Validates that the search result counter line contains the searched string", () => {
        const headerComponent = new HeaderComponent();        
        const searchText = "AUTOMATION";

        headerComponent.clickOnSearchButton();
        headerComponent.fillSearchField(searchText);
        headerComponent.submitSearch();

        const searchResultPage = new SearchResultPage();
        searchResultPage.getSearchResultCounterLine()
            .invoke("text")
            .should("contain", `results for "${searchText}"`);
    });
})