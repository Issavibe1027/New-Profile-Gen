// using Manager constructor 
const Manage = require('../lib/Manage');

// creating manager object  
test('creates an Manager object', () => {
    const manage = new Manage('Issa', 90, 'Issa.chamblee@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employ', () => {
    const manage = new Manage('Issa', 90, 'issa.chamblee@gmail.com');

    expect(manager.getRole()).toEqual("Manage");
}); 
