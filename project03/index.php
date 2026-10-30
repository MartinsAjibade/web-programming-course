<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PHP Assignment</title>
        <meta charset="utf-8">
        <link href="style.css" rel="stylesheet">
    </head>

    <body>
        <header>
            <h1>Weight Converter</h1>
        </header>

        <main>
            <p>
                This program essentially converts from pounds to other metrics of measurement like 
                kilograms(kg), grams(g), and ounces(oz).
            </p>

            <form method="post">
                <label for="lbs">Enter the weight in pounds(lbs): </label>
                <input type="number" id="lbs" name="lbs" value="0">
                <input type="submit" name="submit" value="Convert">
            </form>

            <?php 
                if (isset($_POST['submit'])) {
                    $lbs = $_POST['lbs'];
                    $kg = round($lbs / 2.205, 2);
                    $g = round($lbs * 453.6, 2);
                    $oz = round($lbs * 16, 2);

                    echo "<p>You converted " . $lbs . " lbs into:</p>";
                    echo "<ul>";
                    echo "<li>" . $kg . " kilograms (kg) </li>";
                    echo "<li>" . $g . " grams (g) </li>";
                    echo "<li>" . $oz . " ounces (oz) </li>";
                    echo "</ul>";
                }
            ?>
        </main>
    </body>
</html>