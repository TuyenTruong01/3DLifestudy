import { cp, mkdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const apps = [
  ['website', ''],
  ['room-designer', 'studio/room'],
  ['furniture-designer', 'studio/furniture'],
  ['equipment-lab', 'lab/equipment'],
];
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const output = join(root, 'dist');
const run = (command, args, cwd) => new Promise((resolve, reject) => {
  const isWindows = process.platform === 'win32';
  const child = spawn(
    isWindows ? (process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe') : command,
    isWindows ? ['/d', '/s', '/c', `${command} ${args.join(' ')}`] : args,
    { cwd, stdio: 'inherit', windowsHide: true },
  );
  child.once('error', reject);
  child.once('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)));
});

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const [app, target] of apps) {
  const appDirectory = join(root, 'apps', app);
  await run(npm, ['run', 'build'], appDirectory);
  await cp(join(appDirectory, 'dist'), target ? join(output, target) : output, { recursive: true });
}

console.log('Built 3D LIFE platform into dist/.');
