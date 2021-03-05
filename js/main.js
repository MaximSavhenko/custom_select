function customSelect() {

    let select = document.querySelectorAll('.select')
    select.forEach(select => {
        let btnSelect = select.querySelector('.select__btn'),
            listSelect = select.querySelector('.select__list'),
            itemsSelect = select.querySelectorAll('.select__item'),
            inputSelect = select.querySelector('.select__input')

    
        btnSelect.onclick = function (e) { 
            listSelect.classList.toggle('active');
        };

        itemsSelect.forEach(items => {
            items.onclick = function (e) {
                btnSelect.innerText = e.target.innerText;
                inputSelect.value = e.target.dataset.value;
                listSelect.classList.remove('active');  
            };
        });

        
        window.onclick = function (e) {
                if (!event.target.matches('.select__btn')){
                    listSelect.classList.remove('active');
                };
        }
    });
    
};

customSelect();