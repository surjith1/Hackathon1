

// UI RENDERING

const sectionWrap=  document.createElement('section');
sectionWrap.setAttribute("id","sectionWrap");
sectionWrap.innerHTML = '';
document.body.appendChild(sectionWrap);
let h2Tag = document.createElement("h2");
h2Tag.innerText="Pokemon API Implementation";
sectionWrap.append(h2Tag);

let inputWrap = document.createElement("div");
inputWrap.className="form-group";
sectionWrap.append(inputWrap);

let inpTag= document.createElement('input');
inpTag.setAttribute('type','text');
inpTag.id="inp";
inpTag.placeholder="Enter the Endpoints for the Pokemon API"
inputWrap.append(inpTag);

// let inpTag1= document.createElement('input');
// inpTag1.setAttribute('type','text');
// inpTag1.id="inp";
// inpTag1.placeholder="Enter the Offset Value for the Pokemon API"
// inputWrap.append(inpTag1);


let inpBtn = document.createElement("button");
inpBtn.innerText="Search";
inpBtn.id="inpBtnId";
inputWrap.append(inpBtn);

// var searchId = document.getElementById("inpBtnId");
// searchId.addEventListener('click',displayPokemonAPI());

const displayPokemonAPI = async() => {
    //const offset = document.getElementById('inp').value;
    //const limit = document.getElementById('inp').value;
    const offset=50;
    const limit = 50;
    
    try {
        
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        console.log(data);
       
// searchId.addEventListener('click',displayPokemonAPI());

        const tableApp= document.getElementById('sectionWrap');
        
        

        const table = document.createElement('table');
        const trHead =document.createElement('tr');     
        ['Name','URL'].forEach((thdata)=>{ 
            const th =document.createElement('th');    
            th.innerText=thdata;
            trHead.append(th);
        })
        table.appendChild(trHead);
        data.results.forEach(({name,url}) => {
            console.log(`Name: ${name}---> URL: ${url}`);
            const trBody =document.createElement('tr');
            const tdName =document.createElement('td');
            tdName.innerText=name;
            const tdUrl =document.createElement('td');
            tdUrl.innerText=url;
           
            trBody.append(tdName);
            trBody.append(tdUrl);
            table.appendChild(trBody)
        });
         
        sectionWrap.appendChild(table);

        const btnWrapDiv=document.createElement('div');
        btnWrapDiv.innerHTML="";
        btnWrapDiv.setAttribute('class','btn-wrap');
        document.body.appendChild(btnWrapDiv);
        let prevPage = document.createElement('button');
         //prevPage.innerText="Previuous";
         prevPage.setAttribute("id","prevButton");
         btnWrapDiv.appendChild(prevPage);
         
         const aTag=document.createElement("a");
         aTag.innerText="Previous";
         aTag.setAttribute('href','https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50"');
         //const prevId= document.getElementById('prevButton');
         prevPage.append(aTag);

       
        const nextPage =document.createElement('button');
        //nextPage.innerText="Next";
        const a1Tag=document.createElement("a");
        a1Tag.innerText="Next";
        a1Tag.setAttribute('href','https://pokeapi.co/api/v2/pokemon/?offset=100&limit=50"')
        nextPage.append(a1Tag);
        btnWrapDiv.appendChild(nextPage);

    } 

    catch(error) {
        resultRes =  console.log("Need to implement the End point wise search", error);
    }
}
displayPokemonAPI();