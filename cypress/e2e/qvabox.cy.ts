describe('load qvabox website spec', () => {
  it('enter registration details', () => {
    cy.visit('https://qavbox.github.io/demo/signup/')
    cy.get("#username").type("Jaibaba")
    cy.get("input[value='Home']").click().invoke('prop', 'value').then((val) => {
      cy.log('Clicked on ' + val + ' again')
    })

    cy.get("a[href='/demo/webtable']").click()
    cy.get("#table01 thead tr th").as("webtableHeader")

    cy.get("@webtableHeader").should("have.length", 4)

    cy.get("@webtableHeader").each(($el) => {
      cy.wrap($el).invoke('text').then((txt) => {
        cy.log(txt)
      })

      cy.log("Directly using jquery")
      cy.log($el.text())
    })

    // cy.get("#table01 tr:nth-child(1) td").as("webtableFirstRow")

    // cy.get("@webtableFirstRow").each(($el) => {
    //   cy.wrap($el).invoke('text').then((txt) => {
    //     cy.log(txt)
    //   })

    //   cy.log("Directly using jquery for first row")
    //   cy.log($el.text())
    // })

    // cy.get("#table01 tbody tr").eq(1).as("webtableSecondRowOnly")
    // cy.get("@webtableSecondRowOnly").each(($el) => {
    //   cy.wrap($el).within(()=>{
    //       cy.get("td").then(($txt) => {
    //         cy.log("webtableSecondRowOnly "+ $txt.text())
    //       })
    //   })
    // })

    //Traditional approach
/*     cy.get("#table01 tbody tr").as("webtableAllRows")
    cy.get("@webtableAllRows").each(($row) => {
      cy.wrap($row).within(()=>{
          cy.get("td").each(($col) => {
            cy.log("All rows "+$col.text())
            if($col.text() == "QTP" || $col.text() == "Selenium"){
              cy.get("[type='checkbox']").click()
              cy.get("[type='button']").click()
            }
          })
      })
    }) */

    //latest approach
    cy.get('#table01').contains('tr', 'Functional').within(()=>{
      cy.get('td').eq(0).click()
      cy.get('td').eq(4).click()
    })
  })
})