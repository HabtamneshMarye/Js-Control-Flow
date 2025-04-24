//1.Write a program that takes an array of days

const checkingDelivery=(schedule)=>{
    schedule.forEach((schedules)=>{
      switch(schedules){
  
    case "Monday":
      console.log("Successfull food delivery");
      break;
  
    case "Tuesday":
      console.log("successful cloth delivery");
      break;
  
    case "Friday":
      console.log("Successful shoes delivery");
      break;
    default:
  
    console.log("No delivery");
    break
      }
    });
  };
  const deliveryDate=["Monday", "Tuesday", "Friday", "Saturday", "Sunday"];
  checkingDelivery(deliveryDate);
  
  //2.write a program that loops through an array of book statuses 
  const bookStatuses=(status)=>{
      for (let i=0; i<status.length; i++){
        if (status[i]=== "available") {
          console.log("Ready to lend");
        }else{
          console.log("Checked out");
        }
      }
    };
    const statuses=["available","borrowed","borrowed", ]
    bookStatuses(statuses);
  
  //3.write a program that checks each age
  
  const customerAge=(age)=>{
      for(let i=0; i <age.length; i++){
        if(age[i]>=18){
          console.log("You are an adult.")
        }else{
          console.log("You are a minor.")
        }
      };
    }
    const ages=[20, 25, 18, 17, 23];
    customerAge(ages);
    
  //4.Write a program using a while loop that simulates a countdown of lives in a game 
    
    const livesCount=()=>{
      let lives=5;
      while(lives >=0){
      console.log(`You have ${lives} lives left.`);
      lives --;
      }
      };
      livesCount();
      console.log("Game over");
      
  //5.write a program that loops through an array of user feedback
    
    function processOfUser(userFeedback){
      let i=0;
      do{
        if (userFeedback.length>0){
         const comment=userFeedback.shift();
          console.log(`Feedback: ${comment}`);
           i++;
        }else{
        console.log("No more feedback to processs.");
        break;
      }
    }while(userFeedback.length>0);
    }
    const feedback=["excellent custom product", "great product", "needs more featurres"];
    processOfUser(feedback);
    
  //6.Write a program that loops through an array of user login statuses
    
    function processOfLogin(loginStatus){
      let i=0;
      while(i< loginStatus.length){
        const status=loginStatus[i];
        if(status==="logged in"){
          console.log("Welcome back");
        }else{
          console.log("Please login");
        }
          i++;
      }
    };
    const userStatues=["logged in", "logged out"];
    processOfLogin(userStatues);
    
  //7.Write a program that processes an array of support ticket priorities using a switch statement
    
  function processOfTickets(ticket){
    for(let i=0; i<ticket.length; i++){
      const priority=ticket[i];
      switch(priority){
      case "high":
      console.log(`Tickets ${i+1} (priority:${priority}): Address immediately`);
      break;
    
      case "medium":
      console.log(`Tickets ${i+1} (priority:${priority}): Address within 5 hours`);
      break;
    
      case "low":
      console.log(`Tickets ${i+1} (priority:${priority}): Address within 24 hours`);
      break;
      default:
    
      console.log(`Tickets ${i+1} (priority:${priority}): Invalid priority!`);
      break;
        }
      }
    }
    
    const ticketQueue=["high", "medium", "low", "invalid"];
    processOfTickets(ticketQueue);
    
  //8.Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
    const countDown=()=>{
      let timeCount=10;
      while (timeCount >= 0){
        console.log(`Time remaining ${timeCount} seconds`);
        timeCount--;
      }
      };
    countDown();
    console.log("Time is Up");
    