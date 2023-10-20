alias k='kubectl'

alias npmi='npm i --legacy-peer-deps'
alias npmci='npm ci --legacy-peer-deps'

alias gti='git'
alias gs='git status'
alias gpl='git pull'
alias gp='git push'
alias gpt='git push && git push --tags'
alias grh='git reset --hard'
alias grp='git reset --hard && git pull'
alias git-prune='git remote prune origin'
alias git-clean='git branch --merged | grep -v "master\|staging\|*" | xargs git branch -D && git fetch --all'

alias ll='ls -lhA'
alias cd..='cd ..'
alias ..='cd ..'
alias cls='clear'

alias w=watson

alias ssh-<target>="ssh <user>@<address> -i <path/to/key/file.pem>"
