import HomePage from "../pages/HomePage";
import SearchResultPage from "../pages/SearchResultPage";
import HeaderComponent from "../components/common/HeaderComponent";

describe("EPAM Website Tests", () => {

    beforeEach(() => {
        cy.visit("https://www.epam.com/");
    });

    it("Validates the title of the EPAM home page", () => {
        const homePage = new HomePage();
        homePage.getTitle().should("eq", "EPAM | Software Engineering & Product Development Services");
    });

    it("Validates that the EPAM logo exists in the header", () => {
        const headerComponent = new HeaderComponent();
        headerComponent.getEpamLogos().should('be.visible');
    });

    it("Validates that the search result counter line contains the searched string", () => {
        const headerComponent = new HeaderComponent();
        const searchValue = "AUTOMATION";

        headerComponent.clickOnSearchButton();
        headerComponent.fillSearchField(searchValue);
        headerComponent.getSearchField().should("have.value", searchValue);
        headerComponent.submitSearch();

        const searchResultPage = new SearchResultPage();
        searchResultPage.getSearchResultCounterLine()
            .invoke("text")
            .should("contain", `results for "${searchValue}"`);
    });
})