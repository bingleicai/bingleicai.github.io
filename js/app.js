document.addEventListener('DOMContentLoaded', function(){
    const sections = document.querySelectorAll('section');
    const secBtnContainer = document.querySelector('.controls');
    const secBtns = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');
    const themeBtn = document.querySelector('.theme-btn');

    //add function for each sec-Btn (add class 'active-btn' to section button when clicked and remove from other class list), when button clicked, class 'active-btn' is added
    for(const secBtn of secBtns){
        secBtn.addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        //only perform when button is clicked
        if(id){
            //remove other section from class 'active'
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            //add according section to class 'active'
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
    //toggle theme
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    
});
