var groupmates = [{"name":"Александр","surname":"Иванов","group":"БВТ1702","marks":[4,3,5]},{"name":"Иван","surname":"Петров","group":"БСТ1702","marks":[4,4,4]},{"name":"Кирилл","surname":"Смирнов","group":"БАП1801","marks":[5,5,5]}];


function rpad(string, len) {
	len = parseInt(len);
	string = string.toString();
	while (string.length < len) {
		string += " "
	};
	return string
}


function printStudents(students, parameter, value) {
	console.log(rpad("Имя", 15), rpad("Фамилия", 15), rpad("Группа", 8), rpad("Оценки", 20))
	for (var i = 0; i < students.length; i++) {
		let obj = students[i][parameter];
		if (typeof obj == "object") {
			let marks = 0;
			for (var j = 0; j < obj.length; j++) {
				marks += obj[j];
			}
			marks / obj.length >= parseFloat(value) ? console.log(rpad(students[i].name, 15), rpad(students[i].surname, 15), rpad(students[i].group, 8), rpad(students[i].marks, 20)) : null;
		}
		obj.includes(value) ? console.log(rpad(students[i].name, 15), rpad(students[i].surname, 15), rpad(students[i].group, 8), rpad(students[i].marks, 20)) : null;
		}
	alert("Результат выведен в консоль!")
	}


$(document).ready(() => {
	$("#sortButton").on('click', () => {
		$('#sortSelect :selected')[0].value != "null" && $('#sort')[0].value.trim().length != 0 ? printStudents(groupmates, $('#sortSelect :selected')[0].value, $('#sort')[0].value.trim()) : alert("Возможно, вы забыли выбрать принцип сортировки или написать значение в поле для ввода.");
	})
})