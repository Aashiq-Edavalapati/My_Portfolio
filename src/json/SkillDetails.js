import portfolioPreview from "../assets/portfolioPreview.jpg"
import gradiaPreview from '../assets/gradiaPreview.png'
import agriChainPreview from '../assets/agriChainPreview.png'

const skillDetails = {
  "Python": {
    "description": "High-level programming language with dynamic semantics and rich data structures.",
    "experience": "Advanced",
    "startedYear": 2023,
    "codeSnippet": "import pandas as pd\nimport matplotlib.pyplot as plt\n# Create a simple dataframe\ndata = {'Year': [2023, 2024, 2025],\n'Projects': [2, 5, 8]}\ndf = pd.DataFrame(data)\n# Plot the data\nplt.figure(figsize=(6, 3))\nplt.bar(df['Year'], df['Projects'], color='skyblue')\nplt.title('Python Projects Per Year')\nplt.xlabel('Year')\nplt.ylabel('Number of Projects')\nprint(\"Project growth visualization complete!\")\n",
    "codeOutput": "Project growth visualization complete!",
    "projects": [
      {
        "name": "Link-Us",
        "description": "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
        "link": null,
        "image": "https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg ",
        "github": "https://github.com/adithya-menon-r/Link-Us"
      }
    ],
    "certifications": [
      {
        "name": "Automate Cybersecurity Tasks with Python",
        "issuer": "Coursera",
        "date": "2024",
        "link": "https://www.coursera.org/account/accomplishments/verify/P9J7AK5AX276"
      }
    ],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      },
      {
        "year": 2025,
        "level": 3
      }
    ]
  },
  "Java": {
    "description": "Object-oriented programming language designed for portability and cross-platform development.",
    "experience": "Beginner",
    "startedYear": 2023,
    "codeSnippet": "import java.util.*;\n\npublic class InteractiveSort {\n    public static void main(String[] args) {\n        // Create sample data\n        List<Integer> numbers = new ArrayList<>(Arrays.asList(34, 12, 78, 56, 21, 45));\n        System.out.println(\"Original list: \" + numbers);\n        \n        // Sort the list\n        Collections.sort(numbers);\n        System.out.println(\"Sorted list: \" + numbers);\n        \n        // Binary search\n        int searchKey = 45;\n        int position = Collections.binarySearch(numbers, searchKey);\n        System.out.println(\"Found \" + searchKey + \" at position: \" + position);\n        \n        // Try clicking here to shuffle the list!\n        Collections.shuffle(numbers);\n        System.out.println(\"Shuffled list: \" + numbers);\n    }\n}",
    "codeOutput": "Original list: [34, 12, 78, 56, 21, 45]\nSorted list: [12, 21, 34, 45, 56, 78]\nFound 45 at position: 3\nShuffled list: [45, 78, 21, 12, 56, 34]",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "JavaScript": {
    "description": "High-level programming language that enables interactive web pages.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "// Simple interactive counter\nlet count = 0;\nconst updateCounter = () => {\n  count++;\n  document.getElementById('counter').textContent = count;\n  return `Counter updated to ${count}`;\n};\n// In a real environment, this would be:\n// document.getElementById('button').addEventListener('click', updateCounter);\n\n// Try clicking this line to increment: updateCounter();\n",
    "codeOutput": "Counter updated to 1",
    "projects": [
      {
        "name": "My_Portfolio",
        "description": "Personal portfolio website with interactive elements.",
        "link": "https://aashiqedavalapati.vercel.app",
        "image": "https://user-images.githubusercontent.com/146023771/415177439-d3e913a0-f3b1-4f08-b80c-e69d72111d4d.png",
        "github": "https://github.com/Aashiq-Edavalapati/My_Portfolio"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "C": {
    "description": "General-purpose, procedural computer programming language supporting structured programming.",
    "experience": "Intermediate",
    "startedYear": 2020,
    "codeSnippet": "#include <stdio.h>\n\n// Function to swap values using pointers\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    // Initialize variables\n    int x = 10, y = 20;\n    printf(\"Before swap: x = %d, y = %d\\n\", x, y);\n    \n    // Call swap function\n    swap(&x, &y);\n    printf(\"After swap: x = %d, y = %d\\n\", x, y);\n    \n    // Interactive array sorting (click here to run)\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    \n    printf(\"Original array: \");\n    for (int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    \n    // Selection sort\n    for (int i = 0; i < n-1; i++) {\n        int min_idx = i;\n        for (int j = i+1; j < n; j++)\n            if (arr[j] < arr[min_idx])\n                min_idx = j;\n        swap(&arr[min_idx], &arr[i]);\n    }\n    \n    printf(\"\\nSorted array: \");\n    for (int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    \n    return 0;\n}",
    "codeOutput": "Before swap: x = 10, y = 20\nAfter swap: x = 20, y = 10\nOriginal array: 64 25 12 22 11\nSorted array: 11 12 22 25 64",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2020,
        "level": 1
      },
      {
        "year": 2021,
        "level": 2
      },
      {
        "year": 2022,
        "level": 3
      },
      {
        "year": 2023,
        "level": 4
      }
    ]
  },
  "C++": {
    "description": "General-purpose programming language with object-oriented, generic, and functional features.",
    "experience": "Intermediate",
    "startedYear": 2020,
    "codeSnippet": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nclass InteractiveVector {\nprivate:\n    std::vector<int> data;\n    \npublic:\n    // Constructor with sample data\n    InteractiveVector() {\n        data = {5, 2, 8, 1, 9, 3};\n    }\n    \n    // Display the vector\n    void display() {\n        std::cout << \"Vector elements: \";\n        for(int num : data) {\n            std::cout << num << \" \";\n        }\n        std::cout << std::endl;\n    }\n    \n    // Sort the vector\n    void sortVector() {\n        std::sort(data.begin(), data.end());\n        std::cout << \"Vector sorted!\" << std::endl;\n    }\n    \n    // Add an element\n    void addElement(int element) {\n        data.push_back(element);\n        std::cout << \"Added \" << element << \" to the vector.\" << std::endl;\n    }\n    \n    // Find an element\n    bool findElement(int element) {\n        auto it = std::find(data.begin(), data.end(), element);\n        if(it != data.end()) {\n            std::cout << \"Element \" << element << \" found at position: \" \n                      << (it - data.begin()) << std::endl;\n            return true;\n        }\n        std::cout << \"Element \" << element << \" not found.\" << std::endl;\n        return false;\n    }\n};\n\nint main() {\n    InteractiveVector iv;\n    iv.display();\n    \n    // Click here to sort the vector\n    iv.sortVector();\n    iv.display();\n    \n    // Click here to add 7 to the vector\n    iv.addElement(7);\n    iv.display();\n    \n    // Click here to search for 8\n    iv.findElement(8);\n    \n    return 0;\n}",
    "codeOutput": "Vector elements: 5 2 8 1 9 3\nVector sorted!\nVector elements: 1 2 3 5 8 9\nAdded 7 to the vector.\nVector elements: 1 2 3 5 8 9 7\nElement 8 found at position: 4",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2020,
        "level": 1
      },
      {
        "year": 2021,
        "level": 2
      },
      {
        "year": 2022,
        "level": 3
      },
      {
        "year": 2023,
        "level": 4
      }
    ]
  },
  "Go": {
    "description": "Statically typed, compiled programming language designed at Google, known for simplicity and efficiency.",
    "experience": "Beginner",
    "startedYear": 2024,
    "codeSnippet": "package main\n\nimport (\n\t\"fmt\"\n\t\"sort\"\n\t\"sync\"\n\t\"time\"\n)\n\n// Interactive Go concurrency example\nfunc main() {\n\tfmt.Println(\"Go Concurrency Example\")\n\t\n\t// Channel for communication\n\tch := make(chan string)\n\t\n\t// Create a wait group\n\tvar wg sync.WaitGroup\n\twg.Add(3)\n\t\n\t// Start goroutines\n\tgo worker(\"Task 1\", 2, ch, &wg)\n\tgo worker(\"Task 2\", 1, ch, &wg)\n\tgo worker(\"Task 3\", 3, ch, &wg)\n\t\n\t// Collect results\n\tgo func() {\n\t\twg.Wait()\n\t\tclose(ch)\n\t}()\n\t\n\t// Print results as they arrive\n\tresults := []string{}\n\tfor msg := range ch {\n\t\tresults = append(results, msg)\n\t\tfmt.Println(\"Received:\", msg)\n\t}\n\t\n\t// Sort and display final results\n\tsort.Strings(results)\n\tfmt.Println(\"All tasks completed in order:\", results)\n\t\n\t// Interactive Map example (click here)\n\tfmt.Println(\"\\nGo Map Example:\")\n\tscoreMap := map[string]int{\n\t\t\"Alice\": 95,\n\t\t\"Bob\":   87,\n\t\t\"Carol\": 92,\n\t}\n\t\n\tfor name, score := range scoreMap {\n\t\tfmt.Printf(\"%s: %d\\n\", name, score)\n\t}\n\t\n\t// Add a new entry\n\tscoreMap[\"Dave\"] = 91\n\tfmt.Println(\"After adding Dave:\", scoreMap)\n}\n\nfunc worker(name string, seconds int, ch chan<- string, wg *sync.WaitGroup) {\n\tdefer wg.Done()\n\tfmt.Printf(\"Starting %s (takes %d seconds)...\n\", name, seconds)\n\ttime.Sleep(time.Duration(seconds) * time.Second)\n\tch <- fmt.Sprintf(\"%s completed\", name)\n}",
    "codeOutput": "Go Concurrency Example\nStarting Task 1 (takes 2 seconds)...\nStarting Task 2 (takes 1 seconds)...\nStarting Task 3 (takes 3 seconds)...\nReceived: Task 2 completed\nReceived: Task 1 completed\nReceived: Task 3 completed\nAll tasks completed in order: [Task 1 completed Task 2 completed Task 3 completed]\n\nGo Map Example:\nAlice: 95\nBob: 87\nCarol: 92\nAfter adding Dave: map[Alice:95 Bob:87 Carol:92 Dave:91]",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2024,
        "level": 1
      }
    ]
  },
  "Haskell": {
    "description": "Purely functional programming language with strong static typing and lazy evaluation.",
    "experience": "Beginner",
    "startedYear": 2024,
    "codeSnippet": "-- Interactive Haskell examples\n\n-- Simple factorial function\nfactorial :: Integer -> Integer\nfactorial 0 = 1\nfactorial n = n * factorial (n - 1)\n\n-- List manipulation\ndoubleList :: [Int] -> [Int]\ndoubleList xs = map (* 2) xs\n\n-- Function to filter even numbers\nfilterEven :: [Int] -> [Int]\nfilterEven xs = filter even xs\n\n-- Function composition\ncomposed :: [Int] -> [Int]\ncomposed = doubleList . filterEven\n\n-- Higher-order function demonstration\napplyTwice :: (a -> a) -> a -> a\napplyTwice f x = f (f x)\n\n-- Main function with examples\nmain :: IO ()\nmain = do\n  putStrLn \"Haskell Examples:\"\n  \n  putStrLn $ \"Factorial of 5: \" ++ show (factorial 5)\n  \n  let numbers = [1, 2, 3, 4, 5]\n  putStrLn $ \"Original list: \" ++ show numbers\n  \n  putStrLn $ \"Doubled list: \" ++ show (doubleList numbers)\n  \n  putStrLn $ \"Even numbers: \" ++ show (filterEven numbers)\n  \n  putStrLn $ \"Composed function (double after filtering even): \" \n           ++ show (composed numbers)\n  \n  putStrLn $ \"Apply twice (double) to 3: \" \n           ++ show (applyTwice (* 2) 3)\n  \n  -- Click here to see list comprehension\n  let comprehension = [x * y | x <- [1..3], y <- [1..3], x /= y]\n  putStrLn $ \"List comprehension result: \" ++ show comprehension\n",
    "codeOutput": "Haskell Examples:\nFactorial of 5: 120\nOriginal list: [1,2,3,4,5]\nDoubled list: [2,4,6,8,10]\nEven numbers: [2,4]\nComposed function (double after filtering even): [4,8]\nApply twice (double) to 3: 12\nList comprehension result: [2,3,2,6,3,6]",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2024,
        "level": 1
      }
    ]
  },
  "HTML": {
    "description": "Standard markup language for documents designed to be displayed in a web browser.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Interactive Portfolio Card</title>\n    <style>\n        .card {\n            font-family: Arial, sans-serif;\n            max-width: 400px;\n            border: 1px solid #ddd;\n            border-radius: 8px;\n            overflow: hidden;\n            box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n        }\n        .card-header {\n            background-color: #4285f4;\n            color: white;\n            padding: 16px;\n        }\n        .card-body {\n            padding: 16px;\n        }\n        .skill-bar {\n            background-color: #eee;\n            height: 20px;\n            border-radius: 10px;\n            margin-bottom: 12px;\n        }\n        .skill-level {\n            background-color: #4285f4;\n            height: 100%;\n            border-radius: 10px;\n            width: 85%;\n        }\n        .card-footer {\n            background-color: #f5f5f5;\n            padding: 12px 16px;\n            text-align: center;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h2>HTML Skill Card</h2>\n        </div>\n        <div class=\"card-body\">\n            <h3>Advanced Level</h3>\n            <p>Experience since 2016</p>\n            <div class=\"skill-bar\">\n                <div class=\"skill-level\"></div>\n            </div>\n            <p>Creating semantic, accessible, and responsive web pages with modern HTML5 features.</p>\n        </div>\n        <div class=\"card-footer\">\n            <p>Click to see more details</p>\n        </div>\n    </div>\n</body>\n</html>\n",
    "codeOutput": "An HTML card component showcasing HTML skills with styling",
    "projects": [
      {
        "name": "Car-Rental-Website",
        "description": "The Car Rental Website is a desktop application built using Electron.js. This application provides a seamless car rental experience, allowing users to browse available cars, make reservations, and access rental policies.",
        "link": null,
        "image": "https://private-user-images.githubusercontent.com/146023771/415029983-84671b70-8890-468f-9f0d-a5ad19019d11.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTAyNzcsIm5iZiI6MTc1NDU4OTk3NywicGF0aCI6Ii8xNDYwMjM3NzEvNDE1MDI5OTgzLTg0NjcxYjcwLTg4OTAtNDY4Zi05ZjBkLWE1YWQxOTAxOWQxMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODA2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYWIzYmIyYzc1NjlhYzg0OTg0ZjFkZjliYWQzNzFlZDJhNDI5NjQwOTgzMjAwNGE4Yzk0Yjc5M2YyNzQyOTE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SKwEd8nW3QtXC1p_5_UV7_ap7DtwW8TrvDfBp67yJpU",
        "github": "https://github.com/Aashiq-Edavalapati/Car-Rental-Website"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "CSS": {
    "description": "Style sheet language used for describing the presentation of a document written in HTML.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "/* Interactive CSS Animation Showcase */\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\n\n.card {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n/* Hover effect - try hovering over this card */\n.card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);\n}\n\n.card-header {\n  height: 40%;\n  background: linear-gradient(45deg, #4285f4, #0f9d58);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n\n.card-body {\n  padding: 15px;\n  height: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.skill-bar {\n  width: 100%;\n  height: 10px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  overflow: hidden;\n  margin: 10px 0;\n}\n\n.skill-level {\n  height: 100%;\n  width: 85%; /* Advanced level */\n  background-color: #4285f4;\n  border-radius: 5px;\n  animation: fillBar 2s ease-out;\n}\n\n@keyframes fillBar {\n  from { width: 0; }\n  to { width: 85%; }\n}\n\n/* Additional animation for demonstration */\n.animated-element {\n  width: 50px;\n  height: 50px;\n  background-color: #ea4335;\n  border-radius: 50%;\n  margin: 0 auto;\n  animation: bounce 2s infinite;\n}\n\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n\n/* Try clicking to change theme with JavaScript:\nfunction toggleTheme() {\n  document.body.classList.toggle('dark-theme');\n}\n*/",
    "codeOutput": "CSS styling with animations and hover effects for cards",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "React JS": {
    "description": "JavaScript library for building user interfaces, particularly single-page applications.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "import React, { useState } from 'react';\n\nfunction SimpleCounter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n\n// Interactive Task Manager component\nfunction TaskManager() {\n  const [tasks, setTasks] = useState([\n    { id: 1, text: 'Learn React', completed: true },\n    { id: 2, text: 'Build a project', completed: false },\n    { id: 3, text: 'Deploy application', completed: false }\n  ]);\n  const [newTask, setNewTask] = useState('');\n  \n  const addTask = () => {\n    if (newTask.trim() === '') return;\n    const newTaskItem = {\n      id: Date.now(),\n      text: newTask,\n      completed: false\n    };\n    setTasks([...tasks, newTaskItem]);\n    setNewTask('');\n  };\n  \n  const toggleComplete = (id) => {\n    setTasks(tasks.map(task => \n      task.id === id ? {...task, completed: !task.completed} : task\n    ));\n  };\n  \n  const deleteTask = (id) => {\n    setTasks(tasks.filter(task => task.id !== id));\n  };\n  \n  return (\n    <div style={{ fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>\n      <h2>Interactive Task Manager</h2>\n      \n      <div style={{ display: 'flex', marginBottom: '20px' }}>\n        <input\n          type=\"text\"\n          value={newTask}\n          onChange={(e) => setNewTask(e.target.value)}\n          placeholder=\"Add a new task\"\n          style={{ flex: 1, padding: '8px', marginRight: '10px' }}\n        />\n        <button \n          onClick={addTask}\n          style={{ padding: '8px 16px', backgroundColor: '#4285f4', color: 'white', border: 'none' }}\n        >\n          Add\n        </button>\n      </div>\n      \n      <ul style={{ listStyle: 'none', padding: 0 }}>\n        {tasks.map(task => (\n          <li \n            key={task.id} \n            style={{\n              display: 'flex', \n              alignItems: 'center', \n              padding: '10px',\n              marginBottom: '10px',\n              backgroundColor: '#f5f5f5',\n              borderRadius: '4px'\n            }}\n          >\n            <input\n              type=\"checkbox\"\n              checked={task.completed}\n              onChange={() => toggleComplete(task.id)}\n              style={{ marginRight: '10px' }}\n            />\n            <span style={{\n              flex: 1,\n              textDecoration: task.completed ? 'line-through' : 'none'\n            }}>\n              {task.text}\n            </span>\n            <button\n              onClick={() => deleteTask(task.id)}\n              style={{ \n                backgroundColor: '#ea4335', \n                color: 'white', \n                border: 'none',\n                padding: '5px 10px',\n                borderRadius: '4px'\n              }}\n            >\n              Delete\n            </button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default TaskManager;\n",
    "codeOutput": "Component that displays a task management interface with add, toggle, and delete functionality",
    "projects": [
      {
        "name": "My_Portfolio",
        "description": "Personal portfolio website with interactive elements.",
        "link": "https://aashiqedavalapati.vercel.app",
        "image": "https://user-images.githubusercontent.com/146023771/415177439-d3e913a0-f3b1-4f08-b80c-e69d72111d4d.png",
        "github": "https://github.com/Aashiq-Edavalapati/My_Portfolio"
      },
      {
        "name": "Gradia",
        "description": "An AI-driven grading platform built with Next.js",
        "link": "https://gradia-tokenomists.vercel.app",
        "image": "https://private-user-images.githubusercontent.com/146023771/345511520-227092ed-07f1-432d-8b01-a67554157e1d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTA4NDQsIm5iZiI6MTc1NDU5MDU0NCwicGF0aCI6Ii8xNDYwMjM3NzEvMzQ1NTExNTIwLTIyNzA5MmVkLTA3ZjEtNDMyZC04YjAxLWE2NzU1NDE1N2UxZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODE1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNDAxNWJiYzFkYjY1NzM1Y2ZiM2IzZjA4M2NhMmIyZTVkMGRhNGU2YTM4YjlmYzY4ZDRjOTJmN2FlZjc4MTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9f2n6yWvGjWb7XvWf_1_1_2w_1_8V1_2b6pP_3l_7",
        "github": "https://github.com/tokenomists/Gradia"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Next JS": {
    "description": "React framework for server-side rendering and static site generation.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "import Link from 'next/link';\n\nexport default function Home() {\n  return (\n    <div>\n      <h1>Welcome to Next.js</h1>\n      <Link href=\"/about\">\n        <a>Go to About Page</a>\n      </Link>\n    </div>\n  );\n}",
    "codeOutput": "Renders a homepage with a link to the About page.",
    "projects": [
      {
        "name": "Gradia",
        "description": "An AI-driven grading platform built with Next.js",
        "link": "https://gradia-tokenomists.vercel.app",
        "image": "https://private-user-images.githubusercontent.com/146023771/345511520-227092ed-07f1-432d-8b01-a67554157e1d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTA4NDQsIm5iZiI6MTc1NDU5MDU0NCwicGF0aCI6Ii8xNDYwMjM3NzEvMzQ1NTExNTIwLTIyNzA5MmVkLTA3ZjEtNDMyZC04YjAxLWE2NzU1NDE1N2UxZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODE1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNDAxNWJiYzFkYjY1NzM1Y2ZiM2IzZjA4M2NhMmIyZTVkMGRhNGU2YTM4YjlmYzY4ZDRjOTJmN2FlZjc4MTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9f2n6yWvGjWb7XvWf_1_1_2w_1_8V1_2b6pP_3l_7",
        "github": "https://github.com/tokenomists/Gradia"
      },
      {
        "name": "AgriChain",
        "description": "A blockchain-powered agriculture supply chain solution that enhances transparency and efficiency.",
        "link": null,
        "image": "https://user-images.githubusercontent.com/146023771/415037145-c335e23c-f458-45a8-ac48-e8a349c2847a.png",
        "github": "https://github.com/tokenomists/AgriChain"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Express JS": {
    "description": "Minimalist web framework for Node.js to build APIs and web applications.",
    "experience": "Beginner",
    "startedYear": 2023,
    "codeSnippet": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, Express!');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
    "codeOutput": "Server running on port 3000",
    "projects": [
      {
        "name": "Gradia",
        "description": "An AI-driven grading platform built with Next.js",
        "link": "https://gradia-tokenomists.vercel.app",
        "image": "https://private-user-images.githubusercontent.com/146023771/345511520-227092ed-07f1-432d-8b01-a67554157e1d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTA4NDQsIm5iZiI6MTc1NDU5MDU0NCwicGF0aCI6Ii8xNDYwMjM3NzEvMzQ1NTExNTIwLTIyNzA5MmVkLTA3ZjEtNDMyZC04YjAxLWE2NzU1NDE1N2UxZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODE1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNDAxNWJiYzFkYjY1NzM1Y2ZiM2IzZjA4M2NhMmIyZTVkMGRhNGU2YTM4YjlmYzY4ZDRjOTJmN2FlZjc4MTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9f2n6yWvGjWb7XvWf_1_1_2w_1_8V1_2b6pP_3l_7",
        "github": "https://github.com/tokenomists/Gradia"
      },
      {
        "name": "AgriChain",
        "description": "A blockchain-powered agriculture supply chain solution that enhances transparency and efficiency.",
        "link": null,
        "image": "https://user-images.githubusercontent.com/146023771/415037145-c335e23c-f458-45a8-ac48-e8a349c2847a.png",
        "github": "https://github.com/tokenomists/AgriChain"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Node JS": {
    "description": "JavaScript runtime built on Chrome's V8 engine for building scalable applications.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, Node.js!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
    "codeOutput": "Server running on port 3000",
    "projects": [
      {
        "name": "Car-Rental-Website",
        "description": "The Car Rental Website is a desktop application built using Electron.js. This application provides a seamless car rental experience, allowing users to browse available cars, make reservations, and access rental policies.",
        "link": null,
        "image": "https://private-user-images.githubusercontent.com/146023771/415029983-84671b70-8890-468f-9f0d-a5ad19019d11.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTAyNzcsIm5iZiI6MTc1NDU4OTk3NywicGF0aCI6Ii8xNDYwMjM3NzEvNDE1MDI5OTgzLTg0NjcxYjA0NzItODg5MC00NjhmLTlmMGQtYTVhZDE5MDE5ZDExLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFRLNFpBJTIFjIwMjUwODA3JTIFdXMtZWFzdC0xJTIFzczMlMjFhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODA2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYWIzYmIyYzc1NjlhYzg0OTg0ZjFkZjliYWQzNzFlZDJhNDI5NjQwOTgzMjAwNGE4Yzk0Yjc5M2YyNzQyOTE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SKwEd8nW3QtXC1p_5_UV7_ap7DtwW8TrvDfBp67yJpU",
        "github": "https://github.com/Aashiq-Edavalapati/Car-Rental-Website"
      },
      {
        "name": "Gradia",
        "description": "An AI-driven grading platform built with Next.js",
        "link": "https://gradia-tokenomists.vercel.app",
        "image": "https://private-user-images.githubusercontent.com/146023771/345511520-227092ed-07f1-432d-8b01-a67554157e1d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ1OTA4NDQsIm5iZiI6MTc1NDU5MDU0NCwicGF0aCI6Ii8xNDYwMjM3NzEvMzQ1NTExNTIwLTIyNzA5MmVkLTA3ZjEtNDMyZC04YjAxLWE2NzU1NDE1N2UxZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwN1QxODE1NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNDAxNWJiYzFkYjY1NzM1Y2ZiM2IzZjA4M2NhMmIyZTVkMGRhNGU2YTM4YjlmYzY4ZDRjOTJmN2FlZjc4MTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9f2n6yWvGjWb7XvWf_1_1_2w_1_8V1_2b6pP_3l_7",
        "github": "https://github.com/tokenomists/Gradia"
      },
      {
        "name": "AgriChain",
        "description": "A blockchain-powered agriculture supply chain solution that enhances transparency and efficiency.",
        "link": null,
        "image": "https://user-images.githubusercontent.com/146023771/415037145-c335e23c-f458-45a8-ac48-e8a349c2847a.png",
        "github": "https://github.com/tokenomists/AgriChain"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Object-Oriented Programming (OOP)": {
    "description": "Programming paradigm based on the concept of objects containing data and methods.",
    "experience": "Advanced",
    "startedYear": 2020,
    "codeSnippet": "class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  drive() {\n    return `${this.brand} is driving!`;\n  }\n}\n\nconst myCar = new Car('Tesla');\nconsole.log(myCar.drive());\n",
    "codeOutput": "Tesla is driving!",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2020,
        "level": 1
      },
      {
        "year": 2021,
        "level": 2
      },
      {
        "year": 2022,
        "level": 3
      },
      {
        "year": 2023,
        "level": 4
      }
    ]
  },
  "Operating Systems": {
    "description": "Software that manages computer hardware and software resources.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    printf(\"Process ID: %d\\n\", getpid());\n    return 0;\n}",
    "codeOutput": "Process ID: 12345",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Data Structures & Algorithms": {
    "description": "Fundamental concepts for efficient data organization and problem-solving.",
    "experience": "Advanced",
    "startedYear": 2020,
    "codeSnippet": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1",
    "codeOutput": "Returns the index of the target if found, else -1",
    "projects": [
      {
        "name": "Link-Us",
        "description": "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
        "link": null,
        "image": "https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg ",
        "github": "https://github.com/adithya-menon-r/Link-Us"
      }
    ],
    "certifications": [],
    "progressData": [
      {
        "year": 2020,
        "level": 1
      },
      {
        "year": 2021,
        "level": 2
      },
      {
        "year": 2022,
        "level": 3
      },
      {
        "year": 2023,
        "level": 4
      }
    ]
  },
  "Database Management Systems (DBMS)": {
    "description": "Software for managing databases efficiently.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100) UNIQUE\n);",
    "codeOutput": "Creates a users table with an ID, name, and email field",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Git": {
    "description": "Version control system for tracking code changes.",
    "experience": "Advanced",
    "startedYear": 2023,
    "codeSnippet": "git init\ngit add .\ngit commit -m \"Initial commit\"",
    "codeOutput": "Initializes a Git repository and commits changes",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "GitHub": {
    "description": "Hosting service for Git repositories with collaboration features.",
    "experience": "Advanced",
    "startedYear": 2023,
    "codeSnippet": "git remote add origin https://github.com/yourusername/repo.git\ngit push -u origin main",
    "codeOutput": "Pushes code to GitHub repository",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "Linux": {
    "description": "Open-source operating system known for stability and security.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "ls -al",
    "codeOutput": "Lists all files with details",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  },
  "MySQL": {
    "description": "Popular open-source relational database management system.",
    "experience": "Intermediate",
    "startedYear": 2023,
    "codeSnippet": "SELECT * FROM users WHERE age > 18;",
    "codeOutput": "Returns all users older than 18",
    "projects": [],
    "certifications": [],
    "progressData": [
      {
        "year": 2023,
        "level": 1
      },
      {
        "year": 2024,
        "level": 2
      }
    ]
  }
};


export default skillDetails;