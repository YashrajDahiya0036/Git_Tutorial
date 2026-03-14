# Useful GIT Commands

## Stash

- `git stash` - To store the current changes without commiting them.
- `git stash list` - To check the stash list.
- `git stah pop` - To apply the changes to the last stash.
- `git stash pop stash@{n}` - To Pop a specific stash.
- `git stash apply` - Its keeps the stash but still applys the changes.
- `git stash push -m "Add a message to the stash"` - To add a message to a stash.
- `git stash push -u -m "Local config and new API mocks"` - To add new files to the git.

## Restore

- `git restore .` - To restore everything to the last commit.
- `git restore filename` - To restore a single file.
- `git restore --stage .` To unstage all the files.
- `git restore --stage filename` To unstage a single file.

## Show files

- `git show --name-only` - To get the name of the files that were changed in the last commit.
  - use `git show --name-only -n number` to get the changed files names till a specific number of commits.
