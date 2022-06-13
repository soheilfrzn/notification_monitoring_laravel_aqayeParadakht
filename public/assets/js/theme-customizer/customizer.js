if(localStorage.getItem("color"))
    $("#color" ).attr("href", "../assets/css/"+localStorage.getItem("color")+".css" );
if(localStorage.getItem("dark"))
    $("body").attr("class", "dark-only rtl");
$('<div class="customizer-links"> <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#layout-type"> <div class="settings"><i class="icofont icofont-laptop-alt"></i></div><span>تغییر چیدمان</span> </a> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home"> <div class="settings"><i class="icofont icofont-ui-settings"></i></div><span>نوع سایدبار</span> </a> <a class="nav-link" id="c-pills-home-tab1" data-bs-toggle="pill" href="#c-pills-profile"> <div class="settings color-settings"><i class="icofont icofont-color-bucket"></i></div><span>تغییر رنگ</span> </a> </div><div class="customizer-contain"> <div class="tab-content" id="c-pills-tabContent"> <div class="customizer-header"> <i class="icofont-close icon-close"></i> <h5>ویرایشگر زنده</h5> <p class="mb-0">سفارشی سازی و پیشنمایش زنده</p></div><div class="customizer-body custom-scrollbar"> <div class="tab-pane fade show active" id="layout-type"> <ul class="sidebar-type layout-grid layout-types"> <li data-attr="defaul-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/1.jpg" alt=""></a> <h6>چیدمان پیشفرض</h6> </div></li><li data-attr="compact-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/2.jpg" alt=""></a> <h6>چیدمان فشرده</h6> </div></li><li data-attr="modern-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/3.jpg" alt=""></a> <h6>چیدمان مدرن</h6> </div></li></ul> </div><div class="tab-pane fade" id="c-pills-home"> <h6>نوع چیدمان</h6> <ul class="main-layout layout-grid text-start"> <li data-attr="ltr"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul> </div></li><li class="active" data-attr="rtl"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light body"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul> </div></li><li class="box-layout px-3" data-attr="ltr"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul> </div></li></ul> <h6>نوع سایدبار</h6> <ul class="sidebar-type layout-grid text-start"> <li data-attr="normal-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li data-attr="compact-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar compact"></li><li class="bg-light body"></li></ul> </div></li></ul> </div><div class="tab-pane fade" id="c-pills-profile"> <h6>چیدمان روشن</h6> <ul class="layout-grid customizer-color"> <li class="color-layout" data-attr="color-1" data-primary="#24695c" data-secondary="#ba895d"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#d97f3d" data-secondary="#f25f4c"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#168eea" data-secondary="#90b4cd"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#665ed5" data-secondary="#d1d1e9"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#3a9aa8" data-secondary="#984ff3"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#7951aa" data-secondary="#72757D"> <div></div></li></ul> <h6>چیدمان تیره</h6> <ul class="layout-grid customizer-color dark"> <li class="color-layout" data-attr="color-1" data-primary="#24695c" data-secondary="#ba895d"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#d97f3d" data-secondary="#f25f4c"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#168eea" data-secondary="#90b4cd"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#665ed5" data-secondary="#d1d1e9"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#3a9aa8" data-secondary="#984ff3"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#7951aa" data-secondary="#72757D"> <div></div></li></ul> <h6>چیدمان میکس</h6> <ul class="layout-grid customizer-mix"> <li class="color-layout active" data-attr="light-only rtl"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-sidebar rtl"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-only rtl"> <div class="header bg-dark"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-dark body"></li></ul> </div></li></ul> </div></div></div></div></div>').appendTo($('body'));
(function() {
})();


