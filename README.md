Here is a **professional README.md** for this second project (the **Pig Dice Game**). You can paste this directly into your GitHub repository.

---

# 🎲 Pig Dice Game

A **two-player dice game** built with **HTML, CSS, and JavaScript** where players compete to reach **100 points first**. Players roll a dice, accumulate points, and decide whether to **hold** their score or risk losing it.

---

# 🚀 Features

* 🎲 Random dice roll simulation
* 👥 Two-player turn-based gameplay
* ➕ Current score accumulation per turn
* 🧠 Strategy element (roll again or hold)
* 🏆 Automatic winner detection
* 🔄 New Game reset functionality
* 🎨 Dynamic UI updates (active player, winner styling, dice visibility)

---

# 🕹️ Game Rules

1. The game has **two players**.
2. A player rolls the dice using the **Roll Dice** button.
3. If the dice shows **2–6**:

   * The value is **added to the current score**.
4. If the dice shows **1**:

   * The player **loses their current score**.
   * The turn **switches to the other player**.
5. The player can click **Hold** to:

   * Add their **current score to their total score**.
   * Pass the turn to the other player.
6. The first player to reach **100 points wins**.

---

# 📂 Project Structure

```
pig-dice-game/
│
├── index.html        # Game layout and UI
├── style.css         # Styling and layout
├── script.js         # Game logic
├── dice-1.png
├── dice-2.png
├── dice-3.png
├── dice-4.png
├── dice-5.png
├── dice-6.png
└── README.md
```

---

# 🧠 Key JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

### 1️⃣ DOM Manipulation

Updating UI elements dynamically.

Example:

```javascript
currentScore1.textContent = num1;
```

---

### 2️⃣ Event Listeners

Handling user actions like clicking buttons.

```javascript
document.querySelector(".btn--roll").addEventListener("click", function () {
```

---

### 3️⃣ Random Number Generation

```javascript
Math.trunc(Math.random() * 6) + 1
```

This simulates a dice roll from **1–6**.

---

### 4️⃣ Game State Management

Variables track:

* Player current score
* Player total score
* Active player
* Winner state

---

### 5️⃣ Functions for Code Reusability

Examples:

* `totalScoreFunction1()`
* `totalScoreFunction2()`
* `handleRollOne()`
* `handleRollNotOne()`
* `checkWinner()`

These functions make the code **cleaner and reusable**.

---

# 🎨 UI Behavior

| Action    | Result                       |
| --------- | ---------------------------- |
| Roll Dice | Shows dice image             |
| Roll 1    | Player loses current score   |
| Hold      | Current score added to total |
| Reach 100 | Player wins                  |
| New Game  | Game resets                  |

---

# ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/pig-dice-game.git
```

2. Open the folder.

3. Run **index.html** in your browser.

---

# 📈 Possible Improvements

Future upgrades could include:

* 🎵 Sound effects for dice rolls
* 📱 Mobile responsive layout
* 💾 Saving scores with **localStorage**
* 🤖 Single-player mode vs computer
* 🎨 Animations for dice rolling

---

# 👨‍💻 Author

**Noah Nathenael**
Computer Science Student
Addis Ababa University


If you want, I can also show you **3 powerful improvements that would make this Pig Game look like a *professional portfolio project*** (the kind recruiters notice immediately).
