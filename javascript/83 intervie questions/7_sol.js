(function saveNoteToLocalStorage(a) {
    if (localStorage.getItem("name")) {
        a = localStorage.getItem("name")
        document.write("Your Note is :- ",a)
    } else {
        let a = prompt("enter your note:- ")
        localStorage.setItem("name",a)
        document.write("Your Note is :- ",a)
    }

    

})()