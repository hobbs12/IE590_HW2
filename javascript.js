$(document).ready(function () {
	$.getJSON("https://hivelab.org/static/students.json", function (jsonfile) {
        var mytable = $('#puIE');
        
        for (var i = 0; i < jsonfile.length; i = i + 1) {
            mytable.append("<tr><td>" + jsonfile[i].Name + "</td><td>" + jsonfile[i].GPA + "</td><td>" + jsonfile[i].GRE_V + "</td><td>" + jsonfile[i].GRE_Q + "</td><td>" + jsonfile[i].Essay + "</td><td>" + jsonfile[i].Recom + "</td></tr>");
        };
	});
});