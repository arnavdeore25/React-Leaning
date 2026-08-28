 # GitHub Verifier

 GitHub Verifier is a small React application that checks whether a GitHub username exists. Search for a username to view the matching profile's avatar, bio, repository count, follower count, and following count.

 The app uses the public [GitHub Users API](https://docs.github.com/en/rest/users/users#get-a-user) and does not require a GitHub token for local use.

 ## Features

 - Search for any public GitHub username
 - Display profile information and account statistics
 - Open the complete profile on GitHub
 - Show loading and not-found states
 - Responsive layout for mobile and desktop screens

 ## Tech Stack

 - React
 - Vite
 - Tailwind CSS
 - Axios

 ## Project Structure

 ```text
 src/
 ├── components/
 │   ├── SearchBar.jsx    # Username input and submit button
 │   └── UserCard.jsx     # GitHub profile details and statistics
 ├── App.jsx              # Main application and API request flow
 ├── App.css              # App-level styles
 ├── index.css            # Global styles and Tailwind import
 └── main.jsx             # React application entry point
 ```

 ## GitHub API Notes

 The application uses GitHub's unauthenticated API endpoint. GitHub applies rate limits to unauthenticated requests, so repeated searches may temporarily be limited. The app only requests public user profile data.

 ## License

 This project is intended for learning and demonstration purposes.
