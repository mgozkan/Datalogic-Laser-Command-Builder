# Datalogic Laser Command Builder

**Datalogic Laser Command Builder** is a user-friendly web-based tool designed to generate HEX commands for Datalogic laser marking devices. The tool supports all documented commands, including data handling, system commands, and laser-specific operations, ensuring effortless and accurate HEX code generation.

---

## Features
- 🛠 **Comprehensive Command Support**: Covers all documented Datalogic laser marking commands.
- 📋 **Dynamic Input Handling**: Adjusts input fields automatically based on the selected command.
- ⚙ **Separator Handling**: Handles `ID,Value` inputs with HEX `0A` separator seamlessly.
- 💾 **Copy-to-Clipboard**: Copy generated HEX codes instantly.
- 🎨 **Sleek Design**: Built with a clean UI and embedded Datalogic branding.

---

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional installations required.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mgozkan/Datalogic-Laser-Command-Builder.git
   cd Datalogic-Laser-Command-Builder
   ```

2. Open the index.html file in your browser:
    ```bash
    open index.html
    ```
### Screenshot
![image](https://github.com/user-attachments/assets/c072438e-7de1-4df9-9ad1-792e6c9f7574)

![image](https://github.com/user-attachments/assets/4e6336e2-828a-4d10-b15a-240a394afb3d)


### Usage
1. Select Command: Use the dropdown to choose the desired command.
2. Provide Input (if required): Enter data in the format shown in the input placeholder (e.g., ID,Value).
3. Generate HEX Code: Click Generate to produce the HEX command.
4. Copy HEX Code: Use the Copy button to copy the output.

### Commands Overview
#### System Commands
  Get Version: Retrieve firmware version (Command: F1 81).
  Get Laser Status: Check laser status (Command: F1 91).
  Set System Date & Time: Update the system clock with YYYYMMDDHHMMSS format.
#### Document Handling
  Open Document From Device: Load a document by name (Command: F2 82).
  Save Document: Save the active document (Command: F2 84).
#### Data Handling
  Set Data Field Value: Update a data field with ID,Value (Command: F3 92).
  Set Global Counter Value: Update global counters with ID,Value (Command: F3 84).
  Enable/Disable Data Field: Enable or disable a specific field with ID,Status (Command: F3 91).

## Project Structure
```
Datalogic-Laser-Command-Builder/
│
├── index.html       # Main HTML file
├── styles.css       # CSS file for design
├── script.js        # JavaScript file for logic
└── README.md        # Project documentation
```

## Contributing
Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Copyright and Disclaimer
This tool is an independent project and is NOT affiliated with or endorsed by Datalogic S.p.A.
All trademarks, logos, and brand names are the property of their respective owners.
The use of the Datalogic name and logo in this repository is solely for illustrative purposes to aid in understanding and generating commands compatible with Datalogic devices.

For official Datalogic support, please visit [Datalogic's website](https://www.datalogic.com/eng/index.html) 

For detailed information and product requests from Turkey, visit [Melka Endüstriyel Teknik Website](https://www.melkateknik.com)


.
