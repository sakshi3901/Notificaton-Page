var totalUnReadMessage = document.querySelector(".total-unread-msg");
var unread = document.querySelectorAll(".new-notify");
var markRead = document.querySelector(".mark-all");

unread.forEach((message)=>{
  message.addEventListener('click',()=>{
    message.classList.remove("new-notify");
    var newTotalUnreadMsg = document.querySelectorAll(".new-notify").length;
    totalUnReadMessage.innerHTML = newTotalUnreadMsg;
  })
})

markRead.addEventListener('click',()=>{
  totalUnReadMessage.innerHTML = "0";
  unread.forEach((message)=>{
    message.classList.remove("new-notify");
  })
})
