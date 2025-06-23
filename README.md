To remove the unnecessary push from your GitHub repository, follow these steps carefully:
1. Clone your repo if you haven’t:
   git clone https://github.com/Neesui/MERN-AUTH-TEST.git
   cd MERN-AUTH-TEST
2. Delete everything except Auth/:
    Use this command in VS Code Terminal (PowerShell):
    Remove-Item -Recurse -Force api, client, learning, README.md, .gitignore, package.json, package-lock.json
3. 🧩 Then run Git commands:
git add .
git commit -m "Cleaned repo: removed unnecessary folders, kept only Auth folder"
git push origin main




