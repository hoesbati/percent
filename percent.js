function percentCalculator()
{
    var R = parseFloat(document.getElementById("Right").value); //get number of Right answer from form
    var W = parseFloat(document.getElementById("Wrong").value); //get number of Wrong answer from form
    var D = parseFloat(document.getElementById("dna").value);   //get number of did not answer answer from form
    var all=(R+W+D)*3;         //compute calculation
    var right=R*3;             //multiplication number of right answer by 3
    var perw=(right/all)*100;  //(right division by all) multiplication by 100
    var score=right-W;         //right minus number of Wrong answer
    var per=(score/all)*100;   //(score division by all) multiplication by 100
    document.getElementById("percentW").value=perw.toFixed(2);  //set percent without Negative score with two number of float
    document.getElementById("percent").value=per.toFixed(2);    //set percent with two number of float
}