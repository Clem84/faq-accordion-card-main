const quest = document.querySelectorAll(".question");
const ans = document.querySelectorAll(".answer");
for (let i=0;i<quest.length;i++){
    quest[i].addEventListener("click",function(){
        if (this.className=="questionselected"){
            this.className="question";
            this.nextElementSibling.className="answer";
            this.children[0].className=""
        }
        else{
            for (let i=0;i<quest.length;i++){
            quest[i].className="question";
        }
        this.className="questionselected";
        for (let i=0;i<ans.length;i++){
            ans[i].className="answer";
        }
        this.nextElementSibling.className="answershowed";
        this.children[0].className="rotate";
    }})
}


