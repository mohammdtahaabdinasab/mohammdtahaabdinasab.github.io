function CheckingDarkmode(){
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.backgroundColor = "#3a3a3a";
  }
}
