var SweetAlert_custom = {
    init: function() {
        document.querySelector('.sweet-1').onclick = function(){
            swal("سلام دنیا!");
        },  document.querySelector('.sweet-2').onclick = function(){
                swal("عنوان اینجاست!", "...و متنش اینجاست!");
        },  document.querySelector('.sweet-3').onclick = function(){
                swal("آفرین!", "شما روی دکمه کلیک کردید!", "info");
        },  document.querySelector('.sweet-4').onclick = function(){
                swal("روی دکمه یا خارج از مدال کلیک کنید.")
                .then((value) => {
                swal(`مقدار برگشتی است: ${value}`);
            });
        },  document.querySelector('.sweet-5').onclick = function(){
                swal({
                    title: "مطمئنی؟",
                    text: "پس از حذف، نمی توانید این فایل را بازیابی کنید!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("پوف! فایل شما حذف شد!", {
                            icon: "success",
                        });
                    } else {
                        swal("فایل شما محفوظ است!");
                    }
                })
        },  document.querySelector('.sweet-6').onclick = function(){
                swal("آفرین!", "شما روی دکمه کلیک کردید!", "warning");
        },  document.querySelector('.sweet-7').onclick = function(){
                swal("آفرین!", "شما روی دکمه کلیک کردید!", "error");
        },  document.querySelector('.sweet-8').onclick = function(){
                swal("آفرین!", "شما روی دکمه کلیک کردید!", "success");
        },  document.querySelector('.sweet-9').onclick = function(){
                swal("آفرین!", "شما روی دکمه کلیک کردید!", "info");
        },  document.querySelector('.sweet-10').onclick = function(){
                swal("آیا مطمئنید که می خواهید این کار را انجام دهید؟", {
                    buttons: ["اوه نه!", "اوه آره!"],
                });
        },  document.querySelector('.sweet-11').onclick = function(){
                swal("آیا مطمئنید که می خواهید این کار را انجام دهید؟", {
                    buttons: ["اوه نه!", "او آره!"],
                });
        },  document.querySelector('.sweet-12').onclick = function(){
                swal("یک پیکاچوی وحشی ظاهر شد! میخوای چیکار کنی؟", {
                    buttons: {
                        cancel: "گریختن!",
                        catch: {
                            text: "پوکبال را پرتاب کن!",
                            value: "کش",
                        },
                        defeat: 'شکست',
                    },
                })
                .then((value) => {
                    switch (value) {
                        case "شکست":
                        swal("پیکاچو بیهوش شد! شما 500 XP به دست آوردید!");
                        break;
                        case "catch":
                        swal("گوچا!", "پیکاچو گرفتار شد!", "success");
                        break;
                        default:
                        swal("به سلامت دور شد!");
                    }
                });
        },  document.querySelector('.sweet-13').onclick = function(){
                swal("اینجا چیزی بنویس:", {
                    content: "input",
                })
                .then((value) => {
                    swal(`متن شما: ${value}`);
                });
        };
    }
};
(function($) {
    SweetAlert_custom.init()
})(jQuery);