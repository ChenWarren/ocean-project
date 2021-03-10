function webName(web_name, animateName, dura)
{
    return `<h1 id='webname' style='
        color: #FFF;
        font-size: 32px;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        margin: 20px;
        position: relative;
        animation-name: ${animateName};
        animation-duration: ${dura};
        animation-fill-mode: forwards;
    '>${web_name}</h1>
    `
}