const Nightmare= require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
    .goto('https://www.jd.com/')
    .click("#ttbar-login a.link-login")
    .wait(1000)
    .click(".login-tab-r a") 
    .type("input[name='loginname']","18729775573")
    .type("input[name='nloginpwd']","xu263918")
    .click("#loginsubmit")
    .wait(1000)
    .mouseover("#ttbar-myjd")
    .click('.item a')
    .wait(1000)
    .goto('https://bean.jd.com/myJingBean/list')
    .click('.c-inner a')
    .wait(1000)
    .goto('http://vip.jd.com/')
    .click('#signIn div')
    .wait(5000)
    .end()
    .catch((error)=>{
        console.error('Search failed:',error);
    });