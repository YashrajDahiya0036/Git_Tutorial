# Python

## Virtual Environments (venv)

- **Create a virtual environment:** 
  `python -m venv venv`
- **Activate a virtual environment:**
  - **Bash/Zsh:** `source venv/bin/activate`
  - **PowerShell:** `.\venv\Scripts\Activate.ps1`
  - **Command Prompt (CMD):** `venv\Scripts\activate.bat`

## Package Management (pip)

- **Install packages from a requirements file:** 
  `pip install -r requirements.txt`
- **Generate or update the requirements file:** 
  `pip freeze > requirements.txt`
  *(Note: Running this command overwrites the file with currently installed packages; it doesn't repeatedly append them.)*
