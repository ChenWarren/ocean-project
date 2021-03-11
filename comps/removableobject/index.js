function DelObjectUI(url='https://placekitten.com/200/200', x=0, y=0, dim=100){
  return `
    <div style='
      border-radius: 50%;
      overflow: hidden;
      height: ${dim}px;
      width: ${dim}px;
      position: absolute;
      top: ${y}px;
      left: ${x}px;
      transition: opacity 1s, top 1s;
      opacity: 1;
    '
    onclick='DelObjectUI.HandleClick(this)'
    >

    <img style='
      width: 100%;
      height: 100%;
      object-fit: cover;
    '
      src='${url}' />
    </div>
  `
}

DelObjectUI.HandleClick = (el) => {
  el.style.opacity = 0.0;
  el.style.top = "300px";
}

//export const DelObject = DelObjectUI();
