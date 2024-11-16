
use('TEMP');



db.getCollection('courses').insertMany([
    {
        "id": 1,
        "course_name": "Python Basics",
        "instructor_name": "John Doe",
        "price": "Free"
    },
    {
        "id": 2,
        "course_name": "Web Development 101",
        "instructor_name": "Jane Smith",
        "price": "Free"
    },
    {
        "id": 3,
        "course_name": "Advanced JavaScript",
        "instructor_name": "Michael Brown",
        "price": "$50"
    },
    {
        "id": 4,
        "course_name": "Machine Learning Basics",
        "instructor_name": "Emily Davis",
        "price": "$100"
    },
    {
        "id": 5,
        "course_name": "React for Beginners",
        "instructor_name": "Chris Wilson",
        "price": "$30"
    },
    {
        "id": 6,
        "course_name": "Node.js Essentials",
        "instructor_name": "Sarah Johnson",
        "price": "$40"
    },
    {
        "id": 7,
        "course_name": "Full-Stack Web Development",
        "instructor_name": "David Lee",
        "price": "$200"
    },
    {
        "id": 8,
        "course_name": "Data Science Crash Course",
        "instructor_name": "Jessica Martinez",
        "price": "$150"
    },
    {
        "id": 9,
        "course_name": "Introduction to Algorithms",
        "instructor_name": "Robert Anderson",
        "price": "$75"
    },
    {
        "id": 10,
        "course_name": "UI/UX Design Principles",
        "instructor_name": "Laura Thomas",
        "price": "$25"
    }
]
);


console.log("All data inserted successfully!!!");

