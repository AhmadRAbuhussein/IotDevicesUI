describe("Devices Page", () => {
  beforeEach(() => {
    cy.signIn();

    cy.visit("http://localhost:3100/devices");
  });
  it("should call a certain GET API", () => {
    const validCredentials = {
      baseUrl: "http://localhost:4000",
    };

    cy.intercept("GET", `${validCredentials.baseUrl}/devices?*`, (req) => {
      delete req.headers["if-none-match"];
    }).as("getDevices");

    cy.wait("@getDevices").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body).to.be.an('array');
    });
  });
});
