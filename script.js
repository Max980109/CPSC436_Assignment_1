var message_obj = {};
var num_message = 0;
var initial_message = []

function submit_message() {
    var text = document.getElementById("messages");
    message_obj[num_message] = text;
    num_message+= 1;


}