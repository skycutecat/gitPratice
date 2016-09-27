
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
//------
一開始介紹的 git add. => git add
p.62 應該為 git log --stat


//------
// 比較上次commit 之後差異
git diff
git diff -p

gti tag "versionName"


git branch --set-upstream branch
// 遠端branch 將一個已存在的 branch 設定成 tracking 遠端的branch。

git push // 若有預設的遠端 branch 就可以直接commit

git push "remote_name" "local_branchname"

git fetch (更新branch 最新的code至 local rep)


//遇到衝突如何處理

A B 都複製遠端master.
AB 修改同個檔案, A先 push. 此時 B再push就會有衝突

投影片解法
1. pull 回來
2. merge
3. push


需要再加以理解的部分：
1. fetch/clone vs pull
2. local  git branch:  master vs branch, 為什麼bracn 異動檔案切換至 master,切換內容仍會連動
3. pull  =  fetch + merge, 此時遇到衝突要如何處理呢？
