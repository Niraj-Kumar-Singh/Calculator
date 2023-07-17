let string = "";

let inputBox = document.querySelector('.inputDis');
let buttons = document.querySelectorAll('.numbers');
let equal = document.querySelector('.equal');



buttons.forEach(function(e)
{
    e.addEventListener('click', function()
    {
        
        if(e.value === 'AC')
        {
            string='';
            inputBox.value='';
        }
        else if(e.value === '=')
        {
            string=String(eval(string));
            console.log(typeof string);
            console.log(string);
            inputBox.value=string;
            string='';
        }
        else if(e.value === 'DE')
        {
            string=string.slice(0, -1);
            inputBox.value=string;

        }
        else
        {
            console.log(e.value);
            
                string+=e.value;
                inputBox.value=string;

            
            
            

        }
        
        

    });


    
});




document.addEventListener('keydown', function(e)
{
    console.log(e);


    
        if(e.key === 'AC' || e.key === "Delete")
        {
            string='';
            inputBox.value='';
        }
        else if(e.key === '=' || e.key === "Enter")
        {
            // string=String(eval(string));
            // console.log(typeof string);
            // console.log(string);
            // inputBox.value=string;
            // string='';

            equal.click();
        }
        else if(e.key === 'DE' || e.key === "Backspace")
        {
            string=string.slice(0, -1);
            inputBox.value=string;

        }
        else
        {
            // console.log(e.key);
            
                string+=e.key;
                inputBox.value=string;
            

        }
});



