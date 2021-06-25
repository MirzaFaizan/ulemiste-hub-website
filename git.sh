git config --local core.editor "code --wait"
git config --local credential.helper 'cache --timeout 43200'
git config --local difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"
git config --local merge.tool vscode
git config --local mergetool.vscode.cmd "code --wait $MERGED"