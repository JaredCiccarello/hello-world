
// const mydiv=document.getElementById('input-prompt')


    
    function welcomeUser(){
    
    let breath = prompt("Have you taken a break today? Type only Yes or No. Y E S or N O");
                            // || (this is an OR)
        while (breath == 'no' || breath == 'yes' || breath == 'YES' || breath == 'NO'){

            breath = prompt ("Remember it can only be Yes or No");
        }

    if (breath == 'Yes'){
        document.write("Great! Let's show you some extra tips on how simple changes can brighten your day!");
    } else if (breath == 'No'){
        document.write("I think I can help!");
    }  else if (breath == ''){
        document.write("That's okay, you don't have to tell me")
    }
    }

    function userName
       
    // let userName = prompt ('What should I call you?');

    if (usersName == ""){
        usersName = prompt ("Hey! That's not a name!")


    document.write(" " + usersName + "That's my mother's name actually");

    console.log(usersName);
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
    

    












