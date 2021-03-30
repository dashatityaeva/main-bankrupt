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


//=========== результаты работы=============
$(document).ready(function () {
    $('.case__name').click(function () {
        $(this).parent().toggleClass('case__item_active');
    });

    $(".case__item").hover(function () {
        $(this).toggleClass("case__item_hover")
    });
});

//=========== результаты работы=============

//=========== Контакты=============

$(document).ready(function () {

    let city = $('.contacts__city');
    let popup = $('.popup-wrap');
    let popupClose = $('.popup-close');
    
    let clearPopup = function () {
        $('body').css({'overflow' : 'visible'});
        popup.removeClass('popup-visibled');
    }

    city.click(function() {
        city.removeClass('contacts__city_check');
        $(this).addClass('contacts__city_check');

        let nameOfCity = $(this).text();

        $('.popup-city').text(nameOfCity);
        $('body').css({'overflow' : 'hidden'});
        popup.addClass('popup-visibled');

        if (popup) {
            popupClose.click(function() {
                clearPopup();
            });

            $(window).click(function(e) {
                if (e.target == popup[0]) {
                    clearPopup();
                }
            });

            $(document).keyup(function(e) {
                if (e.key === "Escape" || e.keyCode === 27) {
                    clearPopup();
                }
            });

        } 
    })
   
        
   
});

//=========== Контакты=============