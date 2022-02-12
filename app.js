/* const allButton = document.getElementsByClassName('button-test');
const prime = document.getElementById('prime');

console.log(allButton)
// console.log(prime)

for (const button of allButton) {
    button.addEventListener('click', function (e) {
        // console.log(e.target.parentNode.parentNode)
        if (e.target.id == 'prime') {
            document.getElementById("title").style.color = 'red';
        }
        else {
            document.getElementById("title").style.color = 'green';
        }
    });
}; */


/* document.getElementById('add').addEventListener('click', function () {
    count++;
    // document.getElementById('count').innerText = count;
    control('count')
}); */

/* document.getElementById('minus').addEventListener('click', function () {
    count--;
    // document.getElementById('count').innerText = count;
    control('count')
}) */
let count = 0;

function control(id) {
    document.getElementById(id).innerText = count;
}

function add(e) {
    count++;
    control('count')
}

function minus(event) {
    count--;
    if (count < 0) {
        return count++;
    }
    control('count')
}
