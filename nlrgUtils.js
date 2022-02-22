function generateKB() {
    const nlText = document.getElementById("nl-text").value;
    const policy = document.getElementById("policy").value;
    const consoleElement = document.getElementById("console");
    let xhr = new XMLHttpRequest();
    // let data;
    // xhr.onreadystatechange = function () {
    //     if (this.readyState !== 4) {
    //         return;
    //     }
    //     if (this.status === 200) {
    //        data = JSON.parse(this.responseText);
    //        // console.log("onreadystatechange data:", data);
    //     }
    // };
    // xhr.open("GET", "http://api.agify.io?name=meelad", true);
    // xhr.send();
    // console.log("data:", data);
    // consoleElement.value += data + "\n~$ ";
    xhr.open("POST", "http://82.116.211.98:8085/generaterules", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("accept", "application/json");
    xhr.send(JSON.stringify({
        value: nlText,
    }));
    let jsonResponse;
    if (xhr.readyState === 4 && xhr.status === 200) {
        jsonResponse = xhr.responseText;
    }
    if (jsonResponse) {
        console.log("jsonResponse:", jsonResponse);
        consoleElement.value += jsonResponse;
    }
}
