
/*
ABOUT
<p>Results oriented software engineer with ability and willingness to innovate
	and distrupt with technology. Good at translating concepts/ideas to end 
	products and dedicated to constant learning and re-learning for optimal
	productivity.</p>

<p>Currently focused on Mobile, Desktop and Web development using Android, Java, 
	Html, CSS and Javascript.</p>
*/


var url = 'http://127.0.0.1/css/style.css';
var base = url.replace(/[^\/]+$/, ''),
base_scheme = (/^[a-z]{3,10}:/.exec(base) || [''])[0],
base_domain = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(base) || [''])[0],
base_query = /^([^?]*)\??/.exec(url)[1],
b_scheme = (/^[a-z]{3,10}:/.exec(base) || ['']),
b_domain = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(base) || ['']),
b_query = /^([^?]*)\??/.exec(url);


console.log('base = '+base);
console.log('base_scheme = '+base_scheme);
console.log('base_domain = '+base_domain);
console.log('base_query = '+base_query);
console.log(b_scheme);
console.log(b_domain);
console.log(b_query);

body = document.querySelector('body');
var doc = 'url = '+url + '<br />' + 'base = '+base + '<br />' + 'base_scheme = '+base_scheme + '<br />' 
		+ 'base_domain = '+base_domain + '<br />' + 'base_query = '+base_query;
body.innerHTML = doc;

var s = document.currentScript;
console.log('script = '+s);









//Check for non-alphabetic characters and space
if(name.search(/[^A-Za-z\s]/) != -1){
	alert("Invalid name");
}