/** @flow */
import findUp from 'find-up';
import gitignore from 'parse-gitignore';
import { IGNORE_LIST, GIT_IGNORE } from '../../constants';

function getGitIgnoreFile(dir: string) {
  const gitIgnoreFile = findUp.sync([GIT_IGNORE], { cwd: dir });
  return gitIgnoreFile ? gitignore(gitIgnoreFile) : [];
}

export default function retrieveIgnoreList(cwd: string) {
  const ignoreList = getGitIgnoreFile(cwd).concat(IGNORE_LIST);
  return ignoreList;
}
