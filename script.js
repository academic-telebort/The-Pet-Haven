var cards = document.querySelectorAll(".item");
var buttons = document.querySelectorAll(".btn");
var pets = document.querySelectorAll(".card-text");
var texts = document.querySelectorAll(".card-title");
var textbox = document.querySelector(".form-control");
var label = document.querySelectorAll(".text-center")[1];
var img = document.querySelectorAll(".card-img-top")
// console.log(buttons)

// buttons[0].addEventListener("click", function () {
//     cards.forEach(function (element) {
//         element.style.display = "block";
//     })
// })

//part 3

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        cards.forEach(function (card, index) {

            var btn = button.innerHTML.toLowerCase();
            label.textContent = button.innerHTML;

            if (card.classList.contains(btn)) {
                card.style.display = "block";
            }
            else if (button.innerHTML.toLowerCase() == "all") {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        })
    }
    )

})

//part 4

textbox.addEventListener("keyup", function (event) {
    var searchValue = event.target.value.toLowerCase().trim();
    cards.forEach(function (card, index) {
        if (card.textContent.toLowerCase().trim().includes(searchValue)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
});
