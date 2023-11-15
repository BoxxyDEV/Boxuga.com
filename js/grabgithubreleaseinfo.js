function grabversioninfo(user, repo)
{
    const versionnumber = new XMLHttpRequest();
    versionnumber.addEventListener("load", function () { 
        var json = JSON.parse(versionnumber.responseText);
        return json.tag_name;
    });
    versionnumber.open("GET", "https://api.github.com/repos/" + encodeURIComponent(user) +"/" + encodeURIComponent(repo) + "/releases/latest");
    versionnumber.send();   
}