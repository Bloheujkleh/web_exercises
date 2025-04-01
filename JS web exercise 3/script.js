const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('userName');
const userEmailInput = document.getElementById('userEmail');
const userMessage = document.getElementById('userMessage');




userForm.addEventListener('submit', function(event){
event.preventDefault();
const userName = userNameInput.value;
const userEmail = userEmailInput.value;
if(userName && userEmail){
    userMessage.textContent = `Hello, ${userName}! Your Email Adress is : ${userEmail} has been saved! `;
    userMessage.style.color = 'green';
}
else{
    userMessage.textContent="Please write smthng";
    userMessage.style.color = 'red';
}
userNameInput.value = '';
userEmailInput.value = '';
});


const nameTask = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click',function(){
const task = nameTask.value;

if(task){
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = task;
    taskList.appendChild(listItem);
    taskInput.value = '';
} else {
    alert('HEY YOU FORGOT SMTHNG');
}

});