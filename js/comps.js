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

    menuExpan.innerHTML += windowClose();

    menuExpan.style.left = '0px';

}

menuExpan.onclick = function()
{
    menuExpan.style.left = '-100%';
    menuExpan.innerHTML = '';
}



// landing page loading function

let target_landing = document.querySelector('#landingPg');

target_landing.style.cssText = "background-image: url('./imgs/ocean_background_2.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackLanding = function(entryLanding)
{ 
    if(entryLanding[0].intersectionRatio > 0.4 )
    {

        target_landing.getElementsByClassName('top_div')[0]. innerHTML = webName('Edu-Ocean','topIn','1.5s')


        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Importance', 'Ocean is so important to us','rightIn', '#importance_intro');

        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Threats', 'to the oceans','leftIn','#threats_intro');

        target_landing.getElementsByClassName('bottom_div')[0]. innerHTML += category('Protection', 'Things we can do to save the ocean','rightIn','#action_intro');


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

        target_oxygen.getElementsByClassName('sky')[0]. innerHTML = introTitle('','> 50% of the Oxygen','that we breath is generated from the ocean','1.5s','1s');

        target_oxygen.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/phytoplankton.svg','Phytoplankton','living in the oceans produce more than 50% of the oxygen','800ms','800ms');

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

target_marine.style.cssText = "background-image: url('./imgs/ocean_background_3.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackMarine = function(entryMarine)
{ 
    if(entryMarine[0].intersectionRatio > 0.4 )
    {

        target_marine.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Home','of abundance of marine life','1.5s','1s');

        target_marine.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','91%','of species in the ocean still await description','800ms','800ms');

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

        target_food.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/sushi.svg','16%','of all animal protein consumed globally is from the ocean','800ms','800ms');

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

        target_economy.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/shipyard.svg','','Over three billion people depend on marine and coastal biodiversity for their livelihoods','800ms','800ms');

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


        target_threats.innerHTML = introTitle('','Threats','to the Ocean','1s','1s');


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

        target_climate.getElementsByClassName('sky')[0]. innerHTML = introTitle('','Climate Change','impacts ocean temperature and acidity','1.5s','1s');


        target_climate.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/phytoplankton_less.svg','Warmer & Acidity','Higher temperature and acidity make marine life harder','800ms','800ms');


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

target_plastic.style.cssText = "background-image: url('./imgs/plastic-01.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackPlastic = function(entryPlastic)
{ 
    if(entryPlastic[0].intersectionRatio > 0.4 )
    {

        target_plastic.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Five Trillion','pieces of plastic pollution are afloat in the oceans','1.5s','1s');

        target_plastic.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','Plastic','has been found in the ocean as deep as 11km','800ms','800ms');


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

target_overfishing.style.cssText = "background-image: url('./imgs/overfishing-01.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackOverfishing = function(entryOverfishing)
{ 
    if(entryOverfishing[0].intersectionRatio > 0.4 )
    {

        target_overfishing.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Overfishing','','1.5s','1s');

        target_overfishing.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','1/3','of global fish stocks are overfished','800ms','800ms');

    }
    else
    {
        target_overfishing.getElementsByClassName('top_div')[0].innerHTML = '';
        target_overfishing.getElementsByClassName('bottom_div')[0]. innerHTML = '';
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


        target_few_protect.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/mpa.svg','MPA','Marine Protected Areas(MPA) are areas of ocean set aside for long-term conservation aims','800ms','800ms');

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

        target_action.innerHTML = introTitle('','Protection','Things we can do to save the ocean','1s','1s');


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



// Deal with climate change page loading function

let target_action_climate = document.querySelector('#action_climate');

let callbackActionClimate = function(entryActionClimate)
{ 
    if(entryActionClimate[0].intersectionRatio > 0.4 )
    {

        target_action_climate.getElementsByClassName('sky')[0]. innerHTML = introTitle('','Mitigate Climate Change','','1.5s','1s');

        target_action_climate.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/phytoplankton_less.svg','Reduce Greenhouse Gases','Be aware of your carbon footprint, reduce it where you can','800ms','800ms');

    }
    else
    {
        target_action_climate.getElementsByClassName('sky')[0].innerHTML = '';
        target_action_climate.getElementsByClassName('sea_level')[0]. innerHTML = '';
    }
};

let observerActionClimate = new IntersectionObserver(callbackActionClimate,{
    threshold: 0.4
});

observerActionClimate.observe(target_action_climate);



// Climate change goal page loading function


let target_climate_goal = document.querySelector('#action_climate_goal');

let callbackClimateGoal = function(entryClimateGoal)
{ 
    if(entryClimateGoal[0].intersectionRatio > 0.4 )
    {

        target_climate_goal.getElementsByClassName('sky')[0]. innerHTML = introTitle('','Protect the Atmosphere','by reducing pollution, and we\'ll','1.5s','1s');

        target_climate_goal.getElementsByClassName('sea_level')[0]. innerHTML = introTitle('./imgs/phytoplankton.svg','Protect the Ocean','making it habitable for the phytoplankton and other organisms','800ms','800ms');

    }
    else
    {
        target_climate_goal.getElementsByClassName('sky')[0].innerHTML = '';
        target_climate_goal.getElementsByClassName('sea_level')[0]. innerHTML = '';
    }
};

let observerClimateGoal = new IntersectionObserver(callbackClimateGoal,{
    threshold: 0.4
});

observerClimateGoal.observe(target_climate_goal);


// Control plastic page loading function

let target_action_plastic = document.querySelector('#action_plastic');

target_action_plastic.style.cssText = "background-image: url('./imgs/plastic-01.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackActionPlastic = function(entryActionPlastic)
{ 
    if(entryActionPlastic[0].intersectionRatio > 0.4 )
    {

        target_action_plastic.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Reduce Plastic Use','Clean up what is already in the ocean and support the use of more eco-friendly products','1.5s','1s');

    }
    else
    {
        target_action_plastic.getElementsByClassName('top_div')[0].innerHTML = '';
        target_action_plastic.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerActionPlastic = new IntersectionObserver(callbackActionPlastic,{
    threshold: 0.4
});

observerActionPlastic.observe(target_action_plastic);


// Control plastic goal page loading function

let target_plastic_goal = document.querySelector('#action_plastic_goal');

target_plastic_goal.style.cssText = "background-image: url('./imgs/ocean_background_3.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackPlasticGoal = function(entryPlasticGoal)
{ 
    if(entryPlasticGoal[0].intersectionRatio > 0.4 )
    {

        target_plastic_goal.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Clean the Ocean','and make it safe for ocean creatures to live','1.5s','1s');

    }
    else
    {
        target_plastic_goal.getElementsByClassName('top_div')[0].innerHTML = '';
        target_plastic_goal.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerPlasticGoal = new IntersectionObserver(callbackPlasticGoal,{
    threshold: 0.4
});

observerPlasticGoal.observe(target_plastic_goal);


// Regulate fishing page loading function

let target_action_overfishing = document.querySelector('#action_regulate_fishing');

target_action_overfishing.style.cssText = "background-image: url('./imgs/overfishing-01.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackActionOverfishing = function(entryActionOverfishing)
{ 
    if(entryActionOverfishing[0].intersectionRatio > 0.4 )
    {

        target_action_overfishing.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Regulate Fishing','Decrease the amount of unsustainable fishing','1.5s','1s');

        target_action_overfishing.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','','','800ms','800ms');

    }
    else
    {
        target_action_overfishing.getElementsByClassName('top_div')[0].innerHTML = '';
        target_action_overfishing.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerActionOverfishing = new IntersectionObserver(callbackActionOverfishing,{
    threshold: 0.4
});

observerActionOverfishing.observe(target_action_overfishing);

// Regulate fishing goal page loading function

let target_fishing_goal = document.querySelector('#action_fishing_goal');

target_fishing_goal.style.cssText = "background-image: url('./imgs/regulatefishing.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackFishingGoal = function(entryFishingGoal)
{ 
    if(entryFishingGoal[0].intersectionRatio > 0.4 )
    {

        target_fishing_goal.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Sustainable Fishing','Support sustainable fishing practices','1.5s','1s');

        target_fishing_goal.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','','','800ms','800ms');

    }
    else
    {
        target_fishing_goal.getElementsByClassName('top_div')[0].innerHTML = '';
        target_fishing_goal.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerFishingGoal = new IntersectionObserver(callbackFishingGoal,{
    threshold: 0.4
});

observerFishingGoal.observe(target_fishing_goal);


// Increase protection zone page loading function

let target_action_protect = document.querySelector('#protection_zone');

let callbackActionProtect = function(entryActionProtect)
{ 
    if(entryActionProtect[0].intersectionRatio > 0.4 )
    {

        target_action_protect.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','2% +','increase protection areas','1.5s','1s');

        target_action_protect.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/mpa.svg','Support Additional MPA','','800ms','800ms');

    }
    else
    {
        target_action_protect.getElementsByClassName('top_div')[0].innerHTML = '';
        target_action_protect.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerActionProtect = new IntersectionObserver(callbackActionProtect,{
    threshold: 0.4
});

observerActionProtect.observe(target_action_protect);


// Protection zone goal page loading function

let target_zone_goal = document.querySelector('#protection_zone_goal');

let callbackZoneGoal = function(entryZOneGoal)
{ 
    if(entryZOneGoal[0].intersectionRatio > 0.4 )
    {

        target_zone_goal.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','20% Global Protection','','1.5s','1s');

        target_zone_goal.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('./imgs/mpa.svg','','By increasing marine protection areas we can help preserve the marine life that lives within the waters','800ms','800ms');

    }
    else
    {
        target_zone_goal.getElementsByClassName('top_div')[0].innerHTML = '';
        target_zone_goal.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerZoneGoal = new IntersectionObserver(callbackZoneGoal,{
    threshold: 0.4
});

observerZoneGoal.observe(target_zone_goal);


//End page loading function

let target_outro = document.querySelector('#take_action_page');

target_outro.style.cssText = "background-image: url('./imgs/ocean_background_2.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackOutro = function(entryOutro)
{ 
    if(entryOutro[0].intersectionRatio > 0.4 )
    {

        target_outro.innerHTML = outro('', 'With knowledge comes the power to make a difference', 'Let\'s take action to', 'Protect our Ocean','1s','1s');

    }
    else
    {
        target_outro.innerHTML = '';
    }
};

let observerOutro = new IntersectionObserver(callbackOutro,{
    threshold: 0.4
});

observerOutro.observe(target_outro);





// Polution from ships loading function

let target_ship_polution = document.querySelector('#ship_polution');

target_ship_polution.style.cssText = "background-image: url('./imgs/ocean_threats.jpg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackShipPolution = function(entryShipPolution)
{ 
    if(entryShipPolution[0].intersectionRatio > 0.4 )
    {

        target_ship_polution.getElementsByClassName('top_div')[0]. innerHTML = introTitle('./imgs/fishing_boat1.svg','Waste Pollution from Ships','Apart from other pollutants such as oil and gas, the waste and garbage generated on board ships poses a significant threat to the marine ecosystem','1.5s','1s');

        target_ship_polution.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','','','800ms','800ms');

    }
    else
    {
        target_ship_polution.getElementsByClassName('top_div')[0].innerHTML = '';
        target_ship_polution.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerShipPolution = new IntersectionObserver(callbackShipPolution,{
    threshold: 0.4
});

observerShipPolution.observe(target_ship_polution);

// Explore the ocean page loading function

let target_explore_ocean = document.querySelector('#explore_ocean');

target_explore_ocean.style.cssText = "background-image: url('./imgs/diving.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackExploreOcean = function(entryExploreOcean)
{ 
    if(entryExploreOcean[0].intersectionRatio > 0.4 )
    {

        target_explore_ocean.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Explore the Oceans','Get outdoors to have a look at the waters that surround you','1.5s','1s');

        target_explore_ocean.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','“People protect what they love.”','','800ms','800ms');

    }
    else
    {
        target_explore_ocean.getElementsByClassName('top_div')[0].innerHTML = '';
        target_explore_ocean.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerExploreOcean = new IntersectionObserver(callbackExploreOcean,{
    threshold: 0.4
});

observerExploreOcean.observe(target_explore_ocean);


// Educate yourself page loading function

let target_educate_yourself = document.querySelector('#educate_yourself');

target_educate_yourself.style.cssText = "background-image: url('./imgs/marinelife.svg');background-repeat: no-repeat;background-size: cover;background-position: center;"

let callbackEducateYourself = function(entryEducateYourself)
{ 
    if(entryEducateYourself[0].intersectionRatio > 0.4 )
    {

        target_educate_yourself.getElementsByClassName('top_div')[0]. innerHTML = introTitle('','Educate Yourself About Oceans and Marine Life','','1.5s','1s');

        target_educate_yourself.getElementsByClassName('bottom_div')[0]. innerHTML = introTitle('','','The ocean and its inhabitants are central to all life on Earth. The more you learn about the problems that it is facing, the more you will want to help protect it','800ms','800ms');

    }
    else
    {
        target_educate_yourself.getElementsByClassName('top_div')[0].innerHTML = '';
        target_educate_yourself.getElementsByClassName('bottom_div')[0]. innerHTML = '';
    }
};

let observerEducateYourself = new IntersectionObserver(callbackEducateYourself,{
    threshold: 0.4
});

observerEducateYourself.observe(target_educate_yourself);
