$(document).ready(function(){

    $.ajax({
        url: './select_dropdown.php?id=staff',
        type: 'get',
        success: function(data){

            //Log the data to the console so that
            //you can get a better view of what the script is returning.
            console.log("victor:"+data);

            $.each(data.staff, function(key, modelName){
                //Use the Option() constructor to create a new HTMLOptionElement.
                var option = new Option(modelName, modelName);
                //Convert the HTMLOptionElement into a JQuery object that can be used with the append method.
                $(option).html(modelName);
                //Append the option to our Select element.
                $("#staff_selection").append(option);
            });
             //Change the text of the default "loading" option.
            $('#staff').text('--Please select a staff--');

        //     $.each(data.topic, function(key, modelName){
        //         //Use the Option() constructor to create a new HTMLOptionElement.
        //         var option = new Option(modelName, modelName);
        //         //Convert the HTMLOptionElement into a JQuery object that can] be used with the append method.
        //         $(option).html(modelName);
        //         //Append the option to our Select element.
        //         $("#topic_selection").append(option);
        //     });
        //      //Change the text of the default "loading" option.
        //     $('#topic').text('--Please select a topic--');

        //     $.each(data.time, function(key, modelName){
        //         //Use the Option() constructor to create a new HTMLOptionElement.
        //         var option = new Option(modelName, modelName);
        //         //Convert the HTMLOptionElement into a JQuery object that can be used with the append method.
        //         $(option).html(modelName);
        //         //Append the option to our Select element.
        //         $("#time_selection").append(option);
        //     });
        //      //Change the text of the default "loading" option.
        //     $('#time').text('--Please select a time--');
         }

    });


});
