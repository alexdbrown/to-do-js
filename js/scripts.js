$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task-name").val();
    var newTask = { taskName: inputTask };

    $("ul#tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
  });
});
