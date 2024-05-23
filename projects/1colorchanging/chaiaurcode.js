const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const span = document.querySelector('span:last-child');
// const testing = span.setAttribute("id" , "test");
// console.log(span);
buttons.forEach(function (button){
    button.addEventListener('click' ,function (event){
        console.log(event);
        // console.log(event.target);
        // if(event.target.id==='grey'){
        //     body.style.backgroundColor= "grey";
        // } else if(event.target.id==='white'){
        //     body.style.backgroundColor= event.target.id;
        // } else if(event.target.id==='blue'){
        //     body.style.backgroundColor= event.target.id;
        // }else if(event.target.id==='yellow'){
        //     body.style.backgroundColor= event.target.id;
        // }
        switch(event.target.id) {
            case 'grey':
                body.style.backgroundColor = "grey";
                span.style.color ="green";
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            default:
                // Default action if none of the cases match
                break;
        }
    });
});