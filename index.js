

document.addEventListener("DOMContentLoaded", function() {


    const btn_el = document.getElementById("btn1");
    const clear_el = document.getElementById("btn2");
    const body_el =document.getElementById("body");
    const eye_el = document.getElementById("eye");
    const r_hand_el = document.getElementById("r_hand");
    const l_hand_el = document.getElementById("l_hand");
    const all_el = document.getElementById("all_item");


    function print() {

        // 創建一個 XMLHttpRequest 對象
        var xhr = new XMLHttpRequest();
        // 設置請求方式為 GET，URL 為 monster.php
        xhr.open("GET", "monster.php");

        xhr.onload = function() {
            // 當請求成功時執行以下代碼
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                localStorage.setItem('monsterData', JSON.stringify(data));
                console.log(data);
            }
        };
        xhr.send();
    }
    

    // 清除localstorage
    clear_el.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.clear();
    });

    // 將資料庫所有東西放進localstorage
    btn_el.addEventListener("click",function(e){
        e.preventDefault();
        print();
    });



    // 顯示body的按鈕
    body_el.addEventListener("click",function(e){
        e.preventDefault();

        // 從 localStorage 中讀取 key 為 monsterData 的數據
		var monsterData = localStorage.getItem("monsterData");

        // 取出的數據轉成JSON
        var monsterObj = JSON.parse(monsterData);

        // 取出陣列0的body_url
        var bodyUrl = monsterObj[0].body_url;

		// 將數據添加到 HTML 元素中
		document.getElementById("m_body").innerHTML = bodyUrl;
    });


    // 顯示眼睛
    eye_el.addEventListener("click",function(e){
        e.preventDefault();

        // 從 localStorage 中讀取 key 為 monsterData 的數據
		var monsterData = localStorage.getItem("monsterData");

        // 取出的數據轉成JSON
        var monsterObj = JSON.parse(monsterData);

        // 取出陣列0的body_url
        var eyeUrl = monsterObj[0].eye_url;

		// 將數據添加到 HTML 元素中
		document.getElementById("m_eye").innerHTML = eyeUrl;

    });


    // 顯示右手
    r_hand_el.addEventListener("click",function(e){
        e.preventDefault();

         // 從 localStorage 中讀取 key 為 monsterData 的數據
		var monsterData = localStorage.getItem("monsterData");

        // 取出的數據轉成JSON
        var monsterObj = JSON.parse(monsterData);

        // 取出陣列0的body_url
        var r_hand_Url = monsterObj[0].right_hand_url;

        console.log(r_hand_Url);
		// 將數據添加到 HTML 元素中
		document.getElementById("m_r_hand").innerHTML = r_hand_Url;
    });


    // 顯示左手
    l_hand_el.addEventListener("click",function(e){
        e.preventDefault();

        
         // 從 localStorage 中讀取 key 為 monsterData 的數據
		var monsterData = localStorage.getItem("monsterData");

        // 取出的數據轉成JSON
        var monsterObj = JSON.parse(monsterData);

        // 取出陣列0的body_url
        var l_hand_Url = monsterObj[0].left_hand_url;

		// 將數據添加到 HTML 元素中
		document.getElementById("m_l_hand").innerHTML = l_hand_Url;

    });

    all_el.addEventListener("click",function(e){
        e.preventDefault();

        console.log("按了ALL");
        // 從 localStorage 中讀取 key 為 monsterData 的數據
		var monsterData = localStorage.getItem("monsterData");

        // 取出的數據轉成JSON
        var monsterObj = JSON.parse(monsterData);

        // 取出陣列0的body_url
        var bodyUrl = monsterObj[0].body_url;
        // 取出陣列0的body_url
        var eyeUrl = monsterObj[0].eye_url;
        // 取出陣列0的body_url
        var r_hand_Url = monsterObj[0].right_hand_url;
        // 取出陣列0的body_url
        var l_hand_Url = monsterObj[0].left_hand_url;


		// 將數據添加到 HTML 元素中
		document.getElementById("m_body").innerHTML = bodyUrl;
		// 將數據添加到 HTML 元素中
		document.getElementById("m_eye").innerHTML = eyeUrl;
        console.log(r_hand_Url);
		// 將數據添加到 HTML 元素中
		document.getElementById("m_r_hand").innerHTML = r_hand_Url;
		// 將數據添加到 HTML 元素中
		document.getElementById("m_l_hand").innerHTML = l_hand_Url;

    });
});