function boton(){
   $(".boton").click(function(){
    titulo= $("#titulo").val();
    fecha= $("#fecha").val();
    descr= $("#dp").val();
    var temp=$("<div>").append(($("<strong>").text("Titulo: ")),($("<p>").text(titulo)),($("<strong>").text("fecha: ")),($("<p>").text(fecha)),($("<strong>").text("Descripcion: ")),($("<p>").text(descr)));
    $(".contenedor").append(temp);
    $(".contenedor").append($("<hr>"))
   });
   
}







$(document).ready(function() {
    $("#datePicker")
        .datepicker({
            format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
            // Revalidate the date field
            $('#contact_form').bootstrapValidator('revalidateField', 'date');
        });

    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            titulo_project: {
                validators: {
                        stringLength: {
                        min: 4,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            date:{
                excluded: false,
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
    });
    var contenedor= $("<div>",{"class":"thumbnail contenedor"});
    $(".allofthem").append(contenedor);
    boton();
});