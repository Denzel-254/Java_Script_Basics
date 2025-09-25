# 🔐 Password Checker & 🆔 Username Generator
This repository contains two beginner-friendly JavaScript projects:
* Password Strength Checker – validates a user’s password against certain conditions.
* Username Generator – generates random usernames from a user’s name input.

## 🔐 Password Strength Checker
### 🚀 Features
* Validates a password when the user clicks the Check Password button.
* Shows feedback with emojis and color styling:
  * ✅ Strong Password (green)
  * ❌ Weak Password (red)
* Uses Regular Expressions (Regex) to enforce rules.

### 📝 Password Rules
A password is considered strong if it:
* Has at least 8 characters.
* Contains at least one uppercase letter.
* Contains at least one number.

## 🆔 Username Generator
* Takes a name input and generates three random username suggestions.
* Each username uses different formats (dot, underscore, initials + numbers).
* Numbers are randomized on each generation.
* Supports pressing Enter key or clicking Generate button.

## 📖 Learning Highlights

* Practiced JavaScript string methods (trim(), toLowerCase(), etc.).
* Used Math.random() + Math.floor() to generate numbers.
* Improved code by refactoring with functions (e.g., clearOutput()).
* Added event listeners for both button clicks and Enter key presses.
