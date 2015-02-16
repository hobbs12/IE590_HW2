$(document).ready(function () {
	$.getJSON("https://hivelab.org/static/students.json", function (jsonfile) {
        var mytable = $('#puIE');
        
        for (var i = 0; i < jsonfile.length; i = i + 1) {
            mytable.append("<td>" + json[i].Name + "</td>
                            <td>" + json[i].GPA + "</td>
                            <td>" + json[i].GRE_V + "</td>
                            <td>" + json[i].GRE_Q + "</td>
                            <td>" + json[i].Essay + "</td>
                            <td>" + json[i].Recom + "</td>");
        };
	});
});