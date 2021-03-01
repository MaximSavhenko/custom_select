function customSelect() {
    let btnSelect = document.querySelectorAll('.select__btn'),
        listSelect = document.querySelectorAll('.select__list'),
        itemsSelect = document.querySelectorAll('.select__item'),
        inputSelect = document.querySelectorAll('.select__input')

        for (let i = 0; i < btnSelect.length; i++) {
            btnSelect[i].onclick = function () {
                listSelect[i].classList.toggle('active');
            }; 
        }
        
       


        // itemsSelect.forEach(items => {
        //     items.onclick = function (e) {
        //             btn.innerText = e.target.innerText;
        //             // input.value = e.target.dataset.value;
        //             // list.classList.remove('active');    
        //     };
        // });

       
        for (let i = 0; i < listSelect.length; i++) {

            listSelect[i].addEventListener("click", (function(i){return function(event){
                btnSelect[i].innerText = event.target.innerText;
                inputSelect[i].value = event.target.dataset.value;
            }})(i));
        }
        


        for (let j = 0; j < listSelect.length; j++) {

            window.addEventListener("click", (function(j){return function(event){
                    if (!event.target.matches('.select__btn')){
                        listSelect[j].classList.remove('active');
                    };
            }})(j));
        }
};

customSelect();