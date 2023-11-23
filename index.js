

const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check");
const cashGiven = document.querySelector("#cash-give");
const message = document.querySelector("#error_message");
const availablenotes =[2000, 500, 100, 20, 10, 1];
const noofnotes = document.querySelectorAll(".no_of_notes");

checkButton.addEventListener("click" , function validate_bill(){
    hidemessage();
      if (billAmount.value > 0) 
      {
            if(cashGiven.value > billAmount.value){
                const amountToBeRefunded = cashGiven.value - billAmount.value;
                CalculateChange(amountToBeRefunded);


            }
            else{
                showMessage("Do you want to wash plates");
            }

        
      }
       else {
         message.innerText = "Invalid bill amount";
         
         
      };
      
} );

function CalculateChange()
{
    for(let i=0; i < availablenotes.length;i++)
    {
        const numberofnotes = Math.trunc(amountToBeRefunded/availablenotes[i]);
            amountToBeRefunded %= availablenotes[i];
            noofnotes[i].innerText = numberofnotes;



    }
   

        

}

function hidemessage(){
    message.style.display = "none";
    
}


function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}


//<label for="bill-amount">Bill Amount</label>
//<label for="Change">Cash Giving</label>