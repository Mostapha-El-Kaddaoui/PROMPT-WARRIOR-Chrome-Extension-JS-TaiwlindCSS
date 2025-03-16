# PROMPT WARRIOR <img src="https://github.com/Mostapha-El-Kaddaoui/PROMPT-WARRIOR-Chrome-Extension-JS-TaiwlindCSS/blob/main/images/icon48.png" alt="Logo" width="30"/>

## Introduction
This Chrome extension allows users to define specific constraints for their interactions with DeepSeek, ensuring that responses remain aligned with their expectations throughout the session. Once set, these constraints persist and are automatically applied to all subsequent queries without the need to repeat them.

![image](https://github.com/user-attachments/assets/243c4485-813b-4562-bb28-6cce4d72c25a)


## Problem Statement
AI models like DeepSeek tend to forget initial user instructions after a few exchanges, leading to responses that no longer adhere to the originally defined expectations. For instance, a user requesting precise and concise responses may notice that replies gradually become longer and more detailed over time.

## Proposed Solution
This extension introduces a floating interface that enables users to:
- Define their constraints once (e.g., "I want precise answers, in bullet points, with no extra commentary").
- Compose and send queries to DeepSeek without needing to restate these constraints.
- Ensure that constraints persist across all subsequent queries.

## Key Features
- Compact, floating interface.
- Two text fields: one for constraints and one for queries.
- Automatic persistence of constraints across queries.

## How to Use the Extension
### Installation (Development Mode)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/chatgpt-deepseek-constraint-extension.git
   ```
2. **Open Google Chrome** and go to `chrome://extensions/`.
3. **Enable Developer Mode** (top right corner).
4. **Load the extension** by clicking "Load unpacked" and selecting the cloned folder.
5. **Activate the extension** and start using it.

### Usage
1. **Set your constraints** in the first text field (e.g., "Short responses, bullet points, no unnecessary comments").
2. **Enter your query** in the second text field.
3. **Send the query**: the extension automatically combines the constraints with the query before sending it to DeepSeek.
4. **Receive responses** that adhere to your predefined constraints.

### Publication
The extension is currently being finalized for release on the Chrome Web Store. In the meantime, it can be installed in developer mode.

## Founder
This extension was created by [EL KADDAOUI Mostapha](https://www.linkedin.com/in/mostapha-el-kaddaoui/).
