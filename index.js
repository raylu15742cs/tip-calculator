let cool = document.getElementById("main")

const itstime = () => {
    let input1 = document.createElement("input")
    input1.type = "number";
    let button1 = document.createElement("button")
    button1.innerHTML = '10%';
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
    let button2 = document.createElement("button")
    button2.innerHTML = "15%";
    button2.addEventListener('click', function () {
      if (input1.value > 1) {
        console.log(input1.value);
        let new1 = Math.ceil(parseFloat(input1.value * 1.15));
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
    });
    cool.appendChild(button2)

    let button3 = document.createElement('button');
    button3.innerHTML = '20%';
    button3.addEventListener('click', function () {
      if (input1.value > 1) {
        console.log(input1.value);
        let new1 = Math.ceil(parseFloat(input1.value * 1.2));
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
    });
    cool.appendChild(button3);
}


itstime();