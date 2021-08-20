let removeItem = document.querySelectorAll('.remove-item');
let increaseBtn = document.querySelectorAll('.fa-plus');
let decreaseBtn = document.querySelectorAll('.fa-minus');
let btns = [...increaseBtn, ...decreaseBtn];

for (let btn of btns) {
    btn.parentElement.addEventListener('click', e => {
        try {
            if (e.target.lastChild.classList.value.includes("fa-plus")) {
                let count = e.target.parentElement.children[1].value;
                e.target.parentElement.children[1].value = ++count;
                console.log(e.target.parentElement.parentElement.children[1].lastChild.innerText);
            } else {
                let count = e.target.parentElement.children[1].value;
                if (count > 0) {
                    e.target.parentElement.children[1].value = --count;
                }

            }
        } catch (error) {
            if (e.target.parentElement.lastChild.classList.value.includes("fa-plus")) {
                let count = e.target.parentElement.parentElement.children[1].value;
                e.target.parentElement.parentElement.children[1].value = ++count;
                console.log(e.target.parentElement.parentElement.parentElement.children[1].lastChild.innerText);
            } else {
                let count = e.target.parentElement.parentElement.children[1].value;
                if (count > 0) {
                    e.target.parentElement.parentElement.children[1].value = --count;
                }

            }
        }

    });
}
for (let item of removeItem) {
    item.addEventListener('click', e => {
        console.log(e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement));
    });
}
