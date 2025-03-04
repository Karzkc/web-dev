import url from "url";
// Parse a URL string into an object
const myURL = new url.parse('https://www.example.com:8080/pathname/?search=test#hash');
console.log(myURL);

// Format a URL object into a string
const formattedURL = url.format({
    protocol: 'https',
    hostname: 'www.example.com',
    port: 8080,
    pathname: '/pathname/',
    search: '?search=test',
    hash: '#hash'
});
console.log(formattedURL);

// Resolve a target URL relative to a base URL
const resolvedURL = url.resolve('https://www.example.com/foo/bar', '../baz');
console.log(resolvedURL);