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
	//Stundets - массив студентов, parameter - параметр для сортировки (оценки или название группы), value - значение для сортировки (название группы или ср. балл)
	console.log(rpad("Имя", 15), rpad("Фамилия", 15), rpad("Группа", 8), rpad("Оценки", 20))
	//Начинаем цикл для сортировки
	for (var i = 0; i < students.length; i++) {
		//obj - это часть из списка одного студента, которая должна сортироваться (оценки или название группы), parameter - параметры для сортировки (marks или group)
		let obj = students[i][parameter];
		//Если obj имеет тип данных "object", в данном случае имеется ввиду если obj это массив
		if (typeof obj == "object") {
			let marks = 0;
			//Так как obj это массив, то мы складываем все значения
			for (var j = 0; j < obj.length; j++) {
				marks += obj[j];
			}
			//Получаем ср. оценку
			//Если сумма всех оценок делённая на длину массива оценок больше, чем средний балл, тогда вывести студента в консоль, если нет, то пропустить
			marks / obj.length >= parseFloat(value) ? console.log(rpad(students[i].name, 15), rpad(students[i].surname, 15), rpad(students[i].group, 8), rpad(students[i].marks, 20)) : null;
		}
		//Эта 'функция' выполняется только если obj содержит value, то есть если parameter это название группы, а в значении value
		//записано 'БСТ', то он выведет этот объект только если в названии группы студента есть слово 'БСТ'
		//Сам синтаксис этой записи такой
		// условие ? Эта часть выполняется если условие true : эта часть выполняется если условие false;
		obj.includes(value) ? console.log(rpad(students[i].name, 15), rpad(students[i].surname, 15), rpad(students[i].group, 8), rpad(students[i].marks, 20)) : null;
		}
	alert("Результат выведен в консоль!")
	}


$(document).ready(() => {
	$("#sortButton").on('click', () => {
		//Если в списке параметров выбрано какое-то значение и если есть условие для вывода студента в консоль (ср. оценка или название группы), то запускает функцию printStudents(), иначе выводит сообщение об ошибке.
		$('#sortSelect :selected')[0].value != "null" && $('#sort')[0].value.trim().length != 0 ? printStudents(groupmates, $('#sortSelect :selected')[0].value, $('#sort')[0].value.trim()) : alert("Возможно, вы забыли выбрать принцип сортировки или написать значение в поле для ввода.");
	})
})
