// $(document).ready(function () {
//     // all the jquery code will be here to make sure it is ready to be executed. 
//     // There are three main slectors in jquery ie
//     // 1.element selector
//     // 2.id selector
//     // 3.class selector   
    
    
//     console.log('we are using jquery'); // console.log($); or we can write this 
//     // jQuery syntax looks like this.
//     // syntax for jQuery-$('selector').action();
    
//     // 1.element selector
//     // Clicks on all p elements as here p is the element ie example of element selector
//     //$('p').click(); //clicked on p as in selector is p and the action to perform the operation is the click ie we selected p and clicked on it to see the output. 
//     $('p').click(function () {
//         console.log('you clicked on p',this);
//         // $(this).hide(); //It is used to hide the one we clicked on
//         // $('#id').hide();
//         // $('.class').hide();
//     }); // this clicks on the function to carry out the console in it


//     // 2.id selector
//     // $('#second').click();

//     //class selector
//     // $('.odd').click();

//     // other selectors
//     // $('*').click(); clicks on all elements mentioned
//     // $('p.odd').click(); clicks on all odd elements 
//     // $('p:first').click(); clicks on the first element
// });