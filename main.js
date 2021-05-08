name_student = [];
display_array = [];
var display_name_with_commas = [];
var display_name_without_commas = [];
function submit()

for(var j = 1; j  <= 5; j++){
{
        var student_name = document.getElementById("name_" + j).value; 
        name_student.push(student_name);  
        console.log(name_student);
    }
    console.log(name_student);

var length_array = name_student.length;
for(var i = 0; i < length_array; i++){
    display_array.push("<h3>NAME = "+ name_student[i]+ "</h4>");
    console.log(display_array);
}

   console.log(display_array);
   document.getElementById("display_name_with_commas").innerHTML = display_array;

   var remove_commas = display_array.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}
 


function sorting()
{

    name_student.sort();
    document.getElementById("display_names").innerHTML = name_student;
    console.log(name_student);
}