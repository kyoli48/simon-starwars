### 1. Acknowledgements
I utilized several resources to enhance this project:
- John Williams' Imperial March theme as inspiration for the game's tone pattern
- MDN Web Docs and Stack Overflow for CSS styling techniques and best practices I was less familiar with, like clip-path for button shapes
- ShyFonts' SF Distant Galaxy font family to achieve the Star Wars aesthetic
- My friends' gameplay feedback and suggestions as inspiration for the game's user experience and features

### 2. A challenge I encountered and how I overcame it
The most significant challenge I encountered was implementing the "Sith mode" difficulty feature using clean, maintainable code. Having worked mostly with React before, where state management is more straightforward, handling DOM manipulation in vanilla JavaScript proved trickier than I expected. My journey through different implementations taught me valuable lessons I will apply to future projects.

Initially, I tried creating a complex system of tracking button positions using a buttonMap {} object that mapped button IDs to their current logical positions. However, this approach quickly became messy - I ran into bugs where buttons wouldn't light up correctly after moving and the game tracking logic of the guess() function would incorrectly fail the player. Furthermore, the code became hard to follow with multiple state variables tracking positions and original button mappings.

The breakthrough came when I stepped back and reconsidered the problem from first principles - instead of manipulating the game logic, I could simply reorder the buttons in the DOM! I spent some time reading through MDN documentation and discovered I could use Array.from(gameButtonArea.children) to convert the button elements into an array and use appendChild() to reposition them randomly with sort() and Math.random(). This achieved the required functionality with much cleaner code. 

While the solution seems obvious in hindsight, this was an eye-opening moment that taught me about the power of built-in DOM methods - something I hadn't needed to use much in React where you typically don't directly manipulate the DOM.

The experience taught me valuable lessons about the importance of understanding fundamental web technologies. While frameworks like React are powerful, knowing how to work with the DOM directly opens up new possibilities. It also showed me that sometimes the best solution isn't the first approach that comes to mind, and that it's worth taking a step back to reconsider the problem from different angles.

### 3. Questions about web dev after completing this project
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

### 4. Given more time, I'd...
Love to enhance this project by applying skills from my previous web development experiences while learning new ones:

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