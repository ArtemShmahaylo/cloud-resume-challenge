# Week 1 – Journal Entry

## 1. Technical Uncertainty (What I didn't know at first)
I was unsure how commit rewriting works in github.dev. Specifically, I expected the “Git: Amend Commit” command to expose the previous commit message, but github.dev did not show the old message or allow me to edit the last commit through the UI.

I was also uncertain whether github.dev supports a Git terminal or advanced Git workflows.

## 2. Hypothesis
My assumption was that github.dev behaves like VS Code Desktop:
- it would show the previous commit message when running `Amend`
- it would allow re-writing history directly from the UI
- it might have a hidden Git terminal

## 3. Technical Exploration (What I tried)
I explored several approaches:

- Ran `Git: Amend Commit` from the command palette  
  → github.dev did not expose previous commit message

- Checked the Source Control view  
  → no amend option available unless changes are staged

- Attempted to open a terminal  
  → github.dev prompted me to open Codespaces (paid option)

- Considered Codespaces but closed it to avoid charges

Eventually I decided to perform commit rewriting locally via VS Code Desktop:
git reset --soft HEAD~3
git add .
git commit -m "feat: Initial project setup – professional README, Europass CV screenshots, folder structure"
git push --force-with-lease


This successfully rewrote the last three commits and cleaned the commit history.

## 4. Final Observation (What I learned)
- github.dev does **not** support amend commit workflows properly  
- github.dev has **no integrated Git terminal**, only Codespaces  
- rewriting history must be done either in Codespaces or on a **local clone**
- using local VS Code is the correct, professional solution for advanced Git operations

## 5. Outcomes (Results)
- Cleaned and rewritten commit history
- Professional commit message applied
- Local VS Code environment fully configured
- Repository cloned and ready for real development
- Improved understanding of Git workflows across environments

## 6. (Optional) Challenges Attempted
No additional challenges attempted this week.
