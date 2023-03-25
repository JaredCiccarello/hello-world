
// const mydiv=document.getElementById('input-prompt')


let userName;
    
function getUserName(){
        userName = prompt ('What should I call you?');
        
        if (userName == ""){
            alert ("Hey! That's not a name!")
            getUserName()
        } else {
            document.write(" " + userName + "That's my mother's name actually");
            console.log(userName);
        }
        
        
    }
    getUserName()


    function welcomeUser(){
    
    let breath = prompt(userName + " Have you taken a break today? Type only Yes or No. Y E S or N O");
    console.log(breath)
        if (breath !== 'no' && breath !== 'yes'){
            alert ("Remember it can only be Yes or No");
            welcomeUser()
        }

    // if (breath === 'yes'){
    //     document.write("Great! Let's show you some extra tips on how simple changes can brighten your day!");
    // } else {
    //     document.write("I think I can help!");
    // }  
}   
 welcomeUser();




    let newBornBabyAge = prompt ("Guess a New Born Babies age")

    while (newBornBabyAge !=1){
        newBornBabyAge = prompt ("That's not a New Born Baby's Age! Hint: It's less than 2")
    }
    
    let flowers = prompt ("How many flowers do you want to see? I only have 10 I can show you")
    
    // function yourName() {
        
    //     let answer = prompt('WWhat can I call you?');
    //     // console.log(answer);
    //     if (answer == 'no') {
    //    answer = prompt ('Pretty please?')
    //     } else if (answer == '') {
    //         answer = prompt ('strong silent type I see')
    //     } if (answer == 'fine')
    //         answer = prompt ('Hoorah!')
    //     document.write(answer);
    //     }


    












