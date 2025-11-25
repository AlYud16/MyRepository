'use strict'


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];

let reg = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)/;

let TrustEmails = [];

    for (let i = 0; i < arr.length; i++) {
        let email = arr[i].email;
        if (reg.test(email)) {
            TrustEmails[TrustEmails.length] = email;
        } 
    }

console.log(TrustEmails)

