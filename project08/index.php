<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Project 8</title>
        <meta charset="utf-8">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>ACME Inc. Customer Information Form</h1>
        </header>

        <form method="post">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" placeholder="e.g. James" required> <br>

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" placeholder="e.g. Brown" required> <br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="e.g. you@example.com" required> <br>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="e.g. 67" required min="18" max="120"> <br>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="e.g. 111-222-3333" 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autocomplete="tel" required> <br>

            <label for="addy">Street address:</label>
            <input type="text" id="addy" name="addy" placeholder="e.g. 123 Oak St" required> <br>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" placeholder="e.g. New York City" required> <br>

            <label for="state">Select State:</label>
            <select id="state" name="state" required>
                <option value="">Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select> <br>

            <label for="zip">Zip code:</label>
            <input type="text" id="zip" name="zip" inputmode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" 
            maxlength="10" autocomplete="postal-code" placeholder="e.g. 12345-6789" required> <br>

            <label for="company_name">Company name:</label>
            <input type="text" id="company_name" name="company_name" placeholder="e.g. Bridgeport Partners"> <br>

            <label for="customer_type">Customer type:</label> <br>
            <input type="radio" id="individual" name="customer_type" value="individual" required/>
            <label for="individual">Individual</label> <br>
            <input type="radio" id="business" name="customer_type" value="business"/>
            <label for="business">Business</label> <br>
            <input type="radio" id="government" name="customer_type" value="government"/>
            <label for="government">Government</label> <br>
            <input type="radio" id="other" name="customer_type" value="other"/>
            <label for="other">Other</label> <br>

            <label for="contact_method">Preferred contact method:</label> <br>
            <input type="radio" id="contact_phone" name="contact_method" value="phone" required/>
            <label for="contact_phone">Phone</label> <br>
            <input type="radio" id="contact_email" name="contact_method" value="email"/>
            <label for="contact_email">Email</label> <br>
            <input type="radio" id="text_message" name="contact_method" value="text_message"/>
            <label for="text_message">Text message</label> <br>

            <label for="services">Services interested in:</label> <br>
            <input type="checkbox" id="web_design" name="services[]" value="web_design"/>
            <label for="web_design">Web Design</label> <br>
            <input type="checkbox" id="software_development" name="services[]" value="software_development"/>
            <label for="software_development">Software Development</label> <br>
            <input type="checkbox" id="it_support" name="services[]" value="it_support"/>
            <label for="it_support">IT Support</label> <br>
            <input type="checkbox" id="consulting" name="services[]" value="consulting"/>
            <label for="consulting">Consulting</label> <br>

            <label for="newsletter">Would you like to subscribe to our newsletter?</label>
            <label><input type="radio" name="newsletter" id="newsletter_yes" value="Yes" required>Yes</label>
            <label><input type="radio" name="newsletter" id="newsletter_no" value="No">No</label> <br>

            <input type="submit" value="Submit Form">
        </form>
        
    <?php
        function createCSV ($fname, $lname, $email, $age, $phone, $addy, $city, $state, 
        $zip, $company_name, $customer_type, $contact_method, $services, $newsletter) {
            $data = array($fname, $lname, $email, $age, $phone, $addy, $city, $state, 
            $zip, $company_name, $customer_type, $contact_method, $services, $newsletter);
            return '"' . implode('","', $data) . '"';
        }
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $fname = $_POST["fname"];
            $lname = $_POST["lname"];
            $email = $_POST["email"];
            $age = $_POST["age"];
            $phone = $_POST["phone"];
            $addy = $_POST["addy"];
            $city = $_POST["city"];
            $state = $_POST["state"];
            $zip = $_POST["zip"];
            $company_name = $_POST["company_name"];
            $customer_type = $_POST["customer_type"];
            $contact_method = $_POST["contact_method"];
            $newsletter = $_POST["newsletter"];

            $services = isset($_POST["services"])
                ? implode("; ", $_POST["services"])
                : "None";

            $csv = createCSV ($fname, $lname, $email, $age, $phone, $addy, $city, $state, 
            $zip, $company_name, $customer_type, $contact_method, $services, $newsletter);

            echo "<div class='label'>";
            echo htmlspecialchars($csv);
            echo "</div>";
        }
    ?>

    </body>
</html>