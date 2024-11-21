document.addEventListener('DOMContentLoaded', () => {
  const commandSelect = document.getElementById('commandSelect');
  const inputGroup = document.getElementById('inputGroup');
  const inputValue = document.getElementById('inputValue');
  const generateButton = document.getElementById('generateButton');
  const output = document.getElementById('output');
  const copyButton = document.getElementById('copyButton');

  // Command definitions with separator handling for specific commands
  const commands = [
    { name: 'Get Version', code: 'F1 81', input: false },
    { name: 'Get Version (Verbose)', code: 'F1 82', input: false },
    { name: 'Get Laser Status', code: 'F1 91', input: false },
    { name: 'Get Laser Status (Verbose)', code: 'F1 92', input: false },
    { name: 'Get Command Error', code: 'F1 93', input: false },
    { name: 'Get System Date & Time', code: 'F1 A1', input: false },
    { name: 'Set System Date & Time', code: 'F1 A2', input: true, inputFormat: 'YYYYMMDDHHMMSS' },
    { name: 'Get Documents List', code: 'F2 81', input: false },
    { name: 'Open Document From Device', code: 'F2 82', input: true, inputFormat: 'File Name' },
    { name: 'Open Document From File System', code: 'F2 83', input: true, inputFormat: 'File Path' },
    { name: 'Save Document', code: 'F2 84', input: false },
    { name: 'Set I/O Port', code: 'F2 91', input: true, inputFormat: 'Port Details' },
    { name: 'Get I/O Port', code: 'F2 92', input: true, inputFormat: 'Port Number' },
    { name: 'Start Laser Test', code: 'F5 E1', input: false },
    { name: 'Stop Laser Test', code: 'F5 E2', input: false },
    { name: 'Start Aiming', code: 'F5 F1', input: false },
    { name: 'Start Marking', code: 'F5 F2', input: false },
    { name: 'Stop System', code: 'F5 FF', input: false },
    // DATA HANDLING Commands with separators
    { name: 'Set Data Field Value', code: 'F3 92', input: true, inputFormat: 'ID,Value' },
    { name: 'Set Global Counter Value', code: 'F3 84', input: true, inputFormat: 'ID,Value' },
    { name: 'Set Global String Value', code: 'F3 86', input: true, inputFormat: 'ID,Value' },
    { name: 'Enable/Disable Data Field', code: 'F3 91', input: true, inputFormat: 'ID,Status' },
    { name: 'Set Imported Field Value', code: 'F3 96', input: true, inputFormat: 'ID,File Path' }
  ];

  // Populate command dropdown
  commands.forEach(command => {
    const option = document.createElement('option');
    option.value = command.code;
    option.textContent = command.name;
    commandSelect.appendChild(option);
  });

  commandSelect.addEventListener('change', () => {
    const selectedCommand = commands.find(cmd => cmd.code === commandSelect.value);
	output.value = null;
    if (selectedCommand?.input) {
      inputGroup.style.display = 'block';
      inputValue.placeholder = `Enter ${selectedCommand.inputFormat}`;
    } else {
      inputGroup.style.display = 'none';
    }
  });

  generateButton.addEventListener('click', () => {
    const selectedCommand = commands.find(cmd => cmd.code === commandSelect.value);
    if (!selectedCommand) {
      alert('Please select a valid command.');
      return;
    }

    let hexCode = `1B 05 00 ${selectedCommand.code} 0D 0A`;

    if (selectedCommand.input) {
      const input = inputValue.value;
      if (!input) {
        alert(`Please enter a valid ${selectedCommand.inputFormat}.`);
        return;
      }

      // Handle ID and Value separation
      let formattedInput = '';
      if (input.includes(',')) {
        const [id, value] = input.split(',');
        if (!id || !value) {
          alert(`Please enter a valid ${selectedCommand.inputFormat}.`);
          return;
        }
        formattedInput = `${stringToHex(id)} 0A ${stringToHex(value)}`;
      } else {
        formattedInput = stringToHex(input);
      }

      const length = (formattedInput.split(' ').length + 4).toString(16).padStart(4, '0').toUpperCase();
      hexCode = `1B ${length.slice(2)} ${length.slice(0, 2)} ${selectedCommand.code} ${formattedInput} 0D 0A`;
    }

    output.value = hexCode.toUpperCase();
  });

  copyButton.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    alert('HEX code copied to clipboard!');
  });

  function stringToHex(str) {
    return Array.from(str)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
      .join(' ')
      .toUpperCase();
  }
});
