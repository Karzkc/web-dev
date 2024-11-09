let url = "https://jsonplaceholder.typicode.com/posts";

(async function api() {
    try {
        console.log("getting data...");
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data[0].body);

    } 
    catch (error) {
        console.error("Error:", error);
    }
})();
