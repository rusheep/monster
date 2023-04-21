<?php

    $servername = "localhost";
    $username = "root";
    $password = "yo0960797";
    $dbname = "MONSTER";
    
    try {
                $db_host = new PDO(
                    "mysql:host={$servername};dbname={$dbname};charset=utf8",
                    $username,
                    $password
                );
    } catch (PDOException $e) {
                echo "資料庫連接失敗！ <br>";
                echo "Error: " . $e->getMessage() . "<br>";
                exit;
    }

    // 檢索表格中的數據

    $sql = 
    "SELECT *
    FROM monster
    JOIN eye ON monster.eye_id = eye.eye_id
    JOIN body ON monster.body_id = body.body_id
    JOIN right_hand ON monster.right_hand_id = right_hand.right_hand_id
    JOIN left_hand ON monster.left_hand_id = left_hand.left_hand_id;";

    $result = $db_host->query($sql);

    // 檢查是否有任何行被檢索
    if ($result->rowCount() > 0) {

        // 宣告一個空陣列
        $emp_list = array();
        // 遍歷結果集中的每一行資料
        foreach ($result as $row) {
            // 將每一行的資料轉換成物件並添加到陣列中
            $emp_list[] = (object)$row;
        }

        // 將整個物件陣列編碼為 JSON 格式並輸出到網頁上
        echo json_encode($emp_list);
        // print_r ($emp_list);

    } else {
        echo "沒有檢索到任何資料";
    }

    // 資料庫操作完，要透過 PDO 關閉連線的話則是像這樣寫：
    // $db_host=null;

?>