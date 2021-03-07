// imgSrc for image url
// title for title text
// intro_discre for discreption text
// h1Dur for title animation duration
// paraDur for discreption text animation duration

function introTitle(imgSrc, title,intro_discre,h1Dur,paraDur)
{
    return `<div style='
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        align-items: center;
    '>
    <img style='
        margin-bottom: 20px;
    ' src=${imgSrc}>  
    <h1 style='
        text-align: center;
        font-size: 36px;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        position: relative;
        animation-name: leftIn;
        animation-duration: ${h1Dur};
        animation-fill-mode: forwards;
        margin:10px;
    '>${title}</h1>
    <p style='
        color: #FFF;
        position: relative;
        animation-name: rightIn;
        animation-duration: ${paraDur};
        animation-fill-mode: forwards;
        margin:15px;
        padding: 0 10px 0 10px;
    '>${intro_discre}</p>
    </div>
    `
}