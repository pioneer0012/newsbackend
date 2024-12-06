import ZKLib from 'node-zklib';

const deviceIP = '192.168.1.201';
const devicePort = 4370;

const fetchAttendance = async () => {
  try {
    const zkInstance = new ZKLib(deviceIP, devicePort);

    console.log('Attempting to connect to the biometric device...');
    await zkInstance.createSocket();
    console.log('Connected successfully to the biometric device.');

    console.log('Fetching attendance logs...');
    const logs = await zkInstance.getAttendances();

    // Log the raw logs or data
    console.log('Raw logs or attendance data:', logs);

    // Check if logs is an array and handle it accordingly
    if (Array.isArray(logs)) {
      console.log('Attendance logs:', logs);
    } else {
      console.log('No valid attendance logs found.');
    }

    await zkInstance.disconnect();
    console.log('Disconnected from the biometric device.');
  } catch (error) {
    console.error('Error fetching attendance:', error.message);
    console.error(error.stack); // Log stack trace for detailed debugging
  }
};

fetchAttendance();
