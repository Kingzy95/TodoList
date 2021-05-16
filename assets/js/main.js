$(document).ready(function() {
    // Show Tasks
    function loadTasks() {
        $.ajax({
            url: "show-tasks.php",
            type: "POST",
            success: function(data) {
                $("#tasks").html(data);
            }
        });
    }

    loadTasks();

    // Add Task
    $("#addBtn").on("click", function(e) {
        e.preventDefault();

        var task = $("#taskValue").val();

        $.ajax({
            url: "add-task.php",
            type: "POST",
            data: {task: task},
            success: function(data) {
                loadTasks();
                $("#taskValue").val('');
                if (data == 0) {
                    alert("Entrez une tache!");
                }
            }
        });
    });

    // Remove Task
    $(document).on("click", "#removeBtn", function(e) {
        e.preventDefault();
        var id = $(this).data('id');

        $.ajax({
            url: "remove-task.php",
            type: "POST",
            data: {id: id},
            success: function(data) {
                loadTasks();
                if (data == 0) {
                    alert("Veuillez recommencer svp!");
                }
            }
        });
    });
    $(document).on("click", "#doneBtn", function(e) {
        e.preventDefault();
        var id = $(this).data('id');

        $.ajax({
            url: "done-task.php",
            type: "POST",
            data: {id: id},
            success: function(data) {
                loadTasks();
                if (data == 0) {
                    alert("Veuillez recommencer svp!");
                }
            }
        });

        checkBtn.innerHTML = '<i class="fa fa-check"></i>';
        delBtn.innerHTML = '<i class="fa fa-trash"></i>';


        checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
        });

        delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        });
    });
});