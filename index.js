function showTheme(theme){
  
const themes = document.getElementsByClassName('my-cards');
for (var i = 0; i < themes.length; i++)
{
  if(theme == themes[i].id)
  {
    themes[i].style = "display: block";
  }
  else
  themes[i].style = "display: none";
}
}