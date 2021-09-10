var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskFormHandler = function (event) {
	event.preventDefault();
	var task_name_input = document.querySelector("input[name='task-name']").value;
	var task_type_input = document.querySelector(
		"select[name = 'task-type']"
	).value;
	var taskDataObject = new Object();
	taskDataObject["task_name"] = task_name_input;
	taskDataObject["task_type"] = task_type_input;
	console.log(taskDataObject);
	createTaskEl(taskDataObject);
	// var listItemEl = document.createElement("li");
	// listItemEl.className = "task-item";
	// var taskInfoEl = document.createElement("div");
	// taskInfoEl.innerHTML =
	// 	"<h3 class = 'task-name'>" +
	// 	task_name_input +
	// 	"</h3> <span class ='task-type'>" +
	// 	task_type_input +
	// 	"</span>";
	// listItemEl.appendChild(taskInfoEl);
	// tasksToDoEl.appendChild(listItemEl);
};

var createTaskEl = function (obj) {
	var task_name_input = obj["task_name"];
	var task_type_input = obj["task_type"];
	var listItemEl = document.createElement("li");
	listItemEl.className = "task-item";
	var taskInfoEl = document.createElement("div");
	taskInfoEl.innerHTML =
		"<h3 class = 'task-name'>" +
		task_name_input +
		"</h3> <span class ='task-type'>" +
		task_type_input +
		"</span>";
	listItemEl.appendChild(taskInfoEl);
	tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
