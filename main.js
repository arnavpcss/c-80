student_Array=[];
display_student_Array=[];

function submit(){ 
    for(var i=1;i<=4;i++){
    var student_name=document.getElementById("student_"+i).value;
    student_Array.push(student_name);
    }
    console.log(student_Array);
    var length=student_Array.length;
    console.log(length);
    

    for(var j=0;j<length;j++){
    display_student_Array.push("<h4>Name-"+student_Array[j]+"</h4>");
    }
    console.log(display_student_Array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_Array;

    var removecommaarray=display_student_Array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommaarray;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

    
}

function sorting(){
   display_student_Array.sort();
   console.log(display_student_Array);


   var removecommaarray=display_student_Array.join(" ");
   document.getElementById('display_name_without_commas').innerHTML=removecommaarray;
}
