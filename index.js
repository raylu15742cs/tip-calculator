let cool = document.getElementById("main")

const itstime = () => {
    let input1 = document.createElement("input")
    let button1 = document.createElement("button")
    button1.innerHTML = 'Calculate';
    cool.appendChild(input1)
    cool.appendChild(button1);
    button1.addEventListener("click", function() {
        if(input1.value > 1) {
            console.log(input1.value);
            let new1 = Math.ceil(parseFloat(input1.value * 1.1) );
            let tip = parseFloat(new1 - input1.value).toFixed(2);
            let final = document.createElement('p');
            final.innerHTML = `Tips : ${tip} Total : ${new1}`;
            cool.appendChild(final);
            console.log(
                new1,
                input1.value,
                parseFloat(new1 - input1.value).toFixed(2)
            );
        }
    })
}


itstime();