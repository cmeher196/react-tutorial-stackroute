// describe('it should succesfully login and open news dashboard', () => {

//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('', () => {
//         cy.get('input[id=login]').type('admin');
//         cy.get('#password').type('password');
//         cy.wait(1000);
//         cy.get('.submit').click();
//         cy.wait(2000);
//         cy.location().should((location) => expect(location.href).to.eq('http://localhost:3000/dashboard'));
//         cy.wait(1000)
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
//         cy.get('.sign-out').click();
//         cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/'))
//         cy.wait(3000);
//     })

// })

// describe('it should filter dashboard without search text', () => {

//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('', () => {
//         cy.get('input[id=login]').type('admin');
//         cy.get('#password').type('password');
//         cy.wait(1000);
//         cy.get('.submit').click();
//         cy.wait(2000);
//         cy.get('.modal-btn').click();
//         cy.get('.select-endpoint').select('Top Headlines')
//         cy.wait(1000);
//         cy.get('.select-category-country').select('Both');
//         cy.wait(1000);
//         cy.get('.text-country').type('au');
//         cy.wait(1000);
//         cy.get('.select-category').select('Entertainment');
//         cy.wait(1000);
//         cy.get('.text-page-size').type('24');
//         cy.wait(1000);
//         cy.get('.text-page').type('1');
//         cy.wait(1000);
//         cy.get('.filter-btn').click();
//         cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/dashboard'))
//         cy.wait(3000)
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(3000)
//     })
// })

// describe('it should filter dashboard with search text', () => {

//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('', () => {
//         cy.get('input[id=login]').type('admin');
//         cy.get('#password').type('password');
//         cy.wait(1000);
//         cy.get('.submit').click();
//         cy.wait(2000);
//         cy.get('.modal-btn').click();
//         cy.get('.select-endpoint').select('Everything')
//         cy.wait(1000);
//         cy.get('.text-search').type('david');
//         cy.wait(1000);
//         cy.get('.text-page-size').type('24');
//         cy.wait(1000);
//         cy.get('.text-page').type('1');
//         cy.wait(1000);
//         cy.get('.filter-btn').click();
//         cy.location().should((location)=> expect(location.href).to.eq('http://localhost:3000/dashboard'))
//         cy.wait(3000)
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(3000);
//     })
// })

describe('it should add a news for read later and view them', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('', () => {
        cy.get('input[id=login]').type('admin');
        cy.get('#password').type('password');
        cy.wait(1000);
        cy.get('.submit').click();
        cy.wait(2000);
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:3000/dashboard'));
        cy.wait(1000)
        // cy.scrollTo('bottom');
        // cy.wait(2000);
        // cy.scrollTo('top');
        // cy.wait(2000);
        cy.get('.news-title').contains('Entertainment').then(el => {
            cy.contains('Read later').click()

        })
        cy.wait(3000)
        cy.get('.readnow-nav').click()
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:3000/readnow'));
        cy.wait(2000)
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.wait(2000);
        cy.get('.sign-out').click();
        cy.location().should((location) => expect(location.href).to.eq('http://localhost:3000/'))
        cy.wait(3000);
    })
})