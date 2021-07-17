// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string;

userName = "Andrés";

let isStudent: boolean;

isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Andrés",
  age: 40,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course1 = "React - The Complete Guide";

// course1 = 123;

// Union Types

let course: string | number = "React";

course = 1234;

let users: string | string[];

// Type Aliases

type Person = {
  name: string;
  age: number;
};

let aliasPerson: Person;

let aliasPeople: Person[];

// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");

stringArray[0].split("");
// updatedArray[0].split("");
