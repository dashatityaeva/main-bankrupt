let tab = function () {
    let tabNav = document.querySelectorAll('.duty__tabs-item'),
        tabContent = document.querySelectorAll('.duty__tabs-info'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('duty__tabs-item_active');
        });
        this.classList.add('duty__tabs-item_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('duty__tabs-info_active') : item.classList.remove('duty__tabs-info_active');
        })

    }
};

tab();

// let win = window,
//     docEl = document.documentElement,
//     nav = document.querySelector('.duty__tabs-nav');



// nav.onscroll = function() {
//     // console.log(this.clientWidth);
//     // console.log(this.screenX);
//     // console.log(this.scrollLeft);
//     // console.log(this.scrollWidth);
//     // console.log(this.offsetWidth);
//     //console.log(docEl.scrollLef);
//     // console.log(docEl.clientTop);
//     //let change = 
//     if ((this.scrollWidth-this.clientWidth) = 0 ) {

//     }
//     console.dir(nav);
// }