//Creates a list of all the students.
let studentList = document.querySelectorAll('.student-list li');

//Calculates the amount of pages needed.
let numOfPages = Math.ceil(studentList.length / 10);

//Appends the neccecary elements to the html.
$('.page').append('<div class="pagination"></div>');
$('.pagination').append('<ul></ul>');

//Appends all the "buttons" and their number.
for (let i = 0; i < numOfPages; i++) {
    $('.pagination ul').append('<li><a href=#>' + (i + 1) + '</a></li>');
}

//Just here to show the first 10 students and that button 1 is active.
for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
}
for (let i = 0; i < 10; i++) {
    studentList[i].style.display = 'block';
}

$( "ul li a").first().addClass("active");


let activeNum = 0;

//Runs when one of the buttons are clicked.
$('a').click(function () {
    //Removes the "active" class from all the buttons, resetting them.
    $("*").removeClass("active");
    //Adds the "active" class to the button pressed.
    $(this).addClass("active");
    //Looks which button is active and saves which button it is.
    activeNum = parseInt($(this).text());
    //Makes all students dissapear.
    for (let i = 0; i < studentList.length; i++) {
        studentList[i].style.display = 'none';
    }
    //Shows 10 students depending on which button you pressed.
    for (let i = activeNum * 10 - 10; i < activeNum * 10; i++) {
        studentList[i].style.display = 'block';
    }
});
