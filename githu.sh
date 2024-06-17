#token=$2
#foldername=$3
#commitmsg=$4

foldername=$2
commitmsg=$3

pushrepo(){
    git config --global --remove-section user
    git config --global --remove-section credential
    git remote remove origin
    git config --global credential.helper store
    git config --global user.user "osiafv"
    git config --global user.email "skyzbott@gmail.com"
    git config --global user.password "Risky132"
    git config user.password "Risky132" 
    git init
    git add .
    git commit -m "$commitmsg"
    git branch -m main
    git remote add origin https://github.com/osiafv/$foldername.git
    git push -u origin main --force
}

pushrepo1(){
    git config --global --remove-section user
    git config --global --remove-section credential
    git remote remove origin
    git config --global user.user "osiafv"
    git config --global user.email "skyzbott@gmail.com"
    git config --global user.password "Risky132"
    git config user.password "Risky132"
    git config --global credential.helper store
    git init
    git add .
    git commit -m "new" 
    git branch -m main
    git remote add origin https://github.com/osiafv/$foldername.git
    git push -u origin main
}
update(){
    git add .
    git commit -m "$commitmsg"
    git push
}



if [ $1 == "repo" ]
then
    #node C:\index.js $2 $3 $4 
elif [ $1 == "pushrepo" ]
then
    pushrepo
elif [ $1 == "update" ]
then
    update
fi