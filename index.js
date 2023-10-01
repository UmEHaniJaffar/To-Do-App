 //to access the main container and the input box in the container
 const inputBox=document.getElementById('inputBox');
 const listContainer=document.getElementById('listContainer');
 //function to be called when the button is clicked
 function addData(){
     //if user doesnot input anything the inputbox.value is empty so it does nothing
     if(inputBox.value===''){
         alert("You must add some task");
     }
     //when user inputs some task it is added as li element, gets content by the user entered value and appended in the main container
     else{
         let li=document.createElement('li');
         li.innerHTML=inputBox.value;
         listContainer.appendChild(li);
         //code for cross button(icon), we create a span element for X
         let span=document.createElement('span');
         span.innerHTML='\u00D7';
         li.appendChild(span);
     }
     //clears the value of inputbox after the text is added as li
     inputBox.value='';
     //every time browser is refreshed after the data is input,the data gets stored due to storeData()
     storeData();
 }
 //function to cross the task when done
 listContainer.addEventListener('click',function(e){
     //if user clicks on li element(any task)it's class is changed to checked class which means task is completed
     if(e.target.tagName==='LI'){
         e.target.classList.toggle('checked')
         //store whatever new task is added
         storeData();
     }
     //if user clicks on span(x) remove the parent element of span(x) that is li(the task)
     else if(e.target.tagName==='SPAN'){
         e.target.parentElement.remove();
         //store whatever new task is crossed
         storeData();
     }
 },false)
 //function to store data when browser is refreshed
 function storeData(){
     localStorage.setItem('data',listContainer.innerHTML);
 }
 //function to show the data stored even after the browser is refreshed
 function showData(){
     listContainer.innerHTML=localStorage.getItem('data');
 }
 //calling the showData function at the end to show all the data stored
 showData();
