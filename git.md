# Starting Git

- Configuration
  - To start a reop `git init`
  - To set user name `git --global user.name 'NAME'`
  - To set email name `git --global user.email 'EMAIL'`
  - To set name of master branch `git config --global init.defaultBranch <name>`

- Adding(Staging) files
  - To add a file to stage(start tracking)
    <pre>git add filename</pre>
  - To add all files
    <pre>git add ./</pre>

- Commits
  - To commit the staged files
    <pre>git commit -m 'message'</pre>
  - To check status
    <pre>git staus</pre>
  - To show commit history
    <pre>git log</pre>

- Rollbacks
  - To go back to a specific commit
    <pre>git checkout GITHASH</pre>
  - To switch back to main branch
    <pre>git checkout main</pre>
  - To discard changes and switch back to main
    <pre>git checkout -f main</pre>
