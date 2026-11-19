<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Project 7</title>
        <meta charset="utf-8">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Mailing Label CSV Converter</h1>
        </header>

        <form method="post">
            <input type="text" name="CSVInput" id="CSVInput" 
            placeholder="Enter your comma-separated value here:" required>

            <input type="submit">
        </form>
        
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $check = $_POST['CSVInput'];
            $csvArray = explode(",", $check);

            foreach ($csvArray  as &$value) {
                $value = trim($value);
            }

            unset($value);

            $name = $csvArray[1];
            $org = $csvArray[2];
            $addy = $csvArray[3];
            $city = $csvArray[4];
            $state = $csvArray[5];
            $zip = $csvArray[6];

            echo "<div class='label'>";
            if (empty($org)) {
                echo "Attn: " . $name . "<br>";
                echo $addy . "<br>";
                echo $city . ", " . $state . " " . $zip;
            } else {
                echo $org . "<br>";
                echo "Attn: " . $name . " " . $addy . "<br>";
                echo $city . ", " . $state . " " . $zip;
            }
            echo "</div>";
        }
    ?>

    </body>
</html>