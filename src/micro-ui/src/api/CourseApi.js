import delay from './delay';
import axios from 'axios';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
/*const courses = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "cory-house",
        length: "2:52",
        category: "Software Architecture"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Career"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
    }
];*/

const courses = [ {
    "id" : 100101,
    "iata" : "319",
    "icao" : null,
    "description" : "Airbus A319",
    "type" : "Jet-engined aircraft",
    "category" : "319"
  }, {
    "id" : 100201,
    "iata" : "320",
    "icao" : null,
    "description" : "Airbus A320",
    "type" : "Jet-engined aircraft",
    "category" : "320"
  }, {
    "id" : 100301,
    "iata" : "321",
    "icao" : null,
    "description" : "Airbus A321",
    "type" : "Jet-engined aircraft",
    "category" : "321"
  }, {
    "id" : 100401,
    "iata" : "32S",
    "icao" : null,
    "description" : "Airbus A318 / A319 / A320 / A321",
    "type" : "Jet-engined aircraft",
    "category" : "32S"
  }, {
    "id" : 100501,
    "iata" : "330",
    "icao" : null,
    "description" : "Airbus A330",
    "type" : "Jet-engined aircraft",
    "category" : "330"
  }, {
    "id" : 100601,
    "iata" : "333",
    "icao" : null,
    "description" : "Airbus A330-300",
    "type" : "Jet-engined aircraft",
    "category" : "333"
  }, {
    "id" : 100701,
    "iata" : "340",
    "icao" : null,
    "description" : "Airbus A340",
    "type" : "Jet-engined aircraft",
    "category" : "340"
  }, {
    "id" : 100801,
    "iata" : "380",
    "icao" : null,
    "description" : "Airbus A380 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "380"
  }, {
    "id" : 100901,
    "iata" : "388",
    "icao" : null,
    "description" : "Airbus A380-800 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "388"
  }, {
    "id" : 101001,
    "iata" : "737",
    "icao" : null,
    "description" : "Boeing 737 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "737"
  }, {
    "id" : 101101,
    "iata" : "747",
    "icao" : null,
    "description" : "Boeing 747 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "747"
  }, {
    "id" : 101201,
    "iata" : "753",
    "icao" : null,
    "description" : "Boeing 757-300 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "753"
  }, {
    "id" : 101301,
    "iata" : "757",
    "icao" : null,
    "description" : "Boeing 757 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "757"
  }, {
    "id" : 101401,
    "iata" : "763",
    "icao" : null,
    "description" : "Boeing 767-300 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "763"
  }, {
    "id" : 101501,
    "iata" : "764",
    "icao" : null,
    "description" : "Boeing 767-400 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "764"
  }, {
    "id" : 101601,
    "iata" : "767",
    "icao" : null,
    "description" : "Boeing 767 Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "767"
  }, {
    "id" : 101701,
    "iata" : "76W",
    "icao" : null,
    "description" : "Boeing 767-300 (winglets) Passenger",
    "type" : "Jet-engined aircraft",
    "category" : "76W"
  }, {
    "id" : 101801,
    "iata" : "773",
    "icao" : null,
    "description" : "Boeing 777-300",
    "type" : "Jet-engined aircraft",
    "category" : "773"
  }, {
    "id" : 101901,
    "iata" : "777",
    "icao" : null,
    "description" : "Boeing 777",
    "type" : "Jet-engined aircraft",
    "category" : "777"
  }, {
    "id" : 102001,
    "iata" : "77W",
    "icao" : null,
    "description" : "Boeing 777-300ER",
    "type" : "Jet-engined aircraft",
    "category" : "77W"
  }, {
    "id" : 102101,
    "iata" : "787",
    "icao" : null,
    "description" : "Boeing 787",
    "type" : "Jet-engined aircraft",
    "category" : "787"
  }, {
    "id" : 102201,
    "iata" : "788",
    "icao" : null,
    "description" : "Boeing 787-8",
    "type" : "Jet-engined aircraft",
    "category" : "788"
  }, {
    "id" : 102301,
    "iata" : "ARJ",
    "icao" : null,
    "description" : "Avro RJ70 / RJ85 / RJ100",
    "type" : "Jet-engined aircraft",
    "category" : "ARJ"
  }, {
    "id" : 102401,
    "iata" : "EMJ",
    "icao" : null,
    "description" : "Embraer 170 / 175 / 190 / 195",
    "type" : "Jet-engined aircraft",
    "category" : "EMJ"
  }, {
    "id" : 102501,
    "iata" : "F70",
    "icao" : null,
    "description" : "Fokker 70",
    "type" : "Jet-engined aircraft",
    "category" : "F70"
  }, {
    "id" : 102601,
    "iata" : "M80",
    "icao" : null,
    "description" : "Boeing (Douglas) MD-80",
    "type" : "Jet-engined aircraft",
    "category" : "M80"
  }, {
    "id" : 102701,
    "iata" : "M83",
    "icao" : null,
    "description" : "Boeing (Douglas) MD-83",
    "type" : "Jet-engined aircraft",
    "category" : "M83"
  }, {
    "id" : 102801,
    "iata" : "M88",
    "icao" : null,
    "description" : "Boeing (Douglas) MD-88",
    "type" : "Jet-engined aircraft",
    "category" : "M88"
  } ]

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
       return axios.get(`http://localhost:12040/aircraft-service/1.0/aircrafts`);
       /*return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, {data:courses}));
            }, delay);
        });*/
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        /*return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });*/
        return axios.delete(`http://localhost:12040/aircraft-service/1.0/aircrafts/`+courseId);
    }


    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;
