$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task-name").val();
    var newTask = { taskName: inputTask };

    $("ul#tasks").append("<li id='task'>" + newTask.taskName +
    "<button class='btn btn-primary mark-complete'></button><button class='btn btn-danger'></button></li>");

    $(".mark-complete").last().click(function() {
      $(this).closest('li').remove();
      $("ul#completed-tasks").append("<li>" + newTask.taskName + "</li>");
    });
  });
});
