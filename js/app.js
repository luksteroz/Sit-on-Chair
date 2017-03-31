document.addEventListener("DOMContentLoaded", function () {

//menu

    var menu = document.querySelector(".menu").children;
    console.log(menu);

    for ( var i = 0; i < menu.length; i++){
        menu[i].addEventListener("mouseover", function () {
            var hiddenMenu = this.querySelector("ul");
            if (hiddenMenu != null){
                hiddenMenu.style.display = "block"
            }
        });

        menu[i].addEventListener("mouseout", function () {
            var hiddenMenu = this.querySelector("ul");
            if (hiddenMenu != null){
                hiddenMenu.style.display = "none"
            }
        });
    }

//slider

    var buttonNext = document.querySelector(".slider__arrows__next");
    var buttonPrev = document.querySelector(".slider__arrows__prev");
    var lists = document.querySelector(".sliderList").children;
    var index = 0;
    console.log(buttonPrev, buttonNext, lists)


    lists[index].classList.toggle("visible");

    buttonNext.addEventListener("click", function () {
        lists[index].classList.toggle("visible");
        index += 1;
        if (index >= lists.length){
            index = 0;
        }
        lists[index].classList.toggle("visible");
    });
    buttonPrev.addEventListener("click", function () {
        lists[index].classList.toggle("visible");
        index -= 1;
        if (index < 0){
            index = lists.length-1;
        }
        lists[index].classList.toggle("visible");
    });

//products

    var textShadow = document.querySelectorAll(".box");
    for ( var i = 0; i < menu.length; i++){
        textShadow[i].addEventListener("mouseover", function () {
            this.firstElementChild.style.display = "none";
        });

        textShadow[i].addEventListener("mouseout", function () {
            this.firstElementChild.style.display = "block";
        });
    }




//kalkulator

    var dropColor = document.querySelectorAll(".list_arrow");
    var pickColor = document.querySelectorAll(".list_panel");

    var priceColumn = document.querySelector(".panel_right").children;

    var typeChair = document.querySelector(".panel_left").children;

    var checkBox = document.querySelector(".check-box label");

    var liElement = document.querySelectorAll(".form li");
    var sum = document.querySelector(".sum strong");
    var results = 0;
    var panelRight = document.querySelector(".panel_right").children;



function summary(){
    for (var i = 0; i < panelRight.length; i++) {
        results = Number(panelRight[i].innerText) + results
        sum.innerText = results;
        console.log(results);
    }
    results = 0;
}



    dropColor[0].addEventListener("click", function (event) {
        event.preventDefault();
        var choose = this.nextElementSibling;
        choose.classList.toggle("display");
        var pickElement = choose.children;
        console.log(pickElement);

        for (var i = 0; i < pickElement.length; i++) {

            pickElement[i].addEventListener("click", function (event){

                var text = this.innerText;
                typeChair[0].innerText = text;
                var price = this.dataset.price;
                priceColumn[0].innerText = Number(price);
                choose.classList.toggle("display");
                summary();
            });
        }

    });

    dropColor[1].addEventListener("click", function (event) {
        event.preventDefault();
        var choose = this.nextElementSibling;
        choose.classList.toggle("display");
        var pickElement = choose.children;

        for (var i = 0; i < pickElement.length; i++) {
            pickElement[i].addEventListener("click", function (event){
                var text = this.innerText;
                typeChair[1].innerText = text;
                var price = this.dataset.price;
                priceColumn[1].innerText = Number(price);
                choose.classList.toggle("display");
                summary();
            });
        }
    });

    dropColor[2].addEventListener("click", function (event) {
        event.preventDefault();
        var choose = this.nextElementSibling;
        choose.classList.toggle("display");
        var pickElement = choose.children;

        for (var i = 0; i < pickElement.length; i++) {
            pickElement[i].addEventListener("click", function (event){

                var text = this.innerText;
                typeChair[2].innerText = text;
                var price = this.dataset.price;
                priceColumn[2].innerText = Number(price);
                choose.classList.toggle("display");
                summary();
            });
        }

    });


    checkBox.addEventListener("click", function (event){
        event.preventDefault();
        if (this.previousElementSibling.checked == true) {
            priceColumn[3].innerText = "";
            typeChair[3].innerText =  "";
            result = Number(this.previousElementSibling.dataset.price);
            sum.innerText = Number(sum.innerText) - result;
            result = 0;
        }else {
            typeChair[3].innerText = "Transport";
            priceColumn[3].innerText =             Number(this.previousElementSibling.dataset.price);
            console.log(priceColumn[3]);
            summary();
        }
    });

});
