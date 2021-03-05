function webName(web_name)
{
    return `<h1 id='webname' style='
        color: #FFF;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        position: relative;
        animation-name: topIn;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
    '>${web_name}</h1>
    `
}