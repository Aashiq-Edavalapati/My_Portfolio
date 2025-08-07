import portfolioPreview from "../assets/portfolioPreview.jpg"
import gradiaPreview from '../assets/gradiaPreview.png'
import agriChainPreview from '../assets/agriChainPreview.png'

const skillDetails = {
  // Programming Languages
  "Python": {
    description: "High-level programming language with dynamic semantics and rich data structures.",
    experience: "Advanced",
    startedYear: 2023,
    codeSnippet: `
import pandas as pd
import matplotlib.pyplot as plt
# Create a simple dataframe
data = {'Year': [2023, 2024, 2025],
'Projects': [2, 5, 8]}
df = pd.DataFrame(data)
# Plot the data
plt.figure(figsize=(6, 3))
plt.bar(df['Year'], df['Projects'], color='skyblue')
plt.title('Python Projects Per Year')
plt.xlabel('Year')
plt.ylabel('Number of Projects')
print("Project growth visualization complete!")
`,
    codeOutput: "Project growth visualization complete!",
    projects: [
      {
        name: "Link-Us",
        description: "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
        link: null,
        image: 'https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg ',
        github: 'https://github.com/adithya-menon-r/Link-Us'
      },
    ],
    certifications: [
      {
        name: "Automate Cybersecurity Tasks with Python",
        issuer: "Coursera",
        date: "2024",
        link: "https://www.coursera.org/account/accomplishments/verify/P9J7AK5AX276"
      }
    ],
    progressData: [
      { year: 2018, level: 1 },
      { year: 2019, level: 2 },
      { year: 2020, level: 3 },
      { year: 2021, level: 4 },
      { year: 2022, level: 5 }
    ]
  },
  
  "Java": {
    description: "Object-oriented programming language designed for portability and cross-platform development.",
    experience: "Intermediate",
    startedYear: 2023,
    codeSnippet: `
import java.util.*;

public class InteractiveSort {
    public static void main(String[] args) {
        // Create sample data
        List<Integer> numbers = new ArrayList<>(Arrays.asList(34, 12, 78, 56, 21, 45));
        System.out.println("Original list: " + numbers);
        
        // Sort the list
        Collections.sort(numbers);
        System.out.println("Sorted list: " + numbers);
        
        // Binary search
        int searchKey = 45;
        int position = Collections.binarySearch(numbers, searchKey);
        System.out.println("Found " + searchKey + " at position: " + position);
        
        // Try clicking here to shuffle the list!
        Collections.shuffle(numbers);
        System.out.println("Shuffled list: " + numbers);
    }
}
`,
    codeOutput: "Original list: [34, 12, 78, 56, 21, 45]\nSorted list: [12, 21, 34, 45, 56, 78]\nFound 45 at position: 3\nShuffled list: [45, 78, 21, 12, 56, 34]",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2019, level: 1 },
      { year: 2020, level: 2 },
      { year: 2021, level: 3 },
      { year: 2022, level: 4 }
    ]
  },
  
  "JavaScript": {
    description: "High-level programming language that enables interactive web pages.",
    experience: "Intermediate",
    startedYear: 2023,
    codeSnippet: `
// Simple interactive counter
let count = 0;
const updateCounter = () => {
  count++;
  document.getElementById('counter').textContent = count;
  return \`Counter updated to \${count}\`;
};
// In a real environment, this would be:
// document.getElementById('button').addEventListener('click', updateCounter);

// Try clicking this line to increment: updateCounter();
`,
    codeOutput: "Counter updated to 1",
    projects: [
      {
        name: "Interactive Portfolio",
        description: "Personal portfolio website with interactive elements",
        link: "https://aashiqedavalapati.vercel.app",
        image: portfolioPreview,
        github: "https://github.com/Aashiq-Edavalapati/My_Portfolio"
      },
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2017, level: 1 },
      { year: 2018, level: 2 },
      { year: 2019, level: 3 },
      { year: 2020, level: 4 },
      { year: 2021, level: 5 }
    ]
  },
  
  "C": {
    description: "General-purpose, procedural computer programming language supporting structured programming.",
    experience: "Intermediate",
    startedYear: 2019,
    codeSnippet: `
#include <stdio.h>

// Function to swap values using pointers
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    // Initialize variables
    int x = 10, y = 20;
    printf("Before swap: x = %d, y = %d\\n", x, y);
    
    // Call swap function
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n", x, y);
    
    // Interactive array sorting (click here to run)
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Original array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    
    // Selection sort
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        swap(&arr[min_idx], &arr[i]);
    }
    
    printf("\\nSorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    
    return 0;
}
`,
    codeOutput: "Before swap: x = 10, y = 20\nAfter swap: x = 20, y = 10\nOriginal array: 64 25 12 22 11\nSorted array: 11 12 22 25 64",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2019, level: 1 },
      { year: 2020, level: 2 },
      { year: 2021, level: 3 },
      { year: 2022, level: 3 }
    ]
  },
  
  "C++": {
    description: "General-purpose programming language with object-oriented, generic, and functional features.",
    experience: "Intermediate",
    startedYear: 2020,
    codeSnippet: `
#include <iostream>
#include <vector>
#include <algorithm>

class InteractiveVector {
private:
    std::vector<int> data;
    
public:
    // Constructor with sample data
    InteractiveVector() {
        data = {5, 2, 8, 1, 9, 3};
    }
    
    // Display the vector
    void display() {
        std::cout << "Vector elements: ";
        for(int num : data) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
    }
    
    // Sort the vector
    void sortVector() {
        std::sort(data.begin(), data.end());
        std::cout << "Vector sorted!" << std::endl;
    }
    
    // Add an element
    void addElement(int element) {
        data.push_back(element);
        std::cout << "Added " << element << " to the vector." << std::endl;
    }
    
    // Find an element
    bool findElement(int element) {
        auto it = std::find(data.begin(), data.end(), element);
        if(it != data.end()) {
            std::cout << "Element " << element << " found at position: " 
                      << (it - data.begin()) << std::endl;
            return true;
        }
        std::cout << "Element " << element << " not found." << std::endl;
        return false;
    }
};

int main() {
    InteractiveVector iv;
    iv.display();
    
    // Click here to sort the vector
    iv.sortVector();
    iv.display();
    
    // Click here to add 7 to the vector
    iv.addElement(7);
    iv.display();
    
    // Click here to search for 8
    iv.findElement(8);
    
    return 0;
}
`,
    codeOutput: "Vector elements: 5 2 8 1 9 3\nVector sorted!\nVector elements: 1 2 3 5 8 9\nAdded 7 to the vector.\nVector elements: 1 2 3 5 8 9 7\nElement 8 found at position: 4",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2020, level: 1 },
      { year: 2021, level: 2 },
      { year: 2022, level: 3 }
    ]
  },
  
  "Go": {
    description: "Statically typed, compiled programming language designed at Google, known for simplicity and efficiency.",
    experience: "Beginner",
    startedYear: 2022,
    codeSnippet: `
package main

import (
	"fmt"
	"sort"
	"sync"
	"time"
)

// Interactive Go concurrency example
func main() {
	fmt.Println("Go Concurrency Example")
	
	// Channel for communication
	ch := make(chan string)
	
	// Create a wait group
	var wg sync.WaitGroup
	wg.Add(3)
	
	// Start goroutines
	go worker("Task 1", 2, ch, &wg)
	go worker("Task 2", 1, ch, &wg)
	go worker("Task 3", 3, ch, &wg)
	
	// Collect results
	go func() {
		wg.Wait()
		close(ch)
	}()
	
	// Print results as they arrive
	results := []string{}
	for msg := range ch {
		results = append(results, msg)
		fmt.Println("Received:", msg)
	}
	
	// Sort and display final results
	sort.Strings(results)
	fmt.Println("All tasks completed in order:", results)
	
	// Interactive Map example (click here)
	fmt.Println("\nGo Map Example:")
	scoreMap := map[string]int{
		"Alice": 95,
		"Bob":   87,
		"Carol": 92,
	}
	
	for name, score := range scoreMap {
		fmt.Printf("%s: %d\n", name, score)
	}
	
	// Add a new entry
	scoreMap["Dave"] = 91
	fmt.Println("After adding Dave:", scoreMap)
}

func worker(name string, seconds int, ch chan<- string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Starting %s (takes %d seconds)...\n", name, seconds)
	time.Sleep(time.Duration(seconds) * time.Second)
	ch <- fmt.Sprintf("%s completed", name)
}
`,
    codeOutput: "Go Concurrency Example\nStarting Task 1 (takes 2 seconds)...\nStarting Task 2 (takes 1 seconds)...\nStarting Task 3 (takes 3 seconds)...\nReceived: Task 2 completed\nReceived: Task 1 completed\nReceived: Task 3 completed\nAll tasks completed in order: [Task 1 completed Task 2 completed Task 3 completed]\n\nGo Map Example:\nAlice: 95\nBob: 87\nCarol: 92\nAfter adding Dave: map[Alice:95 Bob:87 Carol:92 Dave:91]",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2022, level: 2 }
    ]
  },
  
  "Haskell": {
    description: "Purely functional programming language with strong static typing and lazy evaluation.",
    experience: "Beginner",
    startedYear: 2021,
    codeSnippet: `
-- Interactive Haskell examples

-- Simple factorial function
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

-- List manipulation
doubleList :: [Int] -> [Int]
doubleList xs = map (* 2) xs

-- Function to filter even numbers
filterEven :: [Int] -> [Int]
filterEven xs = filter even xs

-- Function composition
composed :: [Int] -> [Int]
composed = doubleList . filterEven

-- Higher-order function demonstration
applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)

-- Main function with examples
main :: IO ()
main = do
  putStrLn "Haskell Examples:"
  
  putStrLn $ "Factorial of 5: " ++ show (factorial 5)
  
  let numbers = [1, 2, 3, 4, 5]
  putStrLn $ "Original list: " ++ show numbers
  
  putStrLn $ "Doubled list: " ++ show (doubleList numbers)
  
  putStrLn $ "Even numbers: " ++ show (filterEven numbers)
  
  putStrLn $ "Composed function (double after filtering even): " 
          ++ show (composed numbers)
  
  putStrLn $ "Apply twice (double) to 3: " 
          ++ show (applyTwice (* 2) 3)
  
  -- Click here to see list comprehension
  let comprehension = [x * y | x <- [1..3], y <- [1..3], x /= y]
  putStrLn $ "List comprehension result: " ++ show comprehension
`,
    codeOutput: "Haskell Examples:\nFactorial of 5: 120\nOriginal list: [1,2,3,4,5]\nDoubled list: [2,4,6,8,10]\nEven numbers: [2,4]\nComposed function (double after filtering even): [4,8]\nApply twice (double) to 3: 12\nList comprehension result: [2,3,2,6,3,6]",
    projects: [
      
    ],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 }
    ]
  },
  
  // Web Development
  "HTML": {
    description: "Standard markup language for documents designed to be displayed in a web browser.",
    experience: "Advanced",
    startedYear: 2016,
    codeSnippet: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Portfolio Card</title>
    <style>
        .card {
            font-family: Arial, sans-serif;
            max-width: 400px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .card-header {
            background-color: #4285f4;
            color: white;
            padding: 16px;
        }
        .card-body {
            padding: 16px;
        }
        .skill-bar {
            background-color: #eee;
            height: 20px;
            border-radius: 10px;
            margin-bottom: 12px;
        }
        .skill-level {
            background-color: #4285f4;
            height: 100%;
            border-radius: 10px;
            width: 85%;
        }
        .card-footer {
            background-color: #f5f5f5;
            padding: 12px 16px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-header">
            <h2>HTML Skill Card</h2>
        </div>
        <div class="card-body">
            <h3>Advanced Level</h3>
            <p>Experience since 2016</p>
            <div class="skill-bar">
                <div class="skill-level"></div>
            </div>
            <p>Creating semantic, accessible, and responsive web pages with modern HTML5 features.</p>
        </div>
        <div class="card-footer">
            <p>Click to see more details</p>
        </div>
    </div>
</body>
</html>
`,
    codeOutput: "An HTML card component showcasing HTML skills with styling",
    projects: [
      {
        name: "Car-Rental-Website",
        description: "The Car Rental Website is a desktop application built using Electron.js. This application provides a seamless car rental experience, allowing users to browse available cars, make reservations, and access rental policies.",
        link: null,
        image: 'https://private-user-images.githubusercontent.com/146023771/415029983-84671b70-8890-468f-9f0d-a5ad19019d11.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTAyNzcsIm5iZiI6MTc1NDU4OTk3NywicGF0aCI6Ii8xNDYwMjM3NzEvNDE1MDI5OTgzLTg0NjcxYjcwLTg4OTAtNDY4Zi05ZjBkLWE1YWQxOTAxOWQxMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODA2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYWIzYmIyYzc1NjlhYzg0OTg0ZjFkZjliYWQzNzFlZDJhNDI5NjQwOTgzMjAwNGE4Yzk0Yjc5M2YyNzQyOTE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SKwEd8nW3QtXC1p_5_UV7_ap7DtwW8TrvDfBp67yJpU',
        github: 'https://github.com/Aashiq-Edavalapati/Car-Rental-Website'
      },
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2016, level: 1 },
      { year: 2017, level: 2 },
      { year: 2018, level: 3 },
      { year: 2019, level: 4 },
      { year: 2020, level: 5 }
    ]
  },
  
  "CSS": {
    description: "Style sheet language used for describing the presentation of a document written in HTML.",
    experience: "Advanced",
    startedYear: 2016,
    codeSnippet: `
/* Interactive CSS Animation Showcase */

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.card {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect - try hovering over this card */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}

.card-header {
  height: 40%;
  background: linear-gradient(45deg, #4285f4, #0f9d58);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.card-body {
  padding: 15px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
}

.skill-level {
  height: 100%;
  width: 85%; /* Advanced level */
  background-color: #4285f4;
  border-radius: 5px;
  animation: fillBar 2s ease-out;
}

@keyframes fillBar {
  from { width: 0; }
  to { width: 85%; }
}

/* Additional animation for demonstration */
.animated-element {
  width: 50px;
  height: 50px;
  background-color: #ea4335;
  border-radius: 50%;
  margin: 0 auto;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Try clicking to change theme with JavaScript:
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
*/
`,
    codeOutput: "CSS styling with animations and hover effects for cards",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2016, level: 1 },
      { year: 2017, level: 2 },
      { year: 2018, level: 3 },
      { year: 2019, level: 4 },
      { year: 2020, level: 5 }
    ]
  },
  
  "React JS": {
    description: "JavaScript library for building user interfaces, particularly single-page applications.",
    experience: "Intermediate",
    startedYear: 2019,
    codeSnippet: `
import React, { useState } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Interactive Task Manager component
function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy application', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');
  
  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskItem = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };
  
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Interactive Task Manager</h2>
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1, padding: '8px', marginRight: '10px' }}
        />
        <button 
          onClick={addTask}
          style={{ padding: '8px 16px', backgroundColor: '#4285f4', color: 'white', border: 'none' }}
        >
          Add
        </button>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ 
              flex: 1,
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ 
                backgroundColor: '#ea4335', 
                color: 'white', 
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
`,
    codeOutput: "Component that displays a task management interface with add, toggle, and delete functionality",
    projects: [
      
    ],
    certifications: [
      
    ],
    progressData: [
      { year: 2019, level: 1 },
      { year: 2020, level: 2 },
      { year: 2021, level: 3 },
      { year: 2022, level: 4 }
    ]
  },
  "Next JS": {
    description: "React framework for server-side rendering and static site generation.",
    experience: "Intermediate",
    startedYear: 2022,
    codeSnippet: `
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
    `,
    codeOutput: "Renders a homepage with a link to the About page.",
    projects: [
      {
        name: "Gradia",
        description: "An AI-driven grading platform built with Next.js",
        link: "https://gradia-tokenomists.vercel.app",
        image: gradiaPreview,
        github: "https://github.com/tokenomists/Gradia"
      },
      {
        name: "AgriChain",
        description: "",
        link: null,
        image: agriChainPreview,
        github: 'https://github.com/tokenomists/AgriChain'
      },
    ],
    certifications: [],
    progressData: [
      { year: 2022, level: 1 },
      { year: 2023, level: 2 }
    ]
  },

  "Express JS": {
    description: "Minimalist web framework for Node.js to build APIs and web applications.",
    experience: "Intermediate",
    startedYear: 2021,
    codeSnippet: `
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
    `,
    codeOutput: "Server running on port 3000",
    projects: [
      {
        name: "RESTful API for Social Network",
        description: "Backend API for handling user authentication and posts",
        link: "https://github.com/yourusername/social-api",
        image: "https://placeholder.com/social-api.png"
      }
    ],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 },
      { year: 2023, level: 3 }
    ]
  },

  "Node JS": {
    description: "JavaScript runtime built on Chrome's V8 engine for building scalable applications.",
    experience: "Intermediate",
    startedYear: 2020,
    codeSnippet: `
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
    `,
    codeOutput: "Server running on port 3000",
    projects: [
      {
        name: "Real-Time Chat App",
        description: "A real-time chat application using WebSockets",
        link: "https://github.com/yourusername/chat-app",
        image: "https://placeholder.com/chat-app.png"
      }
    ],
    certifications: [],
    progressData: [
      { year: 2020, level: 1 },
      { year: 2021, level: 2 },
      { year: 2022, level: 3 }
    ]
  },

  // Core Concepts
  "Object-Oriented Programming (OOP)": {
    description: "Programming paradigm based on the concept of objects containing data and methods.",
    experience: "Advanced",
    startedYear: 2019,
    codeSnippet: `
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    return \`\${this.brand} is driving!\`;
  }
}

const myCar = new Car('Tesla');
console.log(myCar.drive());
    `,
    codeOutput: "Tesla is driving!",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2019, level: 1 },
      { year: 2020, level: 2 },
      { year: 2021, level: 3 },
      { year: 2022, level: 4 }
    ]
  },

  "Operating Systems": {
    description: "Software that manages computer hardware and software resources.",
    experience: "Intermediate",
    startedYear: 2021,
    codeSnippet: `
#include <stdio.h>
#include <unistd.h>

int main() {
    printf("Process ID: %d\\n", getpid());
    return 0;
}
    `,
    codeOutput: "Process ID: 12345",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 }
    ]
  },

  "Data Structures & Algorithms": {
    description: "Fundamental concepts for efficient data organization and problem-solving.",
    experience: "Advanced",
    startedYear: 2020,
    codeSnippet: `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
    `,
    codeOutput: "Returns the index of the target if found, else -1",
    projects: [
      {
        name: "Link-Us",
        description: "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
        link: null,
        image: 'https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg ',
        github: 'https://github.com/adithya-menon-r/Link-Us'
      }
    ],
    certifications: [],
    progressData: [
      { year: 2020, level: 1 },
      { year: 2021, level: 2 },
      { year: 2022, level: 3 }
    ]
  },

  "Database Management Systems (DBMS)": {
    description: "Software for managing databases efficiently.",
    experience: "Intermediate",
    startedYear: 2021,
    codeSnippet: `
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);
    `,
    codeOutput: "Creates a users table with an ID, name, and email field",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 }
    ]
  },

  // Tools & Platforms
  "Git": {
    description: "Version control system for tracking code changes.",
    experience: "Advanced",
    startedYear: 2020,
    codeSnippet: `
git init
git add .
git commit -m "Initial commit"
    `,
    codeOutput: "Initializes a Git repository and commits changes",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2020, level: 1 },
      { year: 2021, level: 2 }
    ]
  },

  "GitHub": {
    description: "Hosting service for Git repositories with collaboration features.",
    experience: "Advanced",
    startedYear: 2020,
    codeSnippet: `
git remote add origin https://github.com/yourusername/repo.git
git push -u origin main
    `,
    codeOutput: "Pushes code to GitHub repository",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2020, level: 1 },
      { year: 2021, level: 2 }
    ]
  },

  "Linux": {
    description: "Open-source operating system known for stability and security.",
    experience: "Intermediate",
    startedYear: 2021,
    codeSnippet: `
ls -al
    `,
    codeOutput: "Lists all files with details",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 }
    ]
  },

  "MySQL": {
    description: "Popular open-source relational database management system.",
    experience: "Intermediate",
    startedYear: 2021,
    codeSnippet: `
SELECT * FROM users WHERE age > 18;
    `,
    codeOutput: "Returns all users older than 18",
    projects: [],
    certifications: [],
    progressData: [
      { year: 2021, level: 1 },
      { year: 2022, level: 2 }
    ]
  }
};


export default skillDetails;