

git add
git commit
git commit -m "message"

git branch "branch_name"
gti checkout "branchName"
git merge "merge from branch"
git status

//手上異動先暫存
git stash 
git stash save -u "message"

// 強制回上一版本,捨棄目前還沒commit之修改
git reset --hard


git log //查看訊息
git log -- graph //圖形顯示歷程

git log -p //顯示差異
------
一開始介紹的 git add. => git add
p.62 應該為 git log --stat


------

git diff // 比較上次commit 之後差異
git diff -p

gti tag "versionName"