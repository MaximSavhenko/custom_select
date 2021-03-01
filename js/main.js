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
        
       


        itemsSelect.forEach(items => {
            items.onclick = function (e) {
                btnSelect.forEach(btn => {
                    btn.innerText = e.target.innerText;
                });
                inputSelect.forEach(input => {
                    input.value = e.target.dataset.value;
                    
                });
                listSelect.forEach(list => {
                    list.classList.remove('active');    
                });
            };
        });


        for (let x = 0; x < listSelect.length; x++) {
            window.onclick = function (e) {
                if (!e.target.matches('.select__btn')){
                    listSelect[x].classList.remove('active');
                };
            };
            
        }
        
       
};

customSelect();