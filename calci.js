


let display = document.getElementById("display");


let button = Array.from(document.getElementsByClassName("btn"));


function clicking(el)
{
    el.addEventListener("click",(e)=>
    {
        switch(e.target.innerText)
        {
            case 'C': display.innerText = '';
                      break;
                      
            case '←': if( display.innerText == 'Error' || display.innerText == 'undefined' )
                               display.innerText = '';
                      else 
                      display.innerText = display.innerText.slice(0,-1);
                      break;

            case '=': if( display.innerText == 'Error')
                         display.innerText = 'Error';
                       
                       else if(display.innerText == '')
                            display.innerText='';

                       else
                      try{
                            display.innerText=eval(display.innerText);
                         }
                      catch
                         {
                            display.innerText='Error';
                         }
                      break;

            default:  if(display.innerText == 'Error')
                            display.innerText = e.target.innerText;

                       else
                      display.innerText = display.innerText + e.target.innerText;
                      break;
        }
    })
}

button.map(e=>clicking(e));