//live customizer js
$(document).ready(function () {
      $(".customizer-color li").on('click', function() {
        $(".customizer-color li").removeClass('active');
        $(this).addClass("active");
        var color = $(this).attr("data-attr");
        var primary = $(this).attr("data-primary");
        var secondary = $(this).attr("data-secondary");
        localStorage.setItem("color", color);
        localStorage.setItem("primary", primary);
        localStorage.setItem("secondary", secondary);
        localStorage.removeItem("dark");
        $("#color" ).attr("href", "../assets/css/"+color+".css" );
        $(".dark-only").removeClass('dark-only');
        location.reload(true);
    });
    $(".customizer-color.dark li").on('click', function() {
        $(".customizer-color.dark li").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "dark-only rtl");
        localStorage.setItem("dark", "dark-only");
    });


    if(localStorage.getItem("primary") != null) {
        document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("primary"));
    }
    if(localStorage.getItem("secondary") != null) {
        document.documentElement.style.setProperty('--theme-secondary', localStorage.getItem("secondary"));
    }
    $(".customizer-links #c-pills-home-tab , .customizer-links #c-pills-layouts-tab , .customizer-links  #c-pills-home-tab1").click(function () {
        $(".customizer-contain").addClass("open");
        $(".customizer-links").addClass("open");
    });

    $(".close-customizer-btn").on('click', function () {
        $(".floated-customizer-panel").removeClass("active");
    });

    $(".customizer-contain .icon-close").on('click', function () {
        $(".customizer-contain").removeClass("open");
        $(".customizer-links").removeClass("open");
    });

    $(".color-apply-btn").click(function(){
        location.reload(true);
    });

    // var primary = document.getElementById("ColorPicker1").value;
    // document.getElementById("ColorPicker1").onchange = function () {
    //   primary = this.value;
    //   localStorage.setItem("primary", primary);
    //   document.documentElement.style.setProperty('--theme-primary', primary);
    // };

    // var secondary = document.getElementById("ColorPicker2").value;
    // document.getElementById("ColorPicker2").onchange = function () {
    //   secondary = this.value;
    //   localStorage.setItem("secondary", secondary);
    //   document.documentElement.style.setProperty('--theme-secondary', secondary);
    // };


    $(".customizer-color.dark li").on('click', function () {
        $(".customizer-color.dark li").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "dark-only rtl");
        localStorage.setItem("dark", "dark-only");
    });
    $(".customizer-mix li").on('click', function () {
        $(".customizer-mix li").removeClass('active');
        $(this).addClass("active");
        var mixLayout = $(this).attr("data-attr");
        $("body").attr("class", mixLayout);
    });
   
    $('.sidebar-main-bg-setting li').on('click', function () {
        $(".sidebar-main-bg-setting li").removeClass('active')
        $(this).addClass("active")
        var bg = $(this).attr("data-attr");
        $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
    });


    $('.main-layout li').on('click', function () {
        $(".main-layout li").removeClass('active');
        $(this).addClass("active");
        var layout = $(this).attr("data-attr");
        $("body").attr("class", layout);
        $("html").attr("dir", layout);
    });

    $('.main-layout .box-layout').on('click', function () {
        $(".main-layout .box-layout").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "box-layout rtl");
        $("html").attr("dir", "rtl");
    });



    $('.sidebar-type li').on('click', function () {
        $("body").append('');
        console.log("test");
        var type = $(this).attr("data-attr");
        var boxed = "";
        if ($(".page-wrapper").hasClass("box-layout")) {
            boxed = "box-layout";
        }
        switch (type) {
            case 'defaul-layout': {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
                $(this).addClass("active");
                localStorage.setItem('page-wrapper', 'compact-wrapper');
                break;
            }
            case 'modern-layout': {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper modern-sidebar" + boxed);
                localStorage.setItem('page-wrapper', 'compact-wrapper modern-sidebar');
                break;
            }
            case 'compact-layout': {
                $(".page-wrapper").attr("class", "page-wrapper compact-sidebar" + boxed);
                localStorage.setItem('page-wrapper', 'compact-wrapper compact-sidebar');
                break;
            }
            case 'normal-sidebar': {
                $(".page-wrapper").attr("class", "page-wrapper horizontal-wrapper " + boxed);
                $(".logo-wrapper").find('img').attr('src', '../assets/images/logo/logo.png');
                localStorage.setItem('page-wrapper', 'horizontal-wrapper');
                localStorage.setItem('page-body-wrapper', 'horizontal-menu');
                break;
            }
           case 'compact-sidebar': {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
                $(this).addClass("active");
                localStorage.setItem('page-wrapper', 'compact-wrapper ');
                break;
            }
            default: {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
                localStorage.setItem('page-wrapper', 'compact-wrapper');
                break;
            }
        }
        // $(this).addClass("active");
        location.reload(true);
    });

    
});
