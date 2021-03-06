document.querySelector('#menu').innerHTML += Menu();


// landing page loading function

let target_landing = document.querySelector('#landingPg');

let callbackLanding = function(entry)
{
    if(entry[0].intersectionRatio > 0.4 )
    {
        document.querySelector('.landing').innerHTML += webName('PeaceOcean');
        
        document.querySelector('.landing').innerHTML += category('Importance', 'Ocean is so important to us','rightIn');
        document.querySelector('.landing').innerHTML += category('Threats', 'to the oceans','leftIn');
        document.querySelector('.landing').innerHTML += category('Protection', 'The things that we can do','rightIn');
    }
    else
    {
        document.querySelector('.landing').innerHTML = '';
    }

}

let observerLanding = new IntersectionObserver(callbackLanding,{
    threshold: 0.4
});

observerLanding.observe(target_landing)



// second page loading function

let target_importance = document.querySelector('#importance_intro');

let callback = function(entries)
{ 
    if(entries[0].intersectionRatio > 0.4 )
    {

        target_importance.innerHTML = introTitle('Importance');

    }
    else
    {
        target_importance.innerHTML = '';
    }
};

let observer = new IntersectionObserver(callback,{
    threshold: 0.4
});

observer.observe(target_importance);
