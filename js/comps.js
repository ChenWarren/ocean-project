document.querySelector('#menu').innerHTML += Menu();


// Hiden Menu page and expanding function

let menuClick = document.querySelector('#menu')
let menuExpan = document.querySelector('#menu_expan')

menuClick.onclick = function()
{
    menuExpan.innerHTML += webName('Edu-Ocean', '', '');

    menuExpan.innerHTML += menubar('Home', '#landingPg');
    menuExpan.innerHTML += menubar('Importance', '#importance_intro');
    menuExpan.innerHTML += menubar('Threats', '#threats_intro');
    menuExpan.innerHTML += menubar('Protection', '#action_intro');

    menuExpan.style.left = '0px';

}

menuExpan.onclick = function()
{
    menuExpan.style.left = '-100%';
    menuExpan.innerHTML = '';
}



// landing page loading function

// let target_landing = document.querySelector('#landingPg');

// let callbackLanding = function(entryLanding)
// {
    

//     if(entryLanding[0].intersectionRatio > 0.4 )
//     {
//         document.querySelector('.landing').innerHTML += webName('PeaceOcean', 'topIn', '1.5s');
        
//         document.querySelector('.landing').innerHTML += category('Importance', 'Ocean is so important to us','rightIn', '#importance_intro');
//         document.querySelector('.landing').innerHTML += category('Threats', 'to the oceans','leftIn','#threats_intro');
//         document.querySelector('.landing').innerHTML += category('Protection', 'The things that we can do','rightIn','#action_intro');
//     }
//     else
//     {
//         document.querySelector('.landing').innerHTML = '';
//     }

// }

// let observerLanding = new IntersectionObserver(callbackLanding,{
//     threshold: 0.4
// });

// observerLanding.observe(target_landing)


let target_landing = document.querySelector('#landingPg');

