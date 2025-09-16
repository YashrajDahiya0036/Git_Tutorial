

// git add ./   to add all files to stage


// git add filename to add a single file to stage
// git commit -m 'add the commit message'
// git staus to track the status of files
// git log shows the previous commits


// git trial commit

// git checkout hash to switch to a specific commit
// git checkout main to switch back to master branch


// 🔹 Option 1: Use Personal Access Token (Recommended for HTTPS)

// Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).
// Or open directly: https://github.com/settings/tokens

// Click Generate new token (classic) → choose:

// Expiration (set as per your need, e.g., 90 days)

// Scopes: Select at least repo (for private repos) and workflow if needed.

// Copy the token (it shows only once).

// Replace password with token in your remote URL:

// git remote set-url origin https://<USERNAME>@github.com/YashrajDahiya0036/Musicly.git


// Example:

// git remote set-url origin https://YashrajDahiya0036@github.com/YashrajDahiya0036/Musicly.git


// Then, when Git asks for a password, paste the token.

// 🔹 Option 2: Use SSH Keys

// Generate a new SSH key:

// ssh-keygen -t ed25519 -C "your_email@example.com"


// (Press Enter through prompts).

// Add key to ssh-agent:

// eval "$(ssh-agent -s)"
// ssh-add ~/.ssh/id_ed25519


// Copy your key:

// cat ~/.ssh/id_ed25519.pub | clip


// Then add it in GitHub → Settings → SSH and GPG keys → New SSH key.

// Update remote to use SSH instead of HTTPS:

// git remote set-url origin git@github.com:YashrajDahiya0036/Musicly.git


// Quick

// ssh-keygen -t ed25519 -C "yashrajdahiya0036@gmail.com"
// asks if you want to add a password for your ssh key(then you need to use this password to use the ssh key)
// eval "$(ssh-agent -s)"
// ssh-add ~/.ssh/id_ed25519
// cat ~/.ssh/id_ed25519.pub | clip
// Then add it in GitHub → Settings → SSH and GPG keys → New SSH key.
// git remote set-url origin git@github.com:YashrajDahiya0036/Musicly.git