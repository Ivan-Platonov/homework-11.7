window.onload = function() {

    //------------------------------------------------------------------------------
    //The tabs content function block (show/hide)
    //------------------------------------------------------------------------------
    let tabsContent = document.querySelectorAll('.workContent__consult');
    let tabs = document.querySelectorAll('.workNav__link');
    let workContentDescribe = document.querySelectorAll('.workContent__describe');


    function ourWorksTabs() {
        let i = 0;
        // recieve 1 in function (i = 1) because the content of the first tab (0 index in the array) must be visible
        hideTabsContent(1);

        document.querySelector('.workNav__list').onclick = function(event) {
            let target = event.target;
            if (target.classList.contains('workNav__link')) {
                for (i = 0; i < tabs.length; i++) {
                    if (target == tabs[i]) {
                        // hide the content of the all tabs
                        hideTabsContent(0);
                        //show the content of the clicked tab (with index i when target = tabs[i])
                        showTabsContent(i);
                        break;
                    };
                };
            };
        };
    };

    function hideTabsContent(tabIndex) {
        for (i = tabIndex; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('visually-hidden');
            tabsContent[i].style.opacity = '0';
            workContentDescribe[i].classList.add('workContent__consult-hidden');
        };
    };

    function showTabsContent(tabIndex) {
        tabsContent[tabIndex].classList.remove('visually-hidden');
        tabsContent[tabIndex].style.opacity = '1';
        workContentDescribe[tabIndex].classList.remove('workContent__consult-hidden');
    };

    //------------------------------------------------------------------------------
    //The accordian function block 
    //------------------------------------------------------------------------------
    function faqAccordian() {
        let acc = document.querySelectorAll(".faq__itemBlock");
        let faqsContent = document.querySelectorAll(".faq__itemContent");
        let faqslinkIcon = document.querySelectorAll(".faq__linkIcon");

        hideFaqsContent();
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                let thisFaqContent = this.parentNode.querySelector(".faq__itemContent");
                let thisfaqlinkIcon = this.querySelector(".faq__linkIcon");
                if (!thisFaqContent.classList.contains('faq__hide')) {
                    hideFaqsContent();
                } else {
                    hideFaqsContent();
                    thisfaqlinkIcon.classList.add('faq__Icon-Rotate');
                    thisFaqContent.classList.remove('faq__hide');
                };
            });
        };

        function hideFaqsContent() {
            for (i = 0; i < faqsContent.length; i++) {
                faqslinkIcon[i].classList.remove('faq__Icon-Rotate');
                faqsContent[i].classList.add('faq__hide');
            };
        };
    };

    //------------------------------------------------------------------------------
    //Run the functions
    //------------------------------------------------------------------------------

    ourWorksTabs();
    faqAccordian();
};