let callbackLanding = function(entryLanding)
{ 
    if(entryLanding[0].intersectionRatio > 0.4 )
    {

        target_landing.getElementsByClassName('top_div')[0]. innerHTML = webName('Edu-Ocean','topIn','1.5s')

        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Importance', 'Ocean is so important to us','rightIn', '#importance_intro');

        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Threats', 'to the oceans','leftIn','#threats_intro');

        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Protection', 'The things that we can do','rightIn','#action_intro');

    }
    else
    {
        target_landing.getElementsByClassName('top_div')[0].innerHTML = '';
        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerLanding = new IntersectionObserver(callbackLanding,{
    threshold: 0.4
});

observerLanding.observe(target_landing);



// Importance introduction page loading function

let target_importance = document.querySelector('#importance_intro');

target_importance.style.cssText = "background-image: url('./imgs/ocean_background.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackImpor = function(entryImpor)
{ 
    if(entryImpor[0].intersectionRatio > 0.4 )
    {

        target_importance.innerHTML = introTitle('','Importance','Ocean is so important to us','1s','1s');

    }
    else
    {
        target_importance.innerHTML = '';
    }
};

let observerImpor = new IntersectionObserver(callbackImpor,{
    threshold: 0.4
});

observerImpor.observe(target_importance);

// Oxygen page loading function

let target_oxygen = document.querySelector('#ocean_oxygen');

let callbackOxy = function(entryOxy)
{ 
    if(entryOxy[0].intersectionRatio > 0.4 )
    {

        target_oxygen.getElementsByClassName('sky')[0]. innerHTML = introTitle('','>50% Oxygen','We breath is from the ocean','1.5s','1s');

        target_oxygen.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/plankton.svg','Phytoplankton','living in the oceans produce more than 50% of the oxygen','800ms','800ms');

    }
    else
    {
        target_oxygen.getElementsByClassName('sky')[0].innerHTML = '';
        target_oxygen.getElementsByClassName('sea_level')[0]. innerHTML = '';
    }
};

let observerOxy = new IntersectionObserver(callbackOxy,{
    threshold: 0.4
});

observerOxy.observe(target_oxygen);

// Marinelife page loading function

let target_marine = document.querySelector('#ocean_marinelife');

let callbackMarine = function(entryMarine)
{ 
    if(entryMarine[0].intersectionRatio > 0.4 )
    {

        target_marine.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Home','of abundance of marine life','1.5s','1s');

        target_marine.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/imagehere.svg','91%','of species in the ocean still await description','800ms','800ms');

    }
    else
    {
        target_marine.getElementsByClassName('top_div')[0].innerHTML = '';
        target_marine.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerMarine = new IntersectionObserver(callbackMarine,{
    threshold: 0.4
});

observerMarine.observe(target_marine);


// Food from the ocean page loading function

let target_food = document.querySelector('#ocean_food');

let callbackFood = function(entryFood)
{ 
    if(entryFood[0].intersectionRatio > 0.4 )
    {

        target_food.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Food','','1.5s','1s');

        target_food.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/imagehere.svg','16%','of all animal protein consumed globally','800ms','800ms');

    }
    else
    {
        target_food.getElementsByClassName('top_div')[0].innerHTML = '';
        target_food.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerFood = new IntersectionObserver(callbackFood,{
    threshold: 0.4
});

observerFood.observe(target_food);


// Economy related with the ocean page loading function

let target_economy = document.querySelector('#ocean_economy');

let callbackEconomy = function(entryEconomy)
{ 
    if(entryEconomy[0].intersectionRatio > 0.4 )
    {

        target_economy.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Economy','','1.5s','1s');

        target_economy.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/imagehere.svg','','Over three billion people depend on maringe and coastal biodiversity for their livelihoods','800ms','800ms');

    }
    else
    {
        target_economy.getElementsByClassName('top_div')[0].innerHTML = '';
        target_economy.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerEconomy = new IntersectionObserver(callbackEconomy,{
    threshold: 0.4
});

observerEconomy.observe(target_economy);


// Threats introduction page loading function

let target_threats = document.querySelector('#threats_intro');


target_threats.style.cssText = "background-image: url('./imgs/ocean_background.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackThreats = function(entyThreats)
{ 
    if(entyThreats[0].intersectionRatio > 0.4 )
    {

        target_threats.innerHTML = introTitle('','Threats','to the Oceans','1s','1s');

    }
    else
    {
        target_threats.innerHTML = '';
    }
};

let observerThreats = new IntersectionObserver(callbackThreats,{
    threshold: 0.4
});

observerThreats.observe(target_threats);


// Climate change page loading function

let target_climate = document.querySelector('#climate_change');

let callbackClimate = function(entryClimate)
{ 
    if(entryClimate[0].intersectionRatio > 0.4 )
    {

        target_climate.getElementsByClassName('sky')[0]. innerHTML = introTitle('','Climate Change','impact Ocean temperature and acidity','1.5s','1s');

        target_climate.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/plankton_less.svg','Warmer & Acidity','make sealifes living hard','800ms','800ms');

    }
    else
    {
        target_climate.getElementsByClassName('sky')[0].innerHTML = '';
        target_climate.getElementsByClassName('sea_level')[0]. innerHTML = '';
    }
};

let observerClimate = new IntersectionObserver(callbackClimate,{
    threshold: 0.4
});

observerClimate.observe(target_climate);


// Plastic page loading function

let target_plastic = document.querySelector('#plastic');

let callbackPlastic = function(entryPlastic)
{ 
    if(entryPlastic[0].intersectionRatio > 0.4 )
    {

        target_plastic.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Five Trillion','pieces of plastic pollution are aloat in the oceans','1.5s','1s');

        target_plastic.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/imagehere.svg','Plastic','has been found in the ocean as deep as 11km','800ms','800ms');

    }
    else
    {
        target_plastic.getElementsByClassName('top_div')[0].innerHTML = '';
        target_plastic.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerPlastic = new IntersectionObserver(callbackPlastic,{
    threshold: 0.4
});

observerPlastic.observe(target_plastic);


// Overfishing page loading function

let target_overfishing = document.querySelector('#overfishing');

let callbackOverfishing = function(entryOverfishing)
{ 
    if(entryOverfishing[0].intersectionRatio > 0.4 )
    {

        target_overfishing.getElementsByClassName('sky')[0]. innerHTML = introTitle('','Overfishing','','1.5s','1s');

        target_overfishing.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/imagehere.svg','1/3','of global fish stocks are overfished','800ms','800ms');

    }
    else
    {
        target_overfishing.getElementsByClassName('sky')[0].innerHTML = '';
        target_overfishing.getElementsByClassName('sea_level')[0]. innerHTML = '';
    }
};

let observerOverfishing = new IntersectionObserver(callbackOverfishing,{
    threshold: 0.4
});

observerOverfishing.observe(target_overfishing);


// Few protection zone page loading function

let target_few_protect = document.querySelector('#few_protect');

let callbackFewProtect = function(entryFewProtect)
{ 
    if(entryFewProtect[0].intersectionRatio > 0.4 )
    {

        target_few_protect.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Only 2%','of global oceans are included in strongly protected marine parks','1.5s','1s');

        target_few_protect.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/imagehere.svg','MPA','Marine Protected Areas(MPA) are areas of ocean set aside for long-term conservation aims','800ms','800ms');

    }
    else
    {
        target_few_protect.getElementsByClassName('top_div')[0].innerHTML = '';
        target_few_protect.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerFewProtect = new IntersectionObserver(callbackFewProtect,{
    threshold: 0.4
});

observerFewProtect.observe(target_few_protect);


// Protection introduction page loading function

let target_action = document.querySelector('#action_intro');

target_action.style.cssText = "background-image: url('./imgs/ocean_background.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackAction = function(entyAction)
{ 
    if(entyAction[0].intersectionRatio > 0.4 )
    {

        target_action.innerHTML = introTitle('','Protection','The things that we can do to make a change','1s','1s');

    }
    else
    {
        target_action.innerHTML = '';
    }
};

let observerAction = new IntersectionObserver(callbackAction,{
    threshold: 0.4
});

observerAction.observe(target_action);
