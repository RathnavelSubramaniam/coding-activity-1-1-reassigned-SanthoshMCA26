//comparsion operater
//condition
function VoteEligible(age){
    let result;
    if(age > 18){
        result = ' eligible to vote';

    }else{
        result = ' Not eligible to vote';
    }
    return result;
}
console.log(VoteEligible(20));
console.log(VoteEligible(17));

//multiple condition
var coding = "javaScript";
var ProblemSolving = "excellent";

function recruitmentProcess() 
{
    if(coding == "javaScript"){
        if(ProblemSolving == "excellent"){
            console.log(" You can get the job");

        }else{
            return 'You want to improve your communication';
        }
        
    }else{
        return'Better luck next time';
    }
}
recruitmentProcess();
