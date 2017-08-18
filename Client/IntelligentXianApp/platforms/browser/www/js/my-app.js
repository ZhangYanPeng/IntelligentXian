// Initialize app
var myApp = new Framework7({
    // Default title for modals
    modalTitle: '西安信息惠民APP',
 
    // If it is webapp, we can enable hash navigation:
    pushState: true,
 
    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
}); 


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('city_select', function (page) {
    // Do something here for "about" page
})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'web-view') {
        // Following code will be executed for page with data-page attribute equal to "about"
        var str=location.href; //取得整个地址栏
        var num=str.indexOf("=") 
        str=str.substr(num+1);
        console.log(str);
        document.getElementById('web_url').src=str;
        document.getElementById('web_url').height=document.documentElement.clientHeight;
    }

})

myApp.onPageInit('index', function (page) {
    // Do something here for "about" page
    var mySwiper = myApp.swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationHide: true,
      paginationClickable: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
})
var mySwiper = myApp.swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationHide: true,
      paginationClickable: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });


