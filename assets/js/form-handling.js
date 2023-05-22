resetFields = function(){
    $('#username').val('');
    $('#number_value').val('');
    $('#label_value').val('');
}

validateFields = function(){
    if($("#username").val() && $("#label_value").val() && $("#number_value").val()){
        return true;
    } else {
        return false;
    }
}

var data = [];

$(document).ready(function(){
    var data = JSON.parse(localStorage.getItem("data"));
    $("#submitBtn").click(function(e){
        e.preventDefault();
        if(validateFields()){
            var inputs = $(":input");
            var newObject = {}
            var id = "";
            for (var i = 0; i < inputs.length; i++) {
                id = inputs.eq(i).attr("id");
                newObject[id] = inputs.eq(i).val();
            }
            resetFields();
            $(".error-msg").hide();
            data.push(newObject);
            localStorage.setItem("data", JSON.stringify(data));
        } else {
            $(".error-msg").show();
        }
    })
})