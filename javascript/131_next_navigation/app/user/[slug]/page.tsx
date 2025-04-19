"use client"
import { useParams } from 'next/navigation';

export default function page() {
  const params = useParams();
  return <h1>Welcome: {params?.slug} </h1>;
}

// here we used [slug] in the folder name to create a dynamic route. The [slug] part of the folder name indicates that this is a dynamic route parameter, and it will match any value in that position of the URL. For example, if you navigate to /user/john, the slug parameter will be set to "john". Similarly, if you navigate to /user/jane, the slug parameter will be set to "jane". This allows you to create dynamic pages based on user input or other variables in your application. The useParams hook is used to access the dynamic route parameters in a client component. It returns an object containing the parameters defined in the URL. In this case, we are using it to get the value of the slug parameter and display it in an h1 element. 

// also we are using use params hook to access the dynamic route parameters in a client component. It returns an object containing the parameters defined in the URL. In this case, we are using it to get the value of the slug parameter and display it in an h1 element. This allows us to create dynamic pages based on user input or other variables in our application.