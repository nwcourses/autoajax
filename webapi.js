
async function get(url, cols, elementId) {
    const response = await fetch(url);
    const json = await response.json();

    let html = "<table>";
    json.forEach ( (record,i) => {
        if(i==0) {
            html += "<tr>";
            for(let col of cols) {
                html += `<th>${col}</th>` ; 
            }
            html += "</tr>";
        }
        html += "<tr>";
        for(let col of cols) {
            html += `<td>${record[col]}</td>`;
        }
        html += "</tr>";
    });
    html += "</table>";
    document.getElementById(elementId).innerHTML = html;
}

async function post(url, cols, elementId) {
    const postData = { };
    for(let col of cols) {
        postData[col] = document.getElementById(col).value;
    }
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(postData)
    });
    const text = await resp.text();
    document.getElementById(elementId).innerHTML = text;
    
}
