<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Project 9</title>
        <meta charset="utf-8">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>A Mad Lib Story</h1>
        </header>

        <form method="post">
            <label for="name">What is your name? </label>
            <input type="text" id="name" name="name" placeholder="e.g. James" required> <br>

            <label for="vacation">Where are you going on vacation? </label>
            <input type="text" id="vacation" name="vacation" placeholder="e.g. Tijuana" required> <br>

            <label for="adjective">Give me an adjective: </label>
            <input type="text" id="adjective" name="adjective" placeholder="e.g. beautiful" required> <br>

            <label for="object">Give me an object: </label>
            <input type="text" id="object" name="object" placeholder="e.g. suitcase" required> <br>

            <label for="animal">Give me an animal: </label>
            <input type="text" id="animal" name="animal" placeholder="e.g. alligator" required> <br>

            <label for="verb">Give me a verb ending in -ing: </label>
            <input type="text" id="verb" name="verb" placeholder="e.g. running" required> <br>

            <label for="food">Name a type of food: </label>
            <input type="text" id="food" name="food" placeholder="e.g. sushi" required> <br>

            <label for="adverb">Give me an adverb: </label>
            <input type="text" id="adverb" name="adverb" placeholder="e.g. quickly" required> <br>

            <label for="number">Pick a number: </label>
            <input type="number" id="number" name="number" min="1" placeholder="e.g. 67" required> <br>

            <label for="body">Name a body part: </label>
            <input type="text" id="body" name="body" placeholder="e.g. hand" required> <br>

            <label for="exclamation">Give me an exclamation: </label>
            <input type="text" id="exclamation" name="exclamation" placeholder="e.g. Oh noooo!!!" required> <br>

            <label for="ptVerb">Give me a past tense verb: </label>
            <input type="text" id="ptVerb" name="ptVerb" placeholder="e.g. fell" required> <br>

            <input type="submit" value="Done">

        </form>
    
    <?php
      function createStory($name, $vacation, $adjective, $object, $animal, $verb, $food, $adverb, $number, $body, $exclamation, $ptVerb)  {
            $story = "One day, " . $name . " decided to take a vacation to " . $vacation . ". They were expecting a " . $adjective . " and relaxing trip
            and packed their favorite " . $object . " and headed to the airport. <br>";
            $story .= "Everything seemed fine until they discovered a wild " . $animal . " had somehow gotten into their hotel room. Instead, it started " . 
            $verb . " all over the place. <br>";
            $story .= "Things got even worse when " . $name . " tried to enjoy some delicious " . $food . ", but accidentally dropped it on the floor. They ran "
            . $adverb . " to clean up the mess, only to slip and hurt their " . $body . ". <br>";
            $story .= "After all the chaos, they decided to see how long they had left on their vacation, and figured there were still " . $number . " days
            to go. <br>";
            $story .= '"' . $exclamation . '"' . " they shouted, as they " . $ptVerb . " out of the hotel lobby. <br>";
            $story .= "By the end of the trip, " . $name . " had learned one important lesson: sometimes staying home is the best vacation of all!";
            return $story;
        }
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $vacation = $_POST["vacation"];
            $adjective = $_POST["adjective"];
            $object = $_POST["object"];
            $animal = $_POST["animal"];
            $verb = $_POST["verb"];
            $food = $_POST["food"];
            $adverb = $_POST["adverb"];
            $number = $_POST["number"];
            $body = $_POST["body"];
            $exclamation = $_POST["exclamation"];
            $ptVerb = $_POST["ptVerb"];

            $story = createStory($name, $vacation, $adjective, $object, $animal, $verb, $food, $adverb, $number, $body, $exclamation, $ptVerb);

            echo "<div class='story'><p>" . $story . "</p></div>";
        }
    ?>

    </body>
</html>