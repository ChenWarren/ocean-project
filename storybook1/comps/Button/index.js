function ButtonUI(bgcolor="bisque", text="Start", url='https://placekitten.com/200/200'){
  return `<div style='
    background-color: ${bgcolor};
    border-radius: 100px;
    min-height: 70px;
    max-height: 70px;
    min-width: 275px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  '
  onclick='ButtonUI.HandleClick(this)'
  >

  <div style='
    margin-left: 30px;
    font-size: 30px;
  '>${text}</div>


  <img style='
    border-radius: 50%;
    height: 75%;
    margin-right: 10px;
  'src='${url}' />

  </div>`
}

ButtonUI.HandleClick = (el) => {
  el.style.backgroundColor = "darkblue";
  el.style.color = "white";
  document.location="https://www.figma.com/file/FFMRAIgHnmdMigcNRi4h1g/sustainability-web-app?node-id=0%3A1"
}

//export const Button = ButtonUI();
