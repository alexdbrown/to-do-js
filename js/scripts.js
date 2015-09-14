$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task-name").val();
    var newTask = { taskName: inputTask };

    $("ul#tasks").append("<li id='task'>" + newTask.taskName +
    "<br><button class='btn btn-success mark-complete'>complete</button><button class='btn btn-danger delete'>delete</button></li>");
    $("#task-list").show();


    $(".mark-complete").last().click(function() {
      $(this).closest('li').remove();
      $("ul#completed-tasks").append("<li>" + newTask.taskName + "</li>");
    });

    $(".delete").last().click(function() {
      $(this).closest('li').remove();
    });
  });
});
