# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alphonsus Koong**


## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cuexfor each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

## Reflection Questions
### 1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I utilized several resources to enhance this project:
- John Williams' Imperial March theme as inspiration for the game's tone pattern
- MDN Web Docs and Stack Overflow for CSS styling techniques and best practices I was less familiar with, like clip-path for button shapes
- ShyFonts' SF Distant Galaxy font family to achieve the Star Wars aesthetic
- My friends' gameplay feedback and suggestions as inspiration for the game's user experience and features

### 2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The most significant challenge I encountered was implementing the "Sith mode" difficulty feature using clean, maintainable code. Having worked mostly with React before, where state management is more straightforward, handling DOM manipulation in vanilla JavaScript proved trickier than I expected. My journey through different implementations taught me valuable lessons I will apply to future projects.

Initially, I tried creating a complex system of tracking button positions using a buttonMap {} object that mapped button IDs to their current logical positions. However, this approach quickly became messy - I ran into bugs where buttons wouldn't light up correctly after moving and the game tracking logic of the guess() function would incorrectly fail the player. Furthermore, the code became hard to follow with multiple state variables tracking positions and original button mappings.

The breakthrough came when I stepped back and reconsidered the problem from first principles - instead of manipulating the game logic, I could simply reorder the buttons in the DOM! I spent some time reading through MDN documentation and discovered I could use Array.from(gameButtonArea.children) to convert the button elements into an array and use appendChild() to reposition them randomly with sort() and Math.random(). This achieved the required functionality with much cleaner code. 

While the solution seems obvious in hindsight, this was an eye-opening moment that taught me about the power of built-in DOM methods - something I hadn't needed to use much in React where you typically don't directly manipulate the DOM.

The experience taught me valuable lessons about the importance of understanding fundamental web technologies. While frameworks like React are powerful, knowing how to work with the DOM directly opens up new possibilities. It also showed me that sometimes the best solution isn't the first approach that comes to mind, and that it's worth taking a step back to reconsider the problem from different angles.

### 3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Coming from a React/Next.js background where I built my personal website and a word game, this vanilla JavaScript project raised several interesting questions about web development:

1. Framework Benefits and Tradeoffs:
- How do larger applications decide between using vanilla JavaScript versus frameworks like React?
- What are the performance implications of using virtual DOM in React versus direct DOM manipulation like in this project?
- How do companies balance the convenience of frameworks with the need for customization and control?

2. State Management Approaches:
- In this project, I used global variables for game state. How do real-world games handle complex state without frameworks like React's useState?
- How would implementing a backend API (like I did for my word game's dictionary lookups) affect the way we structure frontend state?
- What are the pros and cons of different state management solutions I've heard about like Redux or Zustand?

3. Browser APIs and Compatibility:
- This was my first time using the Web Audio API - what other powerful browser APIs am I missing out on?
- How do professional developers ensure consistent behavior across different browsers and devices?

These questions stem from seeing the differences between building with and without frameworks, and my growing curiosity about the fundamentals that power the tools I’ve used.

### 4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Given more time, I would love to enhance this project by applying skills from my previous web development experiences while learning new ones:

1. Modern Frontend Features:
- Convert the project to Next.js (which I'm more familiar with) for better development experience
- Add TypeScript for type safety
- Implement responsive design patterns
- Create engaging animations using Framer Motion, which I've experimented with before

2. Gameplay Enhancements:
- Build a practice mode where players can create and share custom patterns
- Add difficulty settings that adjust timing and sequence length
- Create different sound themes beyond just the Imperial March
- Implement a visual "Force power" meter that fills up as players complete sequences

3. Backend Integration:
- Learn how to add user authentication using Next.js API routes (similar to how I plan to implement user accounts for my Synonyms word game)
- Learn how to create a global leaderboard using a PostgreSQL database
- Store custom patterns that players create
- Implement basic analytics to track game completion rates and identify difficult sequences

4. Quality of Life:
- Add mobile touch support with proper event handling
- Implement proper error handling for audio loading
- Add keyboard controls for accessibility
- Create a tutorial mode for new players

While ambitious, these features would help me learn more about full-stack development while making the game more engaging and social. I'm particularly excited about the backend integration, as it would give me experience with database design and API development beyond the simple endpoints I've worked with before.

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
[losing screen recording](https://www.loom.com/share/4bf93d3341504668994dba3fe576be7c?sid=1c67d9bf-78bb-4958-a41d-8ed88e1e2a78)\
\
Bonus features:
- Progress bar
- Sith mode
- Modal notifications

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/cde27b6e168d4f85a3cd50611b1f26f6?sid=d6b67d53-6656-45f6-8cb5-b6e24675c892)
- 00:00 Introduction
- 00:22 What skills and experiences are you hoping to take away from this program? How does this align with your personal and professional interests and goals?
- 02:14 If you are unsure about a concept or run into a bug, how might you go about asking for help? Be specific. Who would you ask and why? How might you phrase your questions?
- 03:22 What are 3 questions you would ask your mentor and why?


## License

    Copyright Alphonsus Koong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.