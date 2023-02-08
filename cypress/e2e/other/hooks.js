describe('Hooks', () => {

  before(() => {
    cy.log("runs once before all tests in the block")
    
  })
  
  after(() => {
    cy.log("runs once after all tests in the blocks")
    
  })

  beforeEach(() => {
    cy.log("runs before each test in the block")
    
  })

  afterEach(() => {
    cy.log("runs after each test in the block")
    
  })

  it('Example test1', () => {
    cy.log("Example test1")
  })

  it('Example test2', () => {
    cy.log("Example test2")
  })

  it('Example test3', () => {
    cy.log("Example test3")
  })

})