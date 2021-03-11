// imgSrc for image url
// title for title text
// intro_discre for discreption text
// h1Dur for title animation duration
// paraDur for discreption text animation duration
function outro(imgSrc, intro_discre1, intro_discre2, title, h1Dur, paraDur) {
    return `<div style='
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        align-items: center;
    '>
    <img style='
        margin: 0 10px 20px 10px;
    ' src=${imgSrc}>
    <p style='
        color: #FFF;
        position: relative;
        animation-name: rightIn;
        animation-duration: ${paraDur};
        animation-fill-mode: forwards;
        margin:10px;
        padding: 0 10px 0 10px;
        font-size: 14px;
    '>${intro_discre1}</p>
    <p style='
        color: #FFF;
        position: relative;
        animation-name: rightIn;
        animation-duration: ${paraDur};
        animation-fill-mode: forwards;
        margin:10px;
        padding: 0 10px 0 10px;
        font-size: 21px;
    '>${intro_discre2}</p>
    <h1 style='
        text-align: center;
        font-size: 41px;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        position: relative;
        animation-name: leftIn;
        animation-duration: ${h1Dur};
        animation-fill-mode: forwards;
        margin:10px;
    '>${title}</h1>
    </div>
    `;
}
