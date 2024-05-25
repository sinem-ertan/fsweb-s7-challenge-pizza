describe("tests", () => {
  before(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should navigate to order page and make order", () => {
    cy.get(".banner-cta").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/order");
    });

    cy.get(".make-order").click();

    cy.get(".Toastify__toast-body").contains("Lutfen pizza boyutu seciniz!");

    cy.get("#small").click();

    cy.get(".make-order").click();

    cy.get(".Toastify__toast-body").contains("Lutfen hamur secimi yapiniz!");

    cy.get("#paste").select("ince");

    cy.get(".make-order").click();

    cy.get(".Toastify__toast-body").contains(
      "Lutfen en az 4 en fazla 10 ek malzeme seciniz!"
    );

    cy.get("#extra-0").click();
    cy.get("#extra-1").click();
    cy.get("#extra-2").click();
    cy.get("#extra-3").click();
    cy.get("#extra-4").click();

    cy.get(".make-order").click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/success");
    });
  });
});
