# **Discord AutoJoin**

Welcome to **Discord AutoJoin**, a tool designed to automate the process of joining Discord servers using multiple accounts. This project leverages the `discord.js-selfbot-v13` library to facilitate automated actions with Discord accounts.

## **Features**

- **Automated Joining**: Automatically log in with multiple Discord accounts and join a server using an invitation link.
- **Token Management**: Supports multiple account tokens stored in a file for seamless automation.
- **Error Handling**: Provides detailed error logging to troubleshoot issues related to login or joining the server.

## **How It Works**

1. **Read Tokens**: The application reads Discord account tokens from `tokens.txt`. Each line should contain a single token.

2. **Configure Invite Link**: The server invitation link is specified in `config.json`. The program extracts the invitation code from this URL.

3. **Login and Join**:
   - Logs into each Discord account using the provided tokens.
   - Attempts to accept the server invitation using the extracted code.

4. **Logs and Error Handling**:
   - Provides console feedback on the status of login attempts and the results of invitation acceptance.
   - Detailed error messages are displayed for troubleshooting.

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/DiscordAutoJoin.git
   cd DiscordAutoJoin
   ```

2. **Install Dependencies**:
   ```bash
   npm install discord.js-selfbot-v13 axios gradient-string
   ```

3. **Configure the Application**:
   - Create `tokens.txt` and add your Discord account tokens, one per line.
   - Create `config.json` with the following structure:
     ```json
     {
       "url": "https://discord.gg/your-invite-code"
     }
     ```

4. **Run the Program**:
   ```bash
   node index.js
   ```
---
