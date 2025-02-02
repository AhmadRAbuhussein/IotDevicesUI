describe("SignInPage", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3100");
    });
  
    it("should type into email and password inputs", () => {
      const validCredentials = {
        baseUrl: 'http://localhost:4000',
        username: 'admin@example.com',
        password: 'admin123',
      };
  
      cy.intercept("POST", `${validCredentials.baseUrl}/auth/login`).as(
        "apiCall"
      );
  
      cy.get('input[name="email"]').type(validCredentials.username, {
        log: false,
      });
      cy.get('input[name="password"]').type(validCredentials.password, {
        log: false,
      });
  
      cy.get('input[name="email"]').should(
        "have.value",
        validCredentials.username,
        { log: false }
      );
      cy.get('input[name="password"]').should(
        "have.value",
        validCredentials.password,
        { log: false }
      );
  
      cy.get('button[aria-description="signIn"]').click();
  
      cy.wait("@apiCall").then((interception: any) => {
        expect(interception.response.statusCode).to.equal(201);
  
        const responseBody = interception.response.body;
        expect(responseBody).to.have.property("access_token").that.is.a("string");
  
        cy.url().should("include", "/devices");
      });
    });
  
    it("Invalid SignIn", () => {
      const validCredentials = {
        baseUrl: 'http://localhost:4000',
      };
      // Intercept the API call to the endpoint defined in the configuration
      cy.intercept("POST", `${validCredentials.baseUrl}/auth/login`).as(
        "apiCall"
      );
  
      cy.get('input[name="email"]').type("test@example.com");
      cy.get('input[name="password"]').type("123456");
  
      cy.get('input[name="email"]').should("have.value", "test@example.com");
      cy.get('input[name="password"]').should("have.value", "123456");
  
      cy.get('button[aria-description="signIn"]').click();
  
      cy.wait("@apiCall").then((interception: any) => {
        expect(interception.response.statusCode).to.equal(404);
      });
    });
  });
  