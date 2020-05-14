const list = '["Welcome to CPSC 436 assignment 1","Here is the message list!", "Type anything you want here!"]';


function submit_message() {
    var textarea = document.getElementById("messages");
    var text = textarea.value;
    var element = document.createElement("li");
    element.innerHTML = text;
    if (text !== "") {
        message_list.appendChild(element);
        var delete_button = create_delete_button();
        element.appendChild(delete_button);
    } else {
        alert("You should write something before submitting !");
    }
    textarea.value = null;
};

function initialize_message() {
    var js_list = JSON.parse(list);
    var message_list = document.getElementById("message_list");
    for (m of js_list) {
        var element = document.createElement("li");
        element.innerHTML = m;
        message_list.appendChild(element);
        var delete_button = create_delete_button();
        element.appendChild(delete_button);
    }
};

function clear_list() {
    var message_list = document.getElementById("message_list");
    var child = message_list.childNodes;
    if (child) {
        for (c of child) {
            message_list.remove(c);
        };
    };
};

function clear_message() {
    var text_area = document.getElementById("messages");
    text_area.value = "";
}

function create_delete_button() {
    var button = document.createElement("button");
    button.className = "delete";
    button.innerHTML = "\u00D7";
    button.onclick = function() {
        var li = button.parentElement;
        var message_list = document.getElementById("message_list");
        message_list.removeChild(li);
    }
    return button;
}