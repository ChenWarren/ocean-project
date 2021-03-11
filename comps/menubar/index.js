function menubar(liName, hrefLink)
{
    return `<div style='
        height: 80px;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
    '>
    <a href = ${hrefLink}>
    <h1 style='
        font-size: 24px;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    '>${liName}</h1></a>
    </div>
    `
}