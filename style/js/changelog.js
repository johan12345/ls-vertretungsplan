$(document).ready(function(){
	console.log("test");
	$.ajax({
	  url: "changelog.xml",
	  context: document.body,
	  dataType: "xml"
	}).done(function(data) {
	  $changelog = $(data);
	  $releases = $changelog.find("release");
	  
	  //neueste Version
	  html = "<h4>Version " + $releases.last().attr("version") + "</h4><p>";
	  $releases.last().find("change").each(function() {
		  html  += $(this).text() + "<br>";
	  });
	  html+= "</p>"
	  $("#current_version").html(html);
	  
	  //andere
	  html = "";
	  $releases.each(function() {
		  html += "<h4>Version " + $(this).attr("version") + "</h4><p>";
		  $(this).find("change").each(function() {
		  	html  += $(this).text() + "<br>";
	  	  });
	  });
	  html+= "</p>"
	  $("#older_versions").html(html);
	});
});