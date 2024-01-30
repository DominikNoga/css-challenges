const { execSync } = require('child_process');

const challengeNumber = process.argv[2];

if (!challengeNumber) {
  console.error('Please provide a challenge number.');
  process.exit(1);
}

const command = `ng generate component challenges/challenge${challengeNumber} --skip-tests`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
