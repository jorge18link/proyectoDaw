function ocultar(){
    $(".esconde1").hide();
    $(".esconde2").hide();
    $(".esconde3").hide();
    $(".esconde4").hide();
    $(".esconde5").hide();
    $(".esconde6").hide();
    $(".esconde7").hide();
    $(".esconde8").hide();

}

function esconderProp(Ntabla){
    if(Ntabla==1){
        $("#propios").hide();
    }
    if (Ntabla==2) {
        $("#con").hide();
    }
}

$(document).ready(
    function(){
        $(".navi li").click(
        function(){
            seleccionado=$(".navi li");
            seleccionado.removeClass("active");
            $(this).addClass('active');
        })

        ocultar();
        $("#t1").click(function(){
            ocultar();
            $(".esconde1").show();
        });
        $("#t2").click(function(){
            ocultar();
            $(".esconde2").show();
        });
        $("#t3").click(function(){
            ocultar();
            $(".esconde3").show();
        });
        $("#t4").click(function(){
            ocultar();
            $(".esconde4").show();
        });
        $("#t5").click(function(){
            ocultar();
            $(".esconde5").show();
        });
        $("#t6").click(function(){
            ocultar();
            $(".esconde6").show();
        });
        $("#t7").click(function(){
            ocultar();
            $(".esconde7").show();
        });
        $("#t8").click(function(){
            ocultar();
            $(".esconde8").show();
        });

        esconderProp(1);
});

