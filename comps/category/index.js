function category(cat_name, cat_discre, animateDr, hrefLink)
{
    return `<div style='
        height: 80px;
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
        position: relative;
        animation-name: ${animateDr};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    '>
    <a href = ${hrefLink}>
    <h1 style='
        font-size: 28px;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    '>${cat_name}</h1></a>
    <p>${cat_discre}</p>
    </div>
    `
}