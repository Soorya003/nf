
document.querySelector("button").addEventListener("click",result)

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";


async function result(){
    try {
         
        var data1 = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&sfw`);
        var res = await data1.json();
        console.log(res);
        var col=document.createElement("div");
        col.className="col-lg-4"
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Films</h5>
          <p class="card-text">25 films of naruto will be displayed in console under title</p>
        </div>
      </div>`
      row.append(col);
      container.append(row);
      document.body.append(container);
    } catch (error) {
        console.log(error);
    }
}
