const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    // const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let results = document.querySelector("#results");
    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML=`please put right value of height ${height}`;
    } else if(weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML=`please put right value of weight ${weight}`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML =`<span>${bmi}</span>`;
        if(bmi<18.6){
            results.innerHTML=`<span>Under weigth :${bmi}</span>`;
            }else if(bmi>18.6 && bmi<24.9){
                results.textContent=`Normal Weight:${bmi}`;
                // const addText = document.createTextNode("Chai aur code")
                //  results.appendChild(addText)
            }else{
                results.textContent=`Over Weight : ${bmi}`
            }
        // if(results<18.6 ){
        //     const hh = document.querySelector('#weight-guide');
        //     hh.innerHTML =`under weight ${hh}`
        // }
    }
    
})