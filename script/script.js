document.addEventListener('DOMContentLoaded', ()=> {
    const tabBtns = document.querySelectorAll('.tabheader'),
          tabContents = document.querySelectorAll('.tabcontent'),
          tabBtnsParent = document.querySelector('.tabheadre_container');

    const hidden = () => {
        tabContents.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('show');
        });
        tabBtns.forEach(item=>{
            item.classList.remove('active');
        })
    }

    const show = (i = 0) =>{
        tabContents[i].classList.add('show');
        tabContents[i].classList.remove('hidden');

        tabBtns[i].classList.add('active');
    }

    hidden();
    show();

    tabBtnsParent.addEventListener('click', (e) =>{
        if(e.target && e.target.classList.contains('tabheader')){
            tabBtns.forEach((item, i) => {
                if(item == e.target){
                    hidden();
                    show(i);
                }
            })
        };
    });
});