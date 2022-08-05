$(document).ready(function(){
  $('#new-task-form').submit(addTask);
});

function addTask(e) {
  e.preventDefault();

  // get the task text and clear input
  const input = $("#new-task");
  const task = input.val(); 
  input.val('');

  $(`<li>${task}</li>`).click(completeTask).appendTo( $("#task-list") );

  updateTaskTotal();
}

function moveItem(item, isComplete) {

  const newHandler = isComplete ? uncompleteTask : completeTask;
  const newListId = isComplete ? '#completed-list' : '#task-list';

  item.detach();
  item.off('click');
  
  $(newListId).append(item);
  item.click(newHandler);

  updateTaskTotal();
}

function completeTask() {
  moveItem($(this), true);
}

function uncompleteTask() {
  moveItem($(this), false);
}

function updateTaskTotal() {
  const total = $('#task-list li').length;
  $("#task-total").html(`- ${total} TODOs`);
}