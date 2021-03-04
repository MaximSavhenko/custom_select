function customSelect() {
    let btnSelect = document.querySelectorAll('.select__btn'),
        listSelect = document.querySelectorAll('.select__list'),
        itemsSelect = document.querySelectorAll('.select__item'),
        inputSelect = document.querySelectorAll('.select__input'),
        select = document.querySelectorAll('.select')

        for (let i = 0; i < btnSelect.length; i++) {
            btnSelect[i].addEventListener("click", (function(i){return function(event){
                listSelect[i].classList.toggle('active');
            }})(i));
        }

        
        
       
        

        // itemsSelect.forEach(items => {
        //     items.onclick = function (e) {
        //         btnSelect.innerText = e.target.innerText;
        //         inputSelect.value = e.target.dataset.value;
        //         listSelect.classList.remove('active');    
        //     };
        // });

        
            for (let i = 0; i < itemsSelect.length; i++) {
                itemsSelect[i].onclick = function (event) {
                    btnSelect[i].innerText = event.target.innerText;
                    inputSelect[i].value = event.target.dataset.value;
                    listSelect[i].classList.remove('active');  
                };
            }
            

       
        

        // for (let j = 0; j < select.length; j++) {
        //     for (let i = 0; i < itemsSelect.length; i++) {

        //         itemsSelect[j].onclick = function (e) {
        //             btnSelect[j].innerText = event.target.innerText;
        //             inputSelect[j].value = event.target.dataset.value;
                    // listSelect[j].classList.remove('active');  
        //         };
        //     }
        // }

        

        
        


        for (let j = 0; j < listSelect.length; j++) {

            window.addEventListener("click", (function(j){return function(event){
                    if (!event.target.matches('.select__btn')){
                        listSelect[j].classList.remove('active');
                    };
            }})(j));
        }
};

customSelect();