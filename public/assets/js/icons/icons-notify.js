$(function(){
    $(".notification").on("click",function(){
        $.notify({
            icon: 'glyphicon glyphicon-star',
            message: "کد در کلیپ برد کپی شد  "
        },{
            type: 'copy',
            newest_on_top:false ,
            mouse_over:false,
            showProgressbar:false,
            spacing:10,
            timer:1400,
            z_index: 1000,
            allow_dismiss: true,
            delay:1000,
            placement:{
                from:'bottom',
                align:'left'
            },
            animate:{
                enter:'animated bounce',
                exit:'animated bounce'
            }
        });
    });
});