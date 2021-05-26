var mark = 50;
var gpa;
switch (true) {
    case mark >= 90 && mark <=100:
    gpa= 'congratulations!! you got golden gpa 5.00';
    break;
    
    case mark >= 80 && mark <=89:
    gpa= 'congratulations!! you got  gpa 5.00';
    break;
    
    case mark >= 70 && mark <=79:
    gpa= 'congratulations!! you got  gpa 4.00';
    break;
    
    case mark >= 60 && mark <=69:
    gpa= 'congratulations!! you got  gpa 3.00';
    break;
    
    case mark >= 50 && mark <=59:
    gpa= 'congratulations!! you got  gpa 3.00';
    break;
    
    case mark >= 40 && mark <=49:
    gpa= 'congratulations!! you got  gpa 2.50';
    break;
    
    case mark >= 33 && mark <=39:
    gpa= 'congratulations!! you got  gpa 2.00';
    break;
    
    case mark <33:
    gpa= 'so sad!! you are faild';
    break;

    default:
        gpa = "sorry for mistake";
        break;
}
document.getElementById("fristid").innerHTML= gpa;