function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<center> <h4 id='question_number'>" + number1 + " X " + number2 +"</h4>";
    input_box = "<h4 id='answer_box'>Answer : </h4><input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info btn-grad2' onclick='check()'>Check</button> </center>";
    row =question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}