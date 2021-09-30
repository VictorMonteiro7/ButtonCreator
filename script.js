const controles = document.querySelector("#controles");
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange)

const handleStyle = {
  element: btn,
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  text(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;
  handleStyle[name](value);
  showCss();
}

function showCss(){
 cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>');;  
}