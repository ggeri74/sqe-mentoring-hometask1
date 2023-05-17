import BasePage from "./BasePage";

class HomePage extends BasePage {
    getTitle() {
        return cy.title();
    }
}

export default HomePage;