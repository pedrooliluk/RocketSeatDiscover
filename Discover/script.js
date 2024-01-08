function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  /*
  if( html.classList.contains('light')){
    html.classList.remove("light")
  }else{
    html.classList.add("light")
  }
  */
  html.classList.toggle("light")

  // pegar tag img e substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "deu ruim")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "deu ruim2")
  }
}
