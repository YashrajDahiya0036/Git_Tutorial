# Starting Git

- Configuration
  - To start a reop `git init`
  - To set user name `git --global user.name 'NAME'`
  - To set email name `git --global user.email 'EMAIL'`
  - To set name of master branch `git config --global init.defaultBranch <name>`
  - To update the name of master branch `git branch -M main`

---

- Adding(Staging) files
  - To add a file to stage
    <pre>git add filename</pre>
  - To add all files
    <pre>git add ./</pre>

---

- Commits
  - To commit the staged files
    <pre>git commit -m 'message'</pre>
  - To check status
    <pre>git staus</pre>
  - To show commit history
    <pre>git log</pre>
  - To commit without staging
    <pre>git commit -a -m 'MESSAGE'</pre>

---

- Rollbacks
  - To go back to a specific commit
    <pre>git checkout GITHASH</pre>
  - To switch back to main branch
    <pre>git checkout main</pre>
  - To discard changes and switch back to main
    <pre>git checkout -f main</pre>

---    

- Remote Connection
  - To add a repo url(Might have to use SSH key (see git.js on how to set up))
    <pre>git remote origin add REPO_URL</pre>
  - To update origin url
    <pre>remote set-url origin REPO_URL</pre>
  - Now you can push
    <pre>git push -u origin main</pre>

---

- Branchig
  - To create a new branch
    <pre>git branch BRANCH_NAME</pre>
  - To Switch
    <pre>git checkout BRANCH_NAME</pre>
  - To do these at the same time
    <pre>git checkout -b BRANCH-NAME</pre>
  - Example of braching
    >main -> created Branch-1
    - Branch-1 contanins code from main
    - now we switch to Branch-1 and write some code
    - then if create a new branch say Branch-2 
    >>Branch-1 -> Branch-2
    - then Branch code will have same code as Branch-1 instead of main
    - So the code depends on the current branch you are on insted of the main
  - If you want you branch from a specific branch then use
    <pre>git branch BRANCH_NAME SOURCE_BRANCH</pre>
    - runnig for teasting
      <pre>git branch feat-branch main</pre>
      - this was added from feat-branch
