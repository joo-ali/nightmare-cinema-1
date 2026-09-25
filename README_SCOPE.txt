Nightmare Cinema - Team Split v2
==================================

Member 1 - Authentication & Users
Branch: feature/auth-users
Suggested commit: add authentication and user management

Files:
- auth.html
- forgot-password.html
- reset-password.html
- js/auth.js
- js/password.js
- backend/db/models/user.model.js
- backend/src/modules/users
- backend/src/modules/auth
- backend/src/middleware/verifyToken.js
- backend/src/utilities/email.js
- backend/src/utilities/emailTemplate.js
- backend/src/utilities/resetPasswordEmailTemplate.js

Notes:
- Owns register, login, email verification, JWT, forgot password and reset password.
- Authentication tab switching is now inside js/auth.js, so Member 1 owns the complete auth frontend behavior.

Upload:
git checkout -b feature/auth-users
# Copy this archive into the repository root
git add .
git commit -m "add authentication and user management"
git push -u origin feature/auth-users

Then create a Pull Request to main.