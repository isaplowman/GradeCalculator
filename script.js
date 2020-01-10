


function calcGradeNeeded(){
    var hwWeight = document.getElementById("hwWeight").value;
    var classWeight = document.getElementById("classWeight").value;
    var testWeight = document.getElementById("testWeight").value;
    var participationWeight = document.getElementById("participationWeight").value;
    var projectWeight = document.getElementById("projectWeight").value;
    var finalWeight = document.getElementById("finalWeight").value;
    var desiredGrade = document.getElementById("desiredGrade").value;

    var desiredGradeArr = parseInt(desiredGrade);
    var finalWeightArr = parseInt(finalWeight);
    var hwWeightArr = parseInt(hwWeight);
    var classWeightArr = parseInt(classWeight);
    var testWeightArr = parseInt(testWeight);
    var participationWeightArr = parseInt(participationWeight);
    var projectWeightArr = parseInt(projectWeight);

    var currentGrade = calcCurrentGrade();
    var firstWeight = (currentGrade *.01) * (1 - (.01 * (finalWeightArr)));
    var secondCalc = (desiredGradeArr *.01) - firstWeight;
    var gradeNeeded = (secondCalc / (finalWeightArr *.01)) * 100;
    console.log(gradeNeeded);



    var finalError = finalPercentages(hwWeightArr, classWeightArr, testWeightArr, projectWeightArr, participationWeightArr, finalWeightArr);


    if(finalError == 0){
        document.getElementById("gradeNeeded").innerHTML = "Error! please check to see your weights are correct :)"
    }else{
        document.getElementById("gradeNeeded").innerHTML = gradeNeeded;
    }

    return gradeNeeded;

}


function finalPercentages(hw, cl, te, pa, pr, fi){
    var sum = hw + cl + +te +pa +pr +fi;
    if(sum > 100){
        return 0;
    }
}






function calcCurrentGrade(){
    var hwGrade = document.getElementById("hwGrade").value;
    var hwWeight = document.getElementById("hwWeight").value;
    var classGrade = document.getElementById("classGrade").value;
    var classWeight = document.getElementById("classWeight").value;
    var testGrade = document.getElementById("testGrade").value;
    var testWeight = document.getElementById("testWeight").value;
    var participationGrade = document.getElementById("participationGrade").value;
    var participationWeight = document.getElementById("participationWeight").value;
    var projectGrade = document.getElementById("projectGrade").value;
    var projectWeight = document.getElementById("projectWeight").value;

    var hwGradeArr = stringToArray(hwGrade);
    var classGradeArr = stringToArray(classGrade);
    var testGradeArr = stringToArray(testGrade);
    var participationGradeArr = stringToArray(participationGrade);
    var projectGradeArr = stringToArray(projectGrade);

    var hwGradeAv = averageGrade(hwGradeArr);
    var classGradeAv = averageGrade(classGradeArr);
    var testGradeAv = averageGrade(testGradeArr);
    var participationGradeAv = averageGrade(participationGradeArr);
    var projectGradeAv = averageGrade(projectGradeArr);

    var hwWeightArr = parseInt(hwWeight);
    var classWeightArr = parseInt(classWeight);
    var testWeightArr = parseInt(testWeight);
    var participationWeightArr = parseInt(participationWeight);
    var projectWeightArr = parseInt(projectWeight);

    var hwWorth = weighGrades(hwGradeAv, hwWeightArr);
    var classWorth = weighGrades(classGradeAv, classWeightArr);
    var testWorth = weighGrades(testGradeAv, testWeightArr);
    var participationWorth = weighGrades(participationGradeAv, participationWeightArr);
    var projectWorth = weighGrades(projectGradeAv, projectWeightArr);

    var currentGrade = addGrades(hwWorth, classWorth, testWorth, participationWorth, projectWorth);

    var finalCurrentGrade = addWeights(currentGrade, hwWeightArr, classWeightArr, testWeightArr, participationWeightArr, projectWeightArr);

    changeColor(hwGradeAv, document.getElementById("homework"));
    changeColor(classGradeAv, document.getElementById("classwork"));
    changeColor(testGradeAv, document.getElementById("tests"));
    changeColor(participationGradeAv, document.getElementById("participation"));
    changeColor(projectGradeAv, document.getElementById("projects"));

    var errorB = percentages(hwWeightArr, classWeightArr, testWeightArr,participationWeightArr, projectWeightArr);

    if(errorB ==  0){
        document.getElementById("currentG").innerHTML = "Error! You seem to have put in false grade weights. Please check and re-enter :)"
    }else{
        document.getElementById("currentG").innerHTML = finalCurrentGrade;}



    return finalCurrentGrade;
}


function changeColor(average, row){
    if(average >=90){
        row.style.backgroundColor = "#89ffc3"
    }
    else if(average >80){
        row.style.backgroundColor = "#a4dbff"
    }
    else if(average >70){
        row.style.backgroundColor = "#ffef84"
    }
    else if(average > 60){
        row.style.backgroundColor ="#ff6224"
    }
    else{
        row.style.backgroundColor="#ff5151"
    }
}




function percentages(hw, cl, te, pa, pr) {
    var sum = hw + cl + +te + pa + pr;
    if (sum > 100) {
        return 0;
    }
}


function stringToArray(str){
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i]=parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}



function averageGrade(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        count = count + arr[i];
    }
    var average = count/arr.length;
    console.log(average);
    return average;
}



function weighGrades(grade, weight){
    var percent = weight*.01;
    var worth = percent * grade;
    console.log(worth);
    return worth;
}

function addGrades(hw, cl, te, pa, pr){
    var grade = hw + cl + te + pa + pr;
    console.log(grade);
    return grade;
}

function addWeights(grades, hw, cl, te, pa, pr){
    var finalCalc = hw + cl + te + pa + pr;
    var secondCalc = finalCalc * .01;
    var thirdCalc = grades / secondCalc;
    console.log(thirdCalc);
    return thirdCalc;